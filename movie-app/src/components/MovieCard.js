import { Card, Rate } from 'antd';

const MovieCard = ({ movie }) => {
  return (
    <Card
      hoverable
      style={{ width: 300, margin: '20px auto' }}
      cover={<img alt={movie.title} src={movie.posterURL} />}
    >
      <Card.Meta title={movie.title} description={movie.description} />
      <Rate disabled defaultValue={movie.rating} />
    </Card>
  );
};

export default MovieCard;