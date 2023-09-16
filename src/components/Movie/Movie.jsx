// import IMDB_ICON from "../../assets/icons/icons8-imdb-48.png"
import IMDB_ICON from "../../assets/icons/imdb-icon.svg"

export default function MovieCard({movie}) {

    const POSTER_SIZE = 200;
    const NO_POSTER = "N/A";
    const IMDB_URL = 'https://www.imdb.com/title'

    function getPlaceholderImageURL(size) {
        const url = `https://via.placeholder.com/${size}`;
        return url; 
    }


    return (
        <div className="hover:shadow-sm hover:ring-blue-300 hover:ring-2  rounded-lg  bg-blue-700 text-center  max-w-sm">
            <div className="movie-info-container flex items-center p-1 justify-between">
                <p className="text-white text-sm p-1 opacity-70 mb-1">{movie.Year}</p>
                <div className="mx-2 hover:shadow-sm hover:shadow-sky-100 rounded-lg hover:cursor-pointer">
                    <a href={`${IMDB_URL}/${movie.imdbID}`}>
                        <img className="w-8" src={IMDB_ICON} alt="imdb movie link icon" />
                    </a>
                </div>
            </div>

            <div className="movie-poster-container">
                <img className="movie-poster w-full"
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