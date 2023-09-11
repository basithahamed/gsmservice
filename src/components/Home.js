import React, { useContext } from 'react'
import styled from 'styled-components'
import Searchbar from './Searchbar'
import ShowTable from './ShowTable'
import Sidebar from './Sidebar'
import Graph from './Graph'
import FourBox from './BoxComponents/FourBox'

import BasicTable from './BasicTable'




function Home() {


    return (
        
        <>  
        
        <Container> 
            {/* <Searchbar ></Searchbar> */}
            <FourBox></FourBox>
            {/* <Graph></Graph> */}
            
        </Container>
        </>
    )
}

const Container=styled.div`
width:100%;

padding:15px;
height:100vh;
border:2px solid;
// display:flex;
`

export default Home