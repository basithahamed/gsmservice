import React from 'react'
import styled from "styled-components"
function ServiceNeed() {
    return (
        <Container>
            <Leftbtn>
                <p>What Service You Need?</p>
            </Leftbtn>
            <Rightbtn>
                <a>
                    Track Your Service
                </a>

            </Rightbtn>
        </Container>
    )
}

const Container = styled.div`
    background-color:#3089F1;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    
    padding:10px;
    align-items:center;
`
const Leftbtn = styled.div`

p {
    text-decoration: underline;
    color:white;
    
  }

`

const Rightbtn = styled.div`
    color:#3089F1;
    margin-left:8%;
    
    a{
        background-color:white;
        
        border:2px solid transparent;
        padding:8px 12px;
        border-radius:18px;
    }
`
export default ServiceNeed