import React from 'react'
import logo from '../assets/tinasoft_Logo.png';

const TinaSoftLogo = () => {
    return (
       
        <div >
        <img src={logo} className="company_logo" alt="logo" style= {{ position:'relative',
        height:'33px', width:'86px',marginTop:'4%',marginLeft:'4%' ,zIndex:'1'
        }} />
        </div>
       
    )
}

export default TinaSoftLogo
