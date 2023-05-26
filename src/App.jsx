import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Fade } from "@mui/material";
import OrderMeal from "./Components/OrderMeal/OrderMeal";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Cart from "./Components/Cart/Cart";
import { createContext, useState } from "react";
import { localStorageHandler } from "./assets/FakeData/FakeData";

export const cartContext = createContext();
export const updateCartContext = createContext();

function App() {
  const getCartItemsFromLocalStorage = localStorageHandler('get', 'cart')
  const [cart, setCart] = useState(getCartItemsFromLocalStorage ? getCartItemsFromLocalStorage : [])

  // This State used for Cart_summary calculation
  const [updatedCart, setUpdatedCart] = useState([])
  useMemo(() => setUpdatedCart(cart), [cart])

  return (
    <cartContext.Provider value={[cart, setCart]} >
      <updateCartContext.Provider value={[updatedCart, setUpdatedCart]}>
        <BrowserRouter>
          <Navbar />
          <Fade
            onDurationChange={() => 1500}
            in={true}>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/meal/:mealId" element={<OrderMeal />} />

                {/* Private Route */}
                <Route element={<PrivateRoute />}>
                  <Route path="/cart" element={<Cart />} />
                </Route>

                {/* Home component will show if there any unknown path entered */}
                <Route path="/*" element={<Home />} />
              </Routes>
            </main>
          </Fade>
          <Footer />
        </BrowserRouter>
      </updateCartContext.Provider>
    </cartContext.Provider >
  )
}

export default App
