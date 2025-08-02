import { useParams } from 'react-router-dom'
import './SingleMoviePage.css'
import { useEffect, useState } from 'react';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

function SingleMoviePage() {

    const { id } = useParams();
    const singlemovie_api_url = `http://localhost:3000/api/movies/${id}`;
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(singlemovie_api_url)
            .then(res => res.json())
            .then(data => setMovie(data))
    }, [])

    return (
        <div className='container'>
            <div className="detailsContainer">

                <section className="movieDetails">
                    <div className="leftContainer">
                        <img src={movie.image} />
                    </div>

                    <div className="rightContainer">
                        <h1>{movie.title} ({movie.release_year})</h1>
                        <p className='abstract'>{movie.abstract}</p>
                        <p className='genre'><span>Genre: </span>{movie.genre}</p>
                        <p className='director'><span>Director: </span>{movie.director}</p>
                    </div>
                </section>

                <section className='reviewSection'>
                    <h2>Community Reviews</h2>
                    {movie?.reviews?.map((review) => {
                        return (
                            <ReviewCard key={review.id} review={review} />
                        )
                    })}
                </section>

            </div>
        </div>
    )
}

export default SingleMoviePage