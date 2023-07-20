import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='bg-gray-500 p-5 flex text-3xl text-white'>
        <div className='flex gap-8 w-2/4 ml-10'>
            <Link href='/'>Home</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/team'>Team</Link>
            <Link href='/about'>About</Link>
        </div>
        <div className='w-2/4 flex justify-end mr-20'>
            <Link href='/login'>Login</Link>
        </div>
    </nav>
  )
}

export default NavBar