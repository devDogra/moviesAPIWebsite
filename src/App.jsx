import { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './components/Movie/Movie';

// DEBOUNCE AND THROTTLING NEEDED

const API_URL = 'https://www.omdbapi.com?apikey=9f6a20f9'
// const API_URL = 'https://www.omdbapi.com?apikey=9f6a20f9'

function App() {

    const movie = {
        "Title": "Pulp Fiction",
        "Year": "1994",
        "imdbID": "tt0110912",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    }



    async function fetchMoviesBySearch(search) {
        const response = await fetch(`${API_URL}&s=${search}`)
        const data = await response.json()
        return data;
    }

    const [movieList, setMovieList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    // fetchMoviesBySearch("Pulp Fiction").then(d => console.log(d)); 
    useEffect(() => {
        fetchMoviesBySearch(searchTerm).then(data => {
            setMovieList(data.Search)
            console.log(data);
        })
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
                                        return <MovieCard movie={movie} />
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
