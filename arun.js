// import { useState, useEffect } from "react"
// import Product from "./Product/Product"

// function MyFunc(){
//     let [data, setData] = useState([])
//     useEffect(() => {
//         getData()
//     },[])

//     async function getData(){
//         let response = await fetch("https://fakestoreapi.com/products")
//         let products = await response.json()
//         console.log(products)
//         setData(products)
//     }
    
//     return (
//         <>
//           <h1>Hello</h1>
//           {
//             data.map((each) => {
//                 return <Product key={each.id} {...each} />
//             })
//           }            
//         </>
//     )
// }



// export default MyFunc



import {useState, useEffect} from 'react'
import './App.css';
import Product from './Product/Product';

function App() {
  const [db, setDb]= useState([])
  useEffect(()=>{
    databaseData()
  }, [])
  async function databaseData(){
    const database = await fetch('http://localhost:5600/user')
    const data = await database.json()
    console.log(data)
    setDb(data)
  }
  return (
    <>
    {
      db.map((d)=>{
        return <Product key={d.ser_number} {...d}/>
        
      })
    }
      </>
  );
}



export default App;
