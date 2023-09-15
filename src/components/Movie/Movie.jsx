export default function MovieCard({movie}) {

    const POSTER_SIZE = 200;
    const NO_POSTER = "N/A";

    function getPlaceholderImageURL(size) {
        const url = `https://via.placeholder.com/${size}`;
        return url; 
    }


    return (
        <div className="rounded-lg  bg-blue-700 p-1 ">
            <div className="movie-info-container">
                <p className="text-white text-sm p-1 opacity-70 mb-1">{movie.Year}</p>
            </div>

            <div className="movie-poster-container">
                <img className="movie-poster"
                    src={movie.Poster == NO_POSTER
                        ? getPlaceholderImageURL(POSTER_SIZE)
                        : movie.Poster
                    }
                    alt={`movie poster of ${movie.Title}`}
                />
            </div>

            <div className="movie-title-container p-2 text-white ">
                <p className="uppercase font-mono opacity-70 text-sm">{movie.Type}</p>
                <h2 className="font-bold text-lg drop-shadow-md">{movie.Title}</h2>
            </div>
        </div>
    );
}