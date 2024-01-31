import React, { useState } from "react";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Slider from "./Components/Slider";
import Counter from "./Components/Counter";
import Data from "./Components/Data";

function App() {
  return (
    <>
      <div className="bg-zinc-900 h-screen w-full ">
        <Navbar />
        <Slider />
        <Products />
        <Footer />
        <Counter /> 
        <Data name="Fahad" age="21" data={{profession:"student", job: "JobLess"}}/>
      </div>
    </>
  );
}

export default App;
