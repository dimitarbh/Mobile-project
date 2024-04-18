import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../src/components/header/Header.jsx";
import MainContent from "../src/components/mainContent/MainContent.jsx";
import Footer from "../src/components/footer/Footer.jsx";
import Navigation from "./nav.jsx";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/about" element={<Navigation />} />
        </Routes>
        <MainContent />
        <Footer />
    </>
  );
}

export default App;
