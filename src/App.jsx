import React, { useEffect, useState } from 'react'
import Nax from './Nax'
import ShopHead from './ShopHead'
import Cards from './Cards';
import './nav.css'
const App = () => {

  const[cartData,setcartData]=useState([]);

  const[cardCount,setCardCount]=useState(0)
  useEffect(()=>{
    const fetchCartData=async()=>{
      try {
        const res=await fetch('https://fakestoreapi.com/products/')
        const data=await res.json();
        setcartData(data)
      } catch (error) {
        console.error("Error fething api data",error);
      }
    }
    fetchCartData()
  },[])
  const receiveDataFromCards=(data)=>{
      setCardCount(data)

  }
  return (
    <div>
      <Nax cartCount={cardCount}/>
      <ShopHead/>
      <Cards cartData={cartData} sendDataToParent={receiveDataFromCards} />
    </div>
  )
}

export default App
