import React from 'react'
import '../App.css';
import styled from "styled-components"
import logo from '../assets/tinasoft_Logo.png';
import InputForm from '../components/InputForm';

const Login = () => {
    return (
        <>
        <Container/>
        <img src={logo} className="company_logo" alt="logo" style= {{ position:'relative'}} />
        
         {/* <Main /> */}
         <InputForm />
        
         </>
    )
}
const Container=
  styled.div`

  
 
 /**
  * this is the css space for the div ( background tag)
  *! applying this will make the background fullfill in the white space outside
  */


  background-image: linear-gradient(to right, rgba(16,141,199,0.8), rgba(239,142,56,0.8));
  position: absolute;
  top:0;
  right: 0;
  left: 0;
  bottom: 0;
  //? can phai  chinh lai opacity cua background
  filter: blur(1px);
  
  
  
`

export default Login
