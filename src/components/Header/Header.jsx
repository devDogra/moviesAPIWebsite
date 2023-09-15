import React from 'react'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'


export default function Header({onSearchTermChange}) {
  return (
    <header className='bg-violet-900 px-4 py-8 text-white bg-gradient-to-r from-blue-600 to-blue-900 '>
        <NavBar />
        <SearchBar onSearchTermChange={onSearchTermChange}/>
    </header>
)

}
