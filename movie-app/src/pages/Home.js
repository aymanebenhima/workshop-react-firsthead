import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Modal, Rate } from 'antd';
import { INITIAL_MOVIES } from '../data/constants';
import Filter from '../components/Filter';
import MovieList from '../components/MovieList';

const Home = () => {


  const [movies, setMovies] = useState(INITIAL_MOVIES);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: 0 });

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies'));
    if (storedMovies) setMovies(storedMovies);
  }, []);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies])

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  const addMovie = () => {
    setMovies([...movies, {...newMovie, id: Date.now()}]);
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
        open={isModalOpen}
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