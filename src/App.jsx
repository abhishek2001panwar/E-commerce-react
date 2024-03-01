import React from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

// import App.css from src 
import './App.css';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <About />
      <Services/>
      <Contact/>
      <Footer />
      
    </div>
  );
}
export default App;
