import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, toggleIsDone }) => {
  return (
    <div className='my-4'>
        {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} toggleIsDone={toggleIsDone} />
        ))}
    </div>
  )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleIsDone: PropTypes.func.isRequired
}

export default TodoList