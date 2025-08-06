import { useEffect, useState } from 'react'
import './MoviesPage.css'
import MovieCard from '../../components/MovieCard/MovieCard';
import { useGlobalContext } from '../../contexts/GlobalContext';
import Loader from '../../components/Loader/Loader';

function MoviesPage() {

    const { loading, setLoading } = useGlobalContext()
    const movies_api_url = "http://localhost:3000/api/movies";
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(movies_api_url)
            .then(res => res.json())
            .then(data => setMovies(data))

        movies.length !== null && setLoading(false)
    }, [])

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
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
            )}
        </>

    )
}

export default MoviesPage