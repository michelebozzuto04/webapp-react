import { useEffect, useState } from 'react'
import './MovieList.css'

function MovieList() {

    const movies_url = "http://localhost:3000/api/movies"
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch(movies_url)
            .then(res => res.json())
            .then(data => setResults(data))
    }, [])

    return (
        <div>
            {results.map((result) => {
                return (
                    <div>
                        {result.title}
                    </div>
                )
            })}
        </div>
    )
}

export default MovieList