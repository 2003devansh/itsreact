"use client"

import React, { useState } from 'react'
import Header from '@/Components/Header';

const page = () => {
   const [marks, setMarks] = useState(67); 

  return (
    <>
    <h1>my marks is {marks}</h1>
    <button onClick={()=>{
      setMarks(78);
    }}>click me </button>
    <Header />
    </>
  )
}

export default page