import React from 'react'
import  logo  from '../images/logo.svg';
import Common from './Common';
function Home() {
  return (
    <>
    <Common 
    name="Get your personalized diet plan from " 
    imgsrc = { logo } 
    visit = "/Service" 
    btname = "Get Started" />
    </>
  );
}

export default Home;
