import React from 'react'
import styled from "styled-components"
import { useState } from 'react';
import ServiceNeed from './ServiceNeed';
function Header() {
    const [BurgerStatus, setBurgerStatus] = useState(false);
    return (
        <>
            <ServiceNeed></ServiceNeed>
            <Container>

                <BurgerLogo>
                    <li>Logo</li>
                </BurgerLogo>
                <MenuLeft>
                    <li>Logo</li>
                    <li>Mac</li>
                    <li>iPhone</li>
                    <li>iWatch</li>
                    <li>iPad</li>
                    <li>AirPods</li>
                </MenuLeft>
                <MenuRight>
                    <li>Resources</li>
                    <li>Contact Us</li>
                </MenuRight>
                <BurgerMenu onClick={() => { setBurgerStatus(true) }}>
                    <li><i class="fa-solid fa-bars"></i></li>
                </BurgerMenu>
                <CustomMenu show={BurgerStatus}>
                    <Xbtn onClick={() => { setBurgerStatus(false) }}>
                        <i class="fa-solid fa-x"></i>
                    </Xbtn>
                    <li>Mac</li>
                    <li>iPhone</li>
                    <li>iWatch</li>
                    <li>iPad</li>
                    <li>AirPods</li>
                </CustomMenu>
            </Container>
        </>
    )
}
const Container = styled.div`
    background-color:white;
    height:80px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-around;
    li{
        list-style: none;
        margin-left:20px;
    }
`

const MenuLeft = styled.div`
    display:flex;
    height:100%;
    justify-content:center;
    align-items: center;
    li{
        list-style: none;
        
    }
    @media only screen and (max-width: 600px) {
        li {
            display:none;
        }
      }
`
const MenuRight = styled.div`
    display:flex;
    height:100%;
    justify-content:center;
    align-items: center;
li{
    list-style: none;
    gap:20px;
}
@media only screen and (max-width: 600px) {
    li {
        display:none;
    }
  }
`
const BurgerMenu = styled.div`
    
        display:none;
 
@media only screen and (max-width: 600px) {
    
        display:block;
    
  } 
`
const BurgerLogo = styled.div`
display:none;
 
@media only screen and (max-width: 600px) {
    
        display:block;
    
  }`

const Xbtn = styled.div`
  float:right;
  padding:10px;
  
`
const CustomMenu = styled.div`
    
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color: white;
    width:300px;
    z-index:100;
    transform:translateX(100%);
    transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition:transform 0.2s ease-in;
    border-left:2px solid black;
    li{
        padding:20px 0px;
        margin-top:20px;
        text-align:left;
        border-bottom:1px solid rgba(0,0,0,0.2);
    }
`


export default Header