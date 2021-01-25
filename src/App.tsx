import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Hours from './components/Hours'
// import Order from './components/Order'
import About from './components/About'
import Hero from './components/Hero'
import { useMediaQuery } from 'react-responsive';
import Address from './components/Address';

function App() {
  let mobile = useMediaQuery({maxWidth: 700});
  return (
    <div className="App">
      {!mobile && <Navigation mobile={mobile} /> }
      <div className="Elements">
        <Hero/>
        <Hours/>
        <Address/>
        <About/>
        {/* <Order/> */}
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
