import React from 'react'
import styled from "styled-components"
import Bounce from 'react-reveal/Bounce';


function Chennai() {
    return (
        <Container>
            <Bounce left>

            <Toptext>
                <h5>- Chennai's Largest Apple Products Service Center -</h5>
            </Toptext>
            <BottomText>
                <h2>Experience Our Doorstep Service</h2>
            </BottomText>
            </Bounce>

        </Container>
    )
}
const Container = styled.div`
    margin-top:30px;

`
const Toptext=styled.div`
    
        color:#F44913;
        text-transform:uppercase;
    
`
const BottomText=styled.div`
// p{
    // margin-top:30px;
    // font-size:20px;
    font-weight:500;
    text-transform:uppercase;
// }
`


export default Chennai