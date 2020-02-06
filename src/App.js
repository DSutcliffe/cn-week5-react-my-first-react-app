import React from 'react';
// Logo from setting up react...
// import logo from './logo.svg';
import './css/App.css';
import Navbar from './components/Navbar.js'

// import Vody from './img/ciroc.jpeg';
import Home from './components/Home.js';
import LoremText from './components/LoremText.js'

function App() {
  return (
    
    <div>
      <Navbar mainPage="Blog" />
      <Home name="Danny" city="Manchester" year={2020} />

      <LoremText />
      <LoremText />
      <LoremText />
      
    </div>
    
  );
}

export default App;
