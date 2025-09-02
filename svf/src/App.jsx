import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Internship from "./pages/Internship";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/internships" element={<Internship />} />
      </Routes>
      
      <Footer/>
    </>
  );
}

export default App;
