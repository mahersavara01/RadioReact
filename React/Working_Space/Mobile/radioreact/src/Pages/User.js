import React from 'react'
import styled from "styled-components"
// import logo from '../assets/tinasoft_Logo.png';
import UserBar from '../components/UserBar';
import TinaSoftLogo from '../components/TinaSoftLogo'
import Category from '../components/Category'

const User = () => {
    return (
        <>
        <Container/>
      <TinaSoftLogo />
        <UserBar />

        
         {/* <Main /> */}

         
    
        <Category />
         </>
    )
}
const Container=
  styled.div`

  
 
 /**
  * this is the css space for the div ( background tag)
  *! applying this will make the background fullfill in the white space outside
  */


  background-color: #EBEBEB;
  
  position: absolute;
  top:0;
  right: 0;
  left: 0;
  bottom: 0;
  //? can phai  chinh lai opacity cua background
  filter: blur(1px);
  
  
  
`

export default User
