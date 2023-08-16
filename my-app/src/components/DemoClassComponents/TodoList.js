import { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: "JS",
          id: 1,
        },
        {
          name: "TSX",
          id: 2,
        },
      ],
    };
  }

  handleAddTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  handleDeleteTodo = (id) => {
    let newTodos = this.state.todos;
    newTodos = newTodos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div>
        <Todo
          todos={this.state.todos}
          handleAddTodo={this.handleAddTodo}
          handleDeleteTodo={this.handleDeleteTodo}
        />
      </div>
    );
  }
}

export default TodoList;
