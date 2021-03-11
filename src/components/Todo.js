import React from 'react';

const Todo = props => {
    return (
        <div className="todo-container">
            <p>{ props.item.task }</p>
        </div>
    )
}

export default Todo;