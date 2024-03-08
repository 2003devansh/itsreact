"use client"

import React, { useState } from 'react'

const page = () => {
  const {marks ,setMarks} = useState(80);
  const {telly,setTelly} = useState(78);
  return (
    <>
    <h1>hi marks is {marks} </h1>
    <button  onClick={()=>{
      changeMarks();
    }}>
      click me 
      
    </button>
    </>
  )
}

export default page