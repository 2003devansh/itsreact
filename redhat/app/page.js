"use client"
import React, { useState } from 'react'

const page = () => {

  const [marsks,setMarks] = useState(89);
  return (
<>
<h1>my marks  were {marsks}</h1>
<button onClick={()=>{
  setMarks(33);
}}>click</button>
</>
  )
}

export default page