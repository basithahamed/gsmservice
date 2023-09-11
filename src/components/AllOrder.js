import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import Searchbar from "./Searchbar";
import { db } from "../firebaseconfig";
import { collection, getDocs } from "firebase/firestore";
import { useTable } from '../context/TableContext';

function AllOrder() {
    const [SearchQuery, setSearchQuery] = useState("");
    // const [records, setRecords] = useState([]); // Store the Firestore data here
    const tablecontext=useTable()
    const records=tablecontext.records



    // useEffect(() => {
    //     // Perform the Firestore query inside the useEffect
    //     const fetchData = async () => {
    //         const querySnapshot = await getDocs(collection(db, "cusdata"));
    //         const data = [];
    //         querySnapshot.forEach((doc) => {
    //             // doc.data() is never undefined for query doc snapshots
    //             data.push({ id: doc.id, ...doc.data() });
    //         });
    //         setRecords(data); // Update the state with Firestore data
    //     };

    //     fetchData();
    // }, []); // Empty dependency array to run the effect only once on component mount
    // let index = 1;
    return (
        <Container>
            <h1 className='m-4'>AllOrder</h1>

            <Searchbar q={setSearchQuery}></Searchbar>

            <Table>
                <table id="customers">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Customer Name</th>
                            <th>Device Model</th>
                            <th>Issue</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>

                        {records.map((item, index) => (

                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.customername}</td>
                                <td>{item.devicemodel}</td>
                                <td>{item.issue}</td>
                                <td>{item.mobile}</td>
                            </tr>


                        ))}
                    </tbody>
                </table>
            </Table>
        </Container>
    );
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
export default AllOrder