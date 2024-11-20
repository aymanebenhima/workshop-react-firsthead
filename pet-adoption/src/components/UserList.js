import React from 'react'
import { ListGroup } from 'react-bootstrap'
import useFetch from '../hooks/useFetch'

export default function UserList() {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <ListGroup>
            {data.map((user) => {
                <ListGroup.Item key={user.id}>{user.name}</ListGroup.Item>
            })}
        </ListGroup>
    )
}