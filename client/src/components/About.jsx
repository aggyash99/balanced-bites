import React from 'react'
import  logo  from '../images/logo.svg';
import Common from './Common';
function About() {
  return (
    <>
    <Common 
    name="Welcome to About page" 
    imgsrc = {logo} 
    visit = "/Contact" 
    btname = "Contact Now" />
    </>
  );
}

export default About;
