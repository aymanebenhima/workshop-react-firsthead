import React, { Component } from 'react';

class AddTask extends Component {
    state = {
        task: ''
    }

    handleChange = (e) => {
        this.setState({ task: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.task.trim()) {
            this.props.addTask(this.state.task);
            this.setState({task: ''})
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <input type="text" className='form-control mb-2' name="task" placeholder="Add Task" onChange={this.handleChange} value={this.state.task} />
                </div>
                <button type="submit" className='btn btn-primary'>Add Task</button>
            </form>
        )
    }
}

export default AddTask;