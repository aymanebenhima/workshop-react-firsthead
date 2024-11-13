import PropTypes from 'prop-types'
// import { CheckCircleIcon, CircleIcon } from '@heroicons/react/solid'
import { FaCheckCircle, FaCircle } from "react-icons/fa";



const Todo = ({ todo, toggleIsDone }) => {
    return (
        <div className='flex items-center justify-between bg-white shadow rounded-lg p-4 mb-2'>
            <div
                className={`flex items-center cursor-pointer ${todo.isDone ? 'line-through text-gray-500' : ''}`}
                onClick={() => toggleIsDone(todo.id)}
            >
                {todo.isDone ? <FaCheckCircle className='w-6 h-6 text-green-500' /> : <FaCircle className='w-6 h-6 text-gray-500' />}
                <span className='ml-2'>{todo.title}</span>
            </div>
        </div>
    )
}
Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleIsDone: PropTypes.func.isRequired
}

export default Todo