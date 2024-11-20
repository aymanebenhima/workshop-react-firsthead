import React, { useState } from 'react';
import PetsList from './components/PetsList';
import useFilter from './hooks/useFilter';
import { Form } from 'react-bootstrap';

const petsData = [
  {
    name: 'Milo',
    race: 'Bulldog',
    type: 'Dog',
    location: 'Paris',
    photo: 'https://via.placeholder.com/150',
    status: 'Available',
  },
  {
    name: 'Bella',
    race: 'Persian',
    type: 'Cat',
    location: 'Lyon',
    photo: 'https://via.placeholder.com/150',
    status: 'Available',
  },
  {
    name: 'Charlie',
    race: 'Siberian',
    type: 'Dog',
    location: 'Marseille',
    photo: 'https://via.placeholder.com/150',
    status: 'Available',
  },
];

export default function App() {
  const [pets, setPets] = useState(petsData);
  const { filteredPets, updateFilter, filters } = useFilter(pets);

  const adoptPet = (petToAdopt) => {
    setPets(
      pets.map((pet) =>
        pet.name === petToAdopt.name ? { ...pet, status: 'Adopted' } : pet
      )
    );
  };

  return (
    <div className="container">
      <h1>Page d'Adoption</h1>
      <Form>
        <Form.Group controlId="filterRace">
          <Form.Label>Race</Form.Label>
          <Form.Control
            type="text"
            placeholder="Filtrer par race"
            value={filters.race}
            onChange={(e) => updateFilter('race', e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="filterType">
          <Form.Label>Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Filtrer par type"
            value={filters.type}
            onChange={(e) => updateFilter('type', e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="filterLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Filtrer par lieu"
            value={filters.location}
            onChange={(e) => updateFilter('location', e.target.value)}
          />
        </Form.Group>
      </Form>
      <PetsList pets={filteredPets} onAdopt={adoptPet} />
    </div>
  );
}