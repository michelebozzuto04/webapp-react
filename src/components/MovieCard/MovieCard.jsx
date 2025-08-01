import { Link } from 'react-router-dom'
import './MovieCard.css'

function MovieCard({ movie }) {
    return (
        <Link to={`/movies/${movie.id}`}>
            <div className='cardContainer'>
                <img className='moviePoster' src={movie.image} />

                {/* <div className="detailsContainer">
                    <h3>{movie.title}</h3>
                    <h4>{movie.director}</h4>
                    <p>{movie.genre}</p>
                </div> */}
            </div>
        </Link>
    )
}

export default MovieCard