import React from "react";
import Nav from '../Nav';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import '../css/Home.css';
import '../css/Home1.css';
import '../../App.css';




const Home = () => {

  return (
    <div>
      <Nav></Nav>
      <Page1></Page1>
      <Page2></Page2>
      <Page3></Page3>
      
    </div>
  );
}

export default Home;
