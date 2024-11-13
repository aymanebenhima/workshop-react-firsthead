import PropTypes from 'prop-types'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export default function AddTask ({ addTodo }) {
    const [task, setTask] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!task.trim())
            return
        addTodo(task)
        setTask('')
    }
    return (
        <form onSubmit={handleSubmit} className='flex mb-4'>
            <Input type="text" className='px-3 py-2 mr-2' value={task} onChange={e => setTask(e.target.value)} placeholder='Add a new task...' />
            <Button type='submit'>Add</Button>
        </form>
    )
}

AddTask.propTypes = {
    addTodo: PropTypes.func.isRequired
}