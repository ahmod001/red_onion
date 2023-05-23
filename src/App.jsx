import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Fade } from "@mui/material";
import OrderMeal from "./Components/OrderMeal/OrderMeal";

function App() {

  return (
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
            <Route path="/*" element={<Home />} />
          </Routes>
        </main>
      </Fade>
      <Footer />
    </BrowserRouter>
  )
}

export default App
