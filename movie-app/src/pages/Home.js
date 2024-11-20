import React, { useState } from 'react';
import { Button, Form, Input, Modal, Rate } from 'antd';
import Filter from '../components/Filter';
import MovieList from '../components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      posterURL: 'https://th.bing.com/th/id/OIP.rH59QGLqMltU2ieI3xJg7gHaK9?rs=1&pid=ImgDetMain',
      rating: 5,
    },
    {
      title: 'Interstellar',
      description: 'A sci-fi epic that explores space and time.',
      posterURL: 'https://th.bing.com/th/id/R.a9e6b040baac3da8d98356373c7b3920?rik=S%2bid%2bBcoFaGdmQ&riu=http%3a%2f%2fwww.dvdsreleasedates.com%2fcovers%2finterstellar-dvd-cover-71.jpg&ehk=Vk2TtmGhH5p9o17jAegt1DEUAiRqi09ynlz514VIv60%3d&risl=&pid=ImgRaw&r=0',
      rating: 4,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: 0 });

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  const addMovie = () => {
    setMovies([...movies, newMovie]);
    setIsModalOpen(false);
    setNewMovie({ title: '', description: '', posterURL: '', rating: 0 });
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px' }}>Movie App</h1>
      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />
      <Button type="primary" style={{ margin: '20px' }} onClick={() => setIsModalOpen(true)}>
        Add Movie
      </Button>
      <MovieList movies={filteredMovies} />
      <Modal
        title="Add a New Movie"
        visible={isModalOpen}
        onOk={addMovie}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form layout="vertical">
          <Form.Item label="Title">
            <Input
              value={newMovie.title}
              onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="Description">
            <Input
              value={newMovie.description}
              onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="Poster URL">
            <Input
              value={newMovie.posterURL}
              onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="Rating">
            <Rate
              value={newMovie.rating}
              onChange={(value) => setNewMovie({ ...newMovie, rating: value })}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Home;