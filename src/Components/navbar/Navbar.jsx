import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex rounded-full  bg-slate-800 px-8 py-5 items-center text-white font-bold justify-between'>
        <Link href ={"/"}>GT Coding</Link>
        <Link className='bg-white p-2 text-black' href ={"/addTopic"}>Add Topic</Link>
    </nav>
  )
}

export default Navbar