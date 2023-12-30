import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <>
      <Link to="/">
        <div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
          <img src="/Images/logo.png" alt='Logo' className='h-10 w-10'/>
          <p className='text-lg text-neutral-700 pb-1'>Taskify</p>
        </div>
      </Link>
    </>
  )
}

export default Logo