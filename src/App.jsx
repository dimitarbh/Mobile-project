import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header';
import MainContent from "./components/mainContent/MainContent";
import Footer from './components/footer/Footer';


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
