import React from 'react'

const Todo = ({id, text}) => {
    return <li className='list-group-item' id={id} >{text}</li>
}

export default Todo