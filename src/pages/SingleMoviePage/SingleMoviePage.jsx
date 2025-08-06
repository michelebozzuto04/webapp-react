import { useParams } from 'react-router-dom'
import './SingleMoviePage.css'
import { useEffect, useState } from 'react';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import { Square } from 'ldrs/react'
import 'ldrs/react/Square.css'
import { useGlobalContext } from '../../contexts/GlobalContext';
import Loader from '../../components/Loader/Loader';

function SingleMoviePage() {

    const { id } = useParams();
    const { loading, setLoading } = useGlobalContext();
    const singlemovie_api_url = `http://localhost:3000/api/movies/${id}`;
    const [movie, setMovie] = useState({});
    const [formData, setFormData] = useState({
        vote: 0,
        name: '',
        text: ''
    });

    useEffect(() => {
        fetch(singlemovie_api_url)
            .then(res => res.json())
            .then(data => setMovie(data))
            .catch(error => console.log(error))

        Object.keys(movie).length !== 0 && setLoading(false)

    }, [movie.reviews, id])

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`${singlemovie_api_url}/reviews`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.error) {
                    console.log(data.message);
                    return
                }

                setMovie(prevState => ({ ...prevState, reviews: [...prevState.reviews, data.review] }))


                setFormData({
                    vote: 0,
                    name: '',
                    text: ''
                })
            })
    }

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
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

                        <section className='reviewFormSection'>
                            <h2>Write Review</h2>
                            <form className='reviewForm' onSubmit={handleSubmit}>
                                <input
                                    value={formData.vote}
                                    onChange={e => setFormData({ ...formData, vote: e.target.value })}
                                    name='vote'
                                    type='number'
                                    placeholder='Type your vote (1-5)'
                                    className='textInput'
                                    step={1}
                                    max={5}
                                    min={1}
                                />

                                <input
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    name='name'
                                    type='text'
                                    placeholder='Type your name'
                                    className='textInput'
                                />

                                <textarea
                                    value={formData.text}
                                    onChange={e => setFormData({ ...formData, text: e.target.value })}
                                    name='text'
                                    type='text'
                                    placeholder='Write review content'
                                    className='textInput'
                                    rows={4}
                                />

                                <div className="btnContainer">
                                    <button className='btn btnFill' type='submit'>Submit</button>
                                    <button className='btn btnOutline' type='reset'>Cancel</button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            )}
        </>

    )
}

export default SingleMoviePage