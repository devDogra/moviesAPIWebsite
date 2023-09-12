import React from 'react'

export default function SearchBar() {
  return (
    <div>
        <input
            type="text"
            placeholder='Search for movies'
            className='bg-white focus:opacity-70 text-black opacity-30 outline-none py-2 px-8 rounded-full'
            // value={searchTerm}
            // onChange={e => setSearchTerm(e.target.value)}
        />

        {/* <button className="search-btn">Search</button> */}
    </div>
)
}
