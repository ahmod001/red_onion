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
import Login from "./Components/Login/Login";
import TrackOrder from "./Components/TrackOrder/TrackOrder";

export const cartContext = createContext();
export const updateCartContext = createContext();
export const userContext = createContext();

function App() {

  // Note: If we used 2_States for Cart to avoid unwanted bug's //

  //This State used to Card_item's render only
  const getCartItemsFromLocalStorage = localStorageHandler('get', 'cart');
  // Set cart-items from LocalStorage
  const [cart, setCart] = useState(getCartItemsFromLocalStorage ? getCartItemsFromLocalStorage : [])

  // This State used for Cart_summary calculation
  const [updatedCart, setUpdatedCart] = useState([])
  useMemo(() => setUpdatedCart(cart), [cart])

  // LogIn Manage from here
  const userInfo = localStorageHandler('get', 'userInfo')
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(userInfo ? true : false)

  return (
    <userContext.Provider value={{ isUserLoggedInState: [isUserLoggedIn, setIsUserLoggedIn] }}>
      <cartContext.Provider value={[cart, setCart]}>
        <updateCartContext.Provider value={[updatedCart, setUpdatedCart]}>
          <BrowserRouter>
            <Navbar />
            <Fade
              onDurationChange={() => 1500}
              in={true}>

              <main className="min-h-screen">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/meal/:mealId" element={<OrderMeal />} />
                  <Route path="/login" element={<Login />} />

                  {/* Private Route */}
                  <Route element={<PrivateRoute />}>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/track-order" element={<TrackOrder />} />
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
    </userContext.Provider>
  )
}

export default App
