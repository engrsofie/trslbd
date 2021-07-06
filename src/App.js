import React from 'react';
import './App.css';
import NavbarSection from './Components/NavbarSection/NavbarSection';
import Slider from './Components/Slider/Slider';
import Core from './Components/Core/Core';
import Profile from './Components/Profile/Profile';
import Concern from './Components/Concern/Concern';
import Truly from './Components/Truly/Truly';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <NavbarSection/>
      <Slider />
      <Core />
      <Profile/>
     <Concern/>
     <Truly/>
     <Footer/>
    </div>
  );
}

export default App;
