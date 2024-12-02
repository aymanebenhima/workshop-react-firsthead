import { Card, Rate } from 'antd';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <Card
        hoverable
        style={{ width: 300, margin: '20px auto' }}
        cover={<img alt={movie.title} src={movie.posterURL} />}
      >
        <Card.Meta title={movie.title} description={movie.description} />
        <Rate disabled defaultValue={movie.rating} />
      </Card>
    </Link>
  );
};

export default MovieCard;