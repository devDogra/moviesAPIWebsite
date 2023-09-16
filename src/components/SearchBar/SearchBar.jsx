import React, { useEffect, useState } from 'react'

export default function SearchBar({onSearchTermChange}) {

const [searchTerm, setSearchTerm] = useState("");


  return (
    <div className='h-min'>
        <input
            type="text"
            placeholder='Search'
            className='
            bg-white 
            text-sm 
            focus:opacity-70 
            transition-all ease-in-out duration-200
            w-min
            p-4
            text-black opacity-30 outline-none py-2 focus:px-10 rounded-full'
            
            // value={searchTerm}
            // onChange={e => setSearchTerm(e.target.value)}
            onChange={e => onSearchTermChange(e.target.value)}
        />

        {/* <button className="search-btn">Search</button> */}
    </div>
)
}
