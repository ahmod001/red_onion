import { Alert, Button, Fade } from '@mui/material';
import { useContext, useMemo, useState } from 'react';
import CartItemCard from '../CartItemCard/CartItemCard';
import { cartContext, updateCartContext } from "../../../App";
import { deliveryFormContext } from '../Cart';
import { useNavigate } from 'react-router-dom';
import { localStorageHandler } from '../../../assets/FakeData/FakeData';

const CartSummary = () => {

    // Get States From Context
    const [cart, setCart] = useContext(cartContext);
    const [updatedCart, setUpdatedCart] = useContext(updateCartContext);
    const { isUserFilledForm, userDeliveryDetails } = useContext(deliveryFormContext);
    const [deliveryDetails, setDeliveryDetails] = userDeliveryDetails;
    const [isUserFilledDeliveryForm, setIsUserFilledDeliveryForm] = isUserFilledForm;

    const navigate = useNavigate();

    // Manage PlaceOrder Btn
    const [isPlaceOrderBtnDisable, setIsPlaceOrderBtnDisable] = useState(true)
    useMemo(() => {
        if (updatedCart.length > 0 && isUserFilledDeliveryForm) {
            setIsPlaceOrderBtnDisable(false)
        } else {
            setIsPlaceOrderBtnDisable(true)
        }
    }, [updatedCart, isUserFilledDeliveryForm])

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

    // Order Placed Handler
    const handlePlaceOrder = () => {

        if (updatedCart.length > 0) {
            navigate('/track-order')

            const orderDetails = {
                delivery: {
                    restaurant_location: 'The Rustic Plate Restaurant, Paris',
                    customer_location: deliveryDetails.address
                },
                cart: updatedCart.map(meal => ({ name: meal.name, quantity: meal.quantity, total: meal.total })),
                total_bill: total
            }
            localStorageHandler('set', 'orderDetails', orderDetails)
        }
    }

    return (
            <div className='col space-y-6 2xl:max-w-[25rem] lg:max-w-[21rem] w-full max-w-[25rem] mx-auto'>
                {/* Delivery details */}
                <ul className="text-sm space-y-3">
                    {/* Restaurant Location */}
                    <li>From <strong>The Rustic Plate Restaurant</strong></li>

                    {/* Estimated Delivery Time */}
                    <li>Estimated delivery time:

                        {isUserFilledDeliveryForm ?
                            ` ${deliveryTime} ` : ' ... '}

                        Minutes</li>

                    {/* User Location */}
                    <li>To
                        <strong>
                            {isUserFilledDeliveryForm ?
                                ` ${deliveryDetails.address} ` : ' ... '}
                        </strong>
                    </li>
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
                <Button
                    fullWidth
                    onClick={handlePlaceOrder}
                    disabled={isPlaceOrderBtnDisable}
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