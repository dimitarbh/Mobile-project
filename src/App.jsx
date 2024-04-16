import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from '../src/components/header/Header.jsx';
import MainContent from "../src/components/mainContent/MainContent.jsx";
import Footer from '../src/components/footer/Footer.jsx';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
        <MainContent />
      <Footer />
    </>
  );
}

export default App;
