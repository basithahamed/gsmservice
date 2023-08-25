import React from "react";
import styled from "styled-components"

import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';

function HeroBanner() {
    
    const boxshadow={boxShadow: '16px -81px 259px -10px rgba(0,0,0,0.81);-webkit-box-shadow: 16px -81px 259px -10px rgba(0,0,0,0.81);-moz-box-shadow: 16px -81px 259px -10px rgba(0,0,0,0.81);'}
    return (
        <Container>
            <TextBox>
            <Fade top>
                <h1>A Premier Alternative to the Apple  Service Center</h1>
                <p>We Prioritize, Trust us to provide top-notch repairs</p>
                <Link>
                    <a className="link">Book Now</a>
                </Link>
                </Fade>

               <Fade bottom>
               <ImageBox>
                    <img src="/images/laptop-topshot.png" width={"400px"} height={"250px"}></img>
                    
                </ImageBox>
               </Fade>
                
            </TextBox>

        </Container>
    )
}
const Container = styled.div`
    min-height:600px;
    margin-top:40px;
    background-color:white;
    display:flex;
    justify-content:center;
    flex-direction:row;

 
`
const TextBox = styled.div`
    padding-top:60px;
    width:465px;
    text-align:center;
    word-break: break-all;
    p{
        margin-top:20px;
    }
    a{
        background-color:#3089F1;
        color:white;
        border:2px solid transparent;
        padding:8px 12px;
        border-radius:18px;
        text-decoration:none;
        
    }
    

    
`
const Link = styled.div`

        color:white;
        cursor:pointer;
        text-decoration:none;
        margin-top:25px;

    
    `
const ImageBox=styled.div`
margin-top:100px;

`

export default HeroBanner