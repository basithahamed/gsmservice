import { createContext, useContext,useState,useEffect } from "react";
import { db } from "../firebaseconfig";
import { collection, getDocs } from "firebase/firestore";
import Records from "../components/data"
const TableContext=createContext(null)

export const TableProvider=({children})=>{

    const [records, setRecords] = useState([]);

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

    // setRecords(data)

            
                  
    useEffect(() => {
        const temp=Records.map((item)=>({
            customername:item.customername,
            devicemodel:item.devicemodel,
            issue:item.issue,
            mobile:item.mobile,
            status:item.status

        }))
        setRecords(temp)
    }, []);

    console.log("some:",records)
    console.log("some:",Records)
    


    return (<TableContext.Provider value={{records}}>
        {children}
    </TableContext.Provider>)
}


export const useTable=()=>{
    return useContext(TableContext)
}










