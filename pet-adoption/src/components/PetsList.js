import React from 'react';
import PetCard from './PetCard';
import { Row, Col } from 'react-bootstrap';

function PetsList({ pets, onAdopt }) {
  return (
    <Row>
      {pets.map((pet) => (
        <Col key={pet.name}>
          <PetCard pet={pet} onAdopt={onAdopt} />
        </Col>
      ))}
    </Row>
  );
}

export default PetsList;