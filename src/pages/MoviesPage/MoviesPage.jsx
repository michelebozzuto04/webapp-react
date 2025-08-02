import { useEffect, useState } from 'react'
import './MoviesPage.css'
import MovieCard from '../../components/MovieCard/MovieCard';

function MoviesPage() {

    const movies_api_url = "http://localhost:3000/api/movies";
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(movies_api_url)
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])

    return (
        <section>
            <div className="container">
                <div className="movieList">
                    {movies.map((movie) => {
                        return (
                            <MovieCard key={movie.id} movie={movie} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default MoviesPage