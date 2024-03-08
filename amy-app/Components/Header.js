import React from 'react'
import Link from 'next/link'

const Header = (props) => {
  return (
    <>
    <div className='Header-Nav'>
        <h2>LOGO</h2>

        <div className='popo'>
        <Link href='/About'>about</Link>
        <Link href='/Courses'>courses</Link>
        <Link href='/Product'>products</Link>

        </div>
    </div>

  


    </>
  )
}

export default Header