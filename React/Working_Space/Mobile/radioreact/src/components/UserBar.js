import React from 'react'
import UserIcoin from '../assets/UserIcoin.png'
import styled from "styled-components"
import blueNotifi from '../assets/blueNotifi.png'

const UserBar = () => {
    return (
        <>
        <UserBlock>
           
                <img src={UserIcoin} className="UserIcon" alt="icon" style = {{
                   position:'relative',
        height:'50px', width:'50px'


                }} />
                
<span style={{
        display: 'flex',
    flexDirection:'column',
    alignItems: 'center'
                }}
                >
                <p style = {{
            position:'relative',
           fontSize:'32px',
            color:'#108DC7',
            margin: '0'


                }}> Internet </p>
               
                <p style = {{
            position:'relative',
           fontSize:'32px',
            color:'#108DC7',
            margin: '0'


                }}> Radio </p>
</span>
            
                <img src={blueNotifi} className="UserIcon" alt="icon" style = {{
                   position:'relative',
        height:'50px', width:'50px'


                }} />
            </UserBlock>

            </>
    )
}
const UserBlock=styled.div`

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export default UserBar
