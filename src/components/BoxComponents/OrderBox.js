import React from 'react'
import { styled } from 'styled-components'

function OrderBox(props) {
  let icon = props.icon

  return (
    <Container color={props.color}>
      
      <div id='box'>

        <i className={icon}></i>
        <p>
          {props.ordertype}
        </p>
        {props.number}
      </div>
    </Container>
  )
}

const Container = styled.div`
  width:100%;
  height:100%;

  padding:10px;
  #box{
    border:2px solid;
    background: rgba(255, 255, 255, 0.82);
    
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.8px);
    -webkit-backdrop-filter: blur(4.8px);
    border: 10px solid rgba(255, 255, 255, 1);
    border-radius:12px;
    height:150px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
  i{
    color:${props => props.color};
  }
`

export default OrderBox