import React from 'react'
import { styled } from 'styled-components'
import OrderBox from './BoxComponents/OrderBox';
import Graph from './Graph';
import Fade from 'react-reveal/Fade';
import Table from "./Table"
import BasicTable from "./BasicTable"
import { useState } from 'react';

function Database() {
  
    
  return (
    <>
    <Container>
      
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
      <h1>Recent Order</h1>
      <BasicTable ></BasicTable>
      

    </Container>
    </>
  )
}
const Container = styled.div`
    
    
    height:100vh;
    border-radius:8px;
    
    
    width:99%;
    
    margin:auto;
    margin-top:40px;
    // border:2px solid;
    padding:25px;
    background-color: #F3F2F5;
    // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display:flex;
    flex-direction:column;
    
    
`
const Items = styled.div`
width:50%;
height:100%:
display:flex;
flex-direction:row;
justify-content: space-between;
@media only screen and (max-width: 700px) {
  width:100%;
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


export default Database