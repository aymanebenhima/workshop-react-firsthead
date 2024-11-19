import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function PetCard({ pet, onAdpot }) {
    const { name, race, type, location, photo, status } = pet

    return (
        <Card style = {{ width: "18rem", margin: "1rem" }}>
            <Card.Img variant='top' src={photo} alt={`Photo of ${name}`} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Race: </strong> {race} <br />
                    <strong>Type: </strong> {type} <br />
                    <strong>Location: </strong> {location} <br />
                    <strong>Status: </strong> {status} <br />
                </Card.Text>
                <Button variant='primary' onClick={() => onAdpot(pet)} disabled={status === 'Adopted'}>
                    {status === 'Adopted' ? 'Adopté' : 'Adopter'}
                </Button>
            </Card.Body>

        </Card>
    )
}