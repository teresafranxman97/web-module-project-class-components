import React from 'react';

class TodoForm extends React.Component {

    render(){
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input 
                    onChange={this.props.handleChanges}
                    value={this.props.todoItem}
                    type="text"
                    name="text"
                    placeholder="...todo"
                />
                <button>Add Todo</button>
                <button onClick={this.props.clearTodo}>
                    Clear completed
                </button>
            </form>
        )
    }
}

export default TodoForm;