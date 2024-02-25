import React from 'react'

const page = () => {
  let marks = 78 ; 

  const changeMarks = () => {
    console.log(marks);
    marks = 78 ; 
    console.log(marks);
  }
  return (
    <>
    <h1>hi marks is {marks} </h1>
    <button >
      click me 
    </button>
    </>
  )
}

export default page