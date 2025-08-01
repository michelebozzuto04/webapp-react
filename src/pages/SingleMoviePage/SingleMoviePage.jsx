import { useParams } from 'react-router-dom'
import './SingleMoviePage.css'
import { useEffect, useState } from 'react';

function SingleMoviePage() {

    const { id } = useParams();
    const singlemovie_api_url = `http://localhost:3000/api/movies/${id}`;
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(singlemovie_api_url)
            .then(res => res.json())
            .then(data => setMovie(data))
    }, [])

    function formatDate(reviewDate) {
        const date = new Date(reviewDate);

        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const hour = date.getHours();
        const minutes = date.getMinutes()

        return `${day}/${month}/${year} alle ore ${hour}:${minutes}`
    }

    return (
        <div>
            <div className="container">

                <section className="infoContainer">
                    <h1>{movie.title}</h1>
                    <p className='abstract'>{movie.abstract}</p>
                    <p className='director'>Director: {movie.director}</p>

                    <img src={movie.image} />
                </section>

                <section>
                    {movie?.reviews?.map((review) => {
                        return (
                            <div key={review.id} className='reviewCard'>
                                <span>{review.name}</span>
                                <span>{formatDate(review.created_at)}</span>
                                <h3>{(review?.vote).toFixed(1)}</h3>
                            </div>
                        )
                    })}
                </section>

            </div>
        </div>
    )
}

export default SingleMoviePage