import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
            this.state = {
               todoItem: ''             
            }
    }

    render(){
        return (
            <form>
                <input 
                    onChange={this.handleChanges}
                    type="text"
                    value={this.state.todoItem}
                    name="text"
                />
                <button>Add Todo</button>
                <button>Clear completed</button>
            </form>
        )
    }
}

export default TodoForm;