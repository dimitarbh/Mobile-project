import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../src/components/header/Header.jsx";
import MainContent from "../src/components/mainContent/MainContent.jsx";
import Footer from "../src/components/footer/Footer.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem('token'); 
    navigate('/login'); 
  };
  return (
    <>
        <Header isLoggedIn={isLoggedIn} onSignOut={handleSignOut}/>
        <MainContent />
        <Footer />
    </>
  );
}

export default App;
