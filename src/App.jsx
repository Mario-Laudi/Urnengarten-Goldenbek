import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Container from "./Components/Container.jsx";
import Footer from "./Components/Footer.jsx";
import ContactForm from "./Pages/ContactForm";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Services from "./Pages/Services.jsx";
import "./App.css";
import Layout from "./Components/Layout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
