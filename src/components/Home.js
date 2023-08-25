import React from 'react'
import styled from "styled-components"
import Chennai from './Chennai'
import Header from './Header'
import HeroBanner from './HeroBanner'

function Home() {
    return (
        <Container>
            <Header></Header>
            <Chennai></Chennai>
            <HeroBanner></HeroBanner>
        </Container>
    )
}

const Container = styled.div`
height:100vh;
 
`

export default Home