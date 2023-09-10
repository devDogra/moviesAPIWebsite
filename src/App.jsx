import { useCallback, useEffect, useState } from 'react'
import './App.css'
import MovieCard from './components/Movie/Movie';
// import { debounce } from 'lodash';
import debounce from './utils/debounce';
// DEBOUNCE AND THROTTLING NEEDED

const API_URL = 'https://www.omdbapi.com?apikey=9f6a20f9'
// const API_URL = 'https://www.omdbapi.com?apikey=9f6a20f9'

function App() {
    const [movieList, setMovieList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    async function fetchAndRenderMovies(query) {
        const response = await fetch(`${API_URL}&s=${query}`)
        const { Search } = await response.json()
        setMovieList(Search);
        console.log(Search);
    }

    const DELAY = 1000; 
    const debouncedFetchAndRenderMovies = useCallback(debounce(fetchAndRenderMovies, DELAY), [])


    useEffect(() => {
       debouncedFetchAndRenderMovies(searchTerm);
    }, [searchTerm])




    return (
        <div className="app">
            <h1>Movies</h1>

            <div className="search">
                <input
                    type="text"
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />

                <button className="search-btn">Search</button>
                {
                    movieList?.length > 0 ?
                        (
                            <div className="movies-container">
                                {
                                    movieList.map(movie => {
                                        return <MovieCard key={movie.imdbID} movie={movie} />
                                    })
                                }
                            </div>
                        )
                        :
                        (
                            <div className="no-movies-div">
                                No Movies Found
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default App
