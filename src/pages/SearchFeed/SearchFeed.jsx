import React, { useCallback, useState, useEffect } from 'react'
import Header from '../../components/Header/Header';
import MovieCard from '../../components/Movie/Movie';
import debounce from '../../utils/debounce';

export default function SearchFeed() {
    const [movieList, setMovieList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const DEBOUNCE_DELAY = 1000;
    const API_URL = 'https://www.omdbapi.com'
    const API_KEY = '9f6a20f9'


    async function fetchAndRenderMovieList(searchTerm) {
        const url = `${API_URL}?apikey=${API_KEY}&s=${searchTerm}`
        // const url = 'https://www.omdbapi.com?apikey=9f6a20f9&s=spiderman'
        const response = await fetch(url);
        const list = await response.json();
        console.log(list.Search);
        setMovieList(list.Search);
    }

    function handleSearchTermChange(term) {
        setSearchTerm(prev => term);

    }

    const debouncedFetchAndRenderMovieList = useCallback(
        debounce(fetchAndRenderMovieList, DEBOUNCE_DELAY),
        []
    );

    useEffect(() => {
        debouncedFetchAndRenderMovieList(searchTerm);
    }, [searchTerm])

    return (
        <>
            <Header onSearchTermChange={(query) => {
                setSearchTerm(prev => query);
            }} />

            <div className='w-screen'>
                {
                    movieList?.length > 0 ? 
                        (
                            <div className="flex flex-col items-center  p-4 gap-6 justify-center sm:grid-cols-2 
                            md:grid-cols-4 lg:grid-cols-6
                            sm:grid sm:gap-4 md:gap-6 lg:gap-12 bg-blend-luminosity">
                                {movieList.map(movie => {
                                        return <MovieCard key={movie.imdbID} movie={movie} />
                                })}
                            </div>
                        ) : 
                        (
                            <div className="no-movies-div text-white text-lg p-4 ">
                                No Movies Found
                            </div>
                        )
                }
            </div>
        </>



    )
}
