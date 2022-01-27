import React from 'react'
import styled from "styled-components"
import "./css/InputForm.css"

const InputForm = () => {
    return (
        <Round>
            <Title> Đăng Nhập</Title>
            <p className="userName">Tài Khoản</p>
           <InputText />
           <p className="userPass"> Mật Khẩu</p>
           
           <InputPassword />
           <Forgot as ="a" className="quenmatkhau"  href='/quenmatkhau'> Quên mật khẩu ?</Forgot>
           <Button as="a" href="#">Đăng Nhập</Button>
        </Round>
    )
}


const Forgot = styled.button`
 color : #1DA1F2;
font-size: 16px;
border: none; 
text-decoration: none;
`;

const Round= styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
//! tạo màu box +resiZE BOX 
  border-radius: 25px;
  background: white;
  ${'' /* background-position: left top;
  background-repeat: repeat; */}
  //! cai nay de chinh độ dài và rộng của box div
  ${'' /* padding: 10%; */}
  width: 322px;
  height:508px;

  @media only screen and (min-width: 800px) {
    width: 500px;
  height: 500px;
  
}
  //! cai nay se chinhj cac content phia trong
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  //! de allignt box o giua
  margin-left: auto;
  margin-right: auto;
`
const Title = styled.h1`
margin-top: -4px;
font-size: 52px;
font-weight:500;
text-shadow: 0px 1px 3px black;

//? chua xong doan nay ( do bong cho font)
`


const InputText = styled.input.attrs(props => ({
    // we can define static props
    type: "text",
  
    // or we can define dynamic ones
    size: props.size || "5%",
  }))`
    border: none;
  border-bottom: 2px solid black;
  width: 80%;
  
    /* here we use the dynamically computed prop */
    ${'' /* margin: ${props => props.size}; */}
    ${'' /* padding: ${props => props.size}; */}
  `;


  
const InputPassword = styled.input.attrs(props => ({
    // we can define static props
    type: "password",
  
    // or we can define dynamic ones
    
    size: props.size || "5%",
    
  }))`

width: 80%;
    border: none;
  border-bottom: 2px solid black;
  
    /* here we use the dynamically computed prop */
    ${'' /* margin: ${props => props.size}; */}
    ${'' /* padding: ${props => props.size}; */}
  `;


  const Button = styled.button`
  display: inline-block;
  color: white;
  ${'' /* font-size: 1em; */}
    ${'' /* margin: 15%; */}
   
    width: 50%;
    text-align: center;
    padding: 0.75em 3em;
  
  border: 2px solid #185C98;
  background: #185C98;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  ${'' /* display: block; */}
  //? Can chinh sua them cai button nay
`;



export default InputForm
