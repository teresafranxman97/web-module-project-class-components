import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import '../src/Todo.css';

const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
      this.state = {
        todos: data,
        todoItem: ''
      }
  }

/// EVENT HANDLERS BEGIN ///
  handleChanges = e => {
    this.setState({ todoItem: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.addTodo(this.state.todoItem);
  }
/////////////

  addTodo = (todoItem) => {
    this.setState({
      todos: 
      [
        ...this.state.todos,
        {
          task: todoItem,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  toggleCompleted = (itemId) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

 clearTodo = () => {
   this.setState({
     todos: this.state.todos.filter(item => {
       return !item.completed
     })
   })
 }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm  
            handleSubmit={this.handleSubmit} 
            handleChanges={this.handleChanges} 
            clearTodo={this.clearTodo}
            addTodo={this.addTodo} 
          />
        </div>
          <TodoList 
            todos={this.state.todos} 
            toggleCompleted={this.toggleCompleted} 
          />
      </div>
    );
  }
}

export default App;
