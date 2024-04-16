import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header';
import MainContent from "./components/mainContent/MainContent";
import Footer from './components/footer/Footer';

// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  return (
    <Provider store={store}>
      <Header isLoggedIn={isLoggedIn} />
        <MainContent />
      <Footer />
    </Provider>
  );
}

export default App;
