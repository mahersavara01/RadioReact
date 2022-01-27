import React from 'react'
import styled from 'styled-components'
import Controller from '../assets/Controller.png'
import ManageContent from '../assets/ManageContent.png'
import ManageDevice from '../assets/ManageDevice.png'
import calendar from '../assets/calendar.png'

 //! cần chỉnh đường link */
const Category = () => {
    return (
        
        <>

            <CategoryBlock>


            <span style={{
        display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    color:'#108DC7'
                } } className="Controller"
                >

        <img src={Controller} className="UserIcon" alt="icon" style = {{
                   position:'relative',
        height:'42px', width:'auto'
                }} />
                <p style = {{fontSize:'8px'}}>Bảng điều khiển</p>

                </span>

                <span style={{
        display: 'flex',
    flexDirection:'column',
    alignItems: 'center'
                }}
                >
                <img src={ManageDevice} className="UserIcon" alt="icon" style = {{
                   position:'relative',
        height:'42px', width:'auto',
                }} />
                <p style = {{fontSize:'8px', color:'#777777'}}>Quản lí thiết bị</p>


                </span>

                <span style={{
        display: 'flex',
    flexDirection:'column',
    alignItems: 'center'
                }}
                >
                 <img src={calendar} className="UserIcon" alt="icon" style = {{
                   position:'relative',
        height:'42px', width:'auto'
                }} />
                <p style = {{fontSize:'8px', color:'#777777'}}>Quản lí lịch phát</p>
               


                </span>
               
                <span style={{
        display: 'flex',
    flexDirection:'column',
    alignItems: 'center'
                }}
                >
                 <img src={ManageContent} className="UserIcon" alt="icon" style = {{
                   position:'relative',
        height:'42px', width:'auto'
                }} />
                <p style = {{fontSize:'8px', color:'#777777'}}>Quản lí nội dung</p>
               


                </span>


            </CategoryBlock>

        </>
    )

}
const CategoryBlock=styled.div`
    display: flex;
  background-color: #FFFFFF;
  position: absolute;
    bottom: 0;
  justify-content: space-evenly;
  align-items: center;
  width: 390px;
  height: 100px;
  
`

export default Category
