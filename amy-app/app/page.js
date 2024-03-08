"use client"

import React, { useState } from 'react'
import Header from '@/Components/Header';

const page = () => {
   
  // sending data from page to component 
  // to send data fromparet to child we use props 
  const [user,setUser] = useState("userName");
  const [Editor, setEditor] = useState("EditorName")

  return (
    <>
     <h2>this is a home page </h2>
    
    </>
  )
}

export default page