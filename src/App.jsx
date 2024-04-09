import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
        <MainContent />
    </>
  );
}

export default App;
