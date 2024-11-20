import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function PetCard({ pet, onAdopt }) {
  const { name, race, type, location, photo, status } = pet;

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Race :</strong> {race} <br />
          <strong>Type :</strong> {type} <br />
          <strong>Location :</strong> {location} <br />
          <strong>Status :</strong> {status}
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => onAdopt(pet)}
          disabled={status === 'Adopted'}
        >
          {status === 'Adopted' ? 'Adopté' : 'Adopter'}
        </Button>
      </Card.Body>
    </Card>
  );
}