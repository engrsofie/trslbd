import React from "react";
import NavbarSection from "../NavbarSection/NavbarSection";
import Slider from "../Slider/Slider";
import Core from "../Core/Core";
import Profile from "../Profile/Profile";
import Concern from "../Concern/Concern";
import Truly from "../Truly/Truly";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavbarSection/>
      <Slider/>
      <Core/>
      <Profile/>
      <Concern/>
      <Truly/>
      <Footer/>
    </div>
  );
};

export default Home;
