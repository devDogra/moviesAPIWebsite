import { useCallback, useEffect, useState } from 'react'
import './App.css'
import MovieCard from './components/Movie/Movie';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import SearchFeed from './pages/SearchFeed/SearchFeed';
// import { debounce } from 'lodash';
import debounce from './utils/debounce';
// DEBOUNCE AND THROTTLING NEEDED

const API_URL = 'https://www.omdbapi.com?apikey=9f6a20f9'
// const API_URL = 'https://www.omdbapi.com?apikey=9f6a20f9'

function App() {

    return (
        <SearchFeed />           
    )
}

export default App
