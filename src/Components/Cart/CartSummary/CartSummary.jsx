import { Button, Fade } from '@mui/material';
import { useContext, useState } from 'react';
import CartItemCard from '../CartItemCard/CartItemCard';
import { cartContext, updateCartContext } from "../../../App";

const CartSummary = () => {
    const [cart, setCart] = useContext(cartContext);
    const [updatedCart, usetUpdatedCart] = useContext(updateCartContext);

    // Generated fake estimated delivery time
    const [deliveryTime, setDeliveryTime] = useState(Math.round(Math.random() * 90) + 10)

    /// Calculating The Bill ///
    // Sub-Total
    const subTotal = updatedCart.reduce((total, cartItem) => Number.parseInt(total + cartItem.total), 0)
    // Tax 2.50%
    const tax = Number.parseInt(((subTotal / 100) * 2.5).toFixed(2));
    // Delivery Charge
    const deliveryCharge = cart.length > 0 ? 2.99 : 0;
    // Total 
    const total = (subTotal + deliveryCharge + tax).toFixed(2);

    return (
        <div className='col space-y-6 2xl:max-w-[25rem] lg:max-w-[21rem] md:max-w-[24rem] w-full max-w-[27rem] mx-auto'>
            {/* Delivery details */}
            <ul className="text-sm space-y-3">
                {/* Restaurant Location */}
                <li>From <strong>The Rustic Plate Restaurant</strong></li>
                {/* Estimated Delivery Time */}
                <li>Estimated delivery time: ... Minutes</li>
                {/* User Location */}
                <li>To ...<strong></strong></li>
            </ul>

            {/* Cart_Item Cards*/}
            {cart.length > 0 ?
                <div style={{ scrollbarWidth: 'thin' }} className='col space-y-3.5 max-h-[15rem] px-0.5 pb-2 w-full overflow-auto'>
                    {
                        cart.map(meal => (
                            <CartItemCard key={meal.id} meal={meal} />
                        ))
                    }
                </div>

                // Cart_item Skeleton
                : <Fade in={true}>
                    <div className='h-28 rounded-xl w-full bg-gray-100' />
                </Fade>}

            {/* Total Bill */}
            <table className='table-auto h-28 text-sm w-full'>
                <tbody>
                    <TableRow title="Subtotal" amount={subTotal} />
                    <TableRow title="Tax" amount={tax} />
                    <TableRow title="Delivery charge" amount={deliveryCharge} />
                    <TableRow title="Total" amount={total} />
                </tbody>
            </table>

            {/* Place Order Button */}
            <Button fullWidth
                disabled={true}
                sx={{ textTransform: 'capitalize' }}
                variant='contained'
                color='error'>
                Place Order
            </Button>
        </div>
    )
}


// This sub-component will use inside Bill Table
const TableRow = ({ title, amount }) => (
    <tr className={` ${title === 'Total' && 'text-lg'} font-medium`}>
        <td >{title}</td>
        <td>$ {amount}</td>
    </tr>
)

export default CartSummary;