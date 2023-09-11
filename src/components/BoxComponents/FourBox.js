import React from 'react'
import Fade from 'react-reveal/Fade';
import OrderBox from './OrderBox';
import { styled } from 'styled-components'

function FourBox() {
  return (
    <Items>
        <Fade left>
          <TopMenu>
            <OrderBox ordertype="PendingOrder" icon="fa-regular fa-clock" number="130" color="red"></OrderBox>
            <OrderBox ordertype="Inreview" icon="fa-regular fa-eye" number="130" color="wheat"></OrderBox>
          </TopMenu>
        </Fade>
        <Fade left>
        <BottomMenu>
          <OrderBox ordertype="Completed" icon="fa-solid fa-check" number="130" color="Green"></OrderBox>
          <OrderBox ordertype="Deliverd" icon="fa-solid fa-truck" number="130" color="Blue"></OrderBox>
          
        </BottomMenu>
        </Fade>
        
      </Items>
      
  )
}


const Items = styled.div`
width:50%;
height:100%:
display:flex;
flex-direction:row;

margin:25px;

justify-content: space-between;
@media only screen and (max-width: 700px) {
  width:100%;
  margin:auto;
  margin-top:10px;
}

`
const TopMenu = styled.div`
display:flex;
width:100%;
`
const BottomMenu = styled.div`
display:flex;
width:100%;
`
export default FourBox