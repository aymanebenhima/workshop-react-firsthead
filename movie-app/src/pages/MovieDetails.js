import { useParams, useNavigate } from 'react-router-dom'
import { Button, Rate} from 'antd'

const MovieDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const movies = JSON.parse(localStorage.getItem('movies')) || []
    const movie = movies.find((movie) => movie.id === parseInt(id, 10))

    if(!movie)
        return <h1>Movie not found from Movie Details !</h1>

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <img src={movie.posterURL} alt={movie.title} style={{ width: '200px', height: '300px', 'border-radius': '10px' }} />
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <Rate disabled defaultValue={movie.rating} />
            <br />
            <Button style={{ marginTop: '20px' }} onClick={() => navigate(-1)}>Back</Button>
        </div>
    )
}

export default MovieDetails