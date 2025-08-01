import './MovieCard.css'

function MovieCard({ movie }) {
    return (
        <div>
            <img src={movie.cover_img} />
            <h3>{movie.title}</h3>
        </div>
    )
}

export default MovieCard