export default function MovieCard({movie}) {

    const POSTER_SIZE = 200;
    const NO_POSTER = "N/A";

    function getPlaceholderImageURL(size) {
        const url = `https://via.placeholder.com/${size}`;
        return url; 
    }


    return (
        <div className="movie">
            <div className="movie-info-container">
                <p>{movie.Year}</p>
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

            <div className="movie-title-container">
                <p>{movie.Type}</p>
                <h2>{movie.Title}</h2>
            </div>
        </div>
    );
}