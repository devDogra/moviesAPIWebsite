import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className='flex items-center gap-8 h-fit bg-gray-800 text-white py-4 px-4'>
        <h1 className= 'font-bold text-4xl'>MovieCliff</h1>
        <Link to="/profile" className='bg-slate-600 py-2 px-4 rounded-lg font-bold hover:underline'>Profile</Link>
        <Link to="/" className='bg-slate-600 py-2 px-4 rounded-lg font-bold hover:underline'>Feed</Link>
    </header>
  )
}
