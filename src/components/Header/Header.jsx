import React from 'react'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'
export default function Header() {
  return (
    <header className='bg-violet-900 px-4 py-8 text-white bg-gradient-to-r from-fuchsia-400 to-violet-800 '>
        <NavBar />
        <SearchBar />
    </header>
)

}
