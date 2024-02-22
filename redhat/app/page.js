import { Long_Cang } from 'next/font/google';
import React from 'react'

const page = () => {
  let marks = 45;

  const changemarks = ()=>{
    console.log(marks);
    marks = 99; 
    console.log(marks);
  }
  return (
<>
<div className='statement'>hey nice to meet you {marks}</div>
<button onClick={changemarks} className='btn'>click me</button>
</>
  )
}

export default page