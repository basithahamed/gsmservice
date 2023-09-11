import React from 'react'
import { styled } from 'styled-components'
import Searchbar from "./Searchbar"
import Records from "./data"
import { useState,useEffect } from 'react'
import { useContext } from 'react'
import {Demo} from '../context/Demo'
function PendingOrder() {
  
  const [SearchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const prints=()=>{
      console.log(SearchQuery);
    }
    prints();
  }, [SearchQuery]);
  
  // const {Username}=useContext(Demo)
  // const {setUsername}=useContext(Demo)
  // setUsername("ahamed")

  return (

    <Container>
      <h1 className='m-4'>PendingOrder</h1>
      {/* <h1>{Username}</h1> */}

      <Searchbar q={setSearchQuery}></Searchbar>

      <Table>

        <table id="customers">
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>content</th>
              <th>gender</th>
            </tr>
          </thead>
          <tbody>
          {Records.filter((record)=>record.id.includes(SearchQuery)||record.title.toLowerCase().includes(SearchQuery)||record.content.toLowerCase().includes(SearchQuery)||record.gender.toLowerCase().includes(SearchQuery)).map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td>{item.gender}</td>
              </tr>
            ))}



          </tbody>

        </table>
      </Table>
    </Container>

)
}
const Container = styled.div`
width:100%;

padding:0px;
margin:0px;

border:2px solid;
`
const Table = styled.div`
width:100%;
margin:auto;


#customers{
  width:95%;
  
  margin:auto;
  margin-top:25px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color:white;
  color: black;
}
#customers tr:nth-child(even){background-color: #ddd;}

#customers tr
{
  text-align:left;  
}


`
export default PendingOrder