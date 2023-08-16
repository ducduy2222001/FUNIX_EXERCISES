import { Component, createRef } from "react";
import MyContext, { MyContextConsummer } from "./Context";

class Todo extends Component {
  static contextType = MyContext;
  constructor() {
    super();
    this.state = {
      todo: {},
      valueInput: "",
    };
    this.InputRef = createRef();
  }
  //(*) Cách 1: có thể khai báo hàm ở NGOÀI CONSTRUCTOR, khi gọi hắn thì dùng this.handleOnChange
  handleOnChange = (e) => {
    this.setState({
      valueInput: e.target.value,
    });
  };

  render() {
    //(*) Cách 2: có thể khai báo hàm ở đây như bình thường ở function component nha
    // const handleOnChange = (e) => {
    //   console.log("ASSS", e);
    // };

    //dùng Destructuring để dễ dàng lấy data
    const { todos, handleAddTodo, handleDeleteTodo } = this.props;
    const checkEnter = () => {
      if (this.state.valueInput.trim().length === 0) {
        return false;
      }
      return true;
    };

    const handleAddTodoState = () => {
      if (checkEnter() === true) {
        handleAddTodo({
          name: this.state.valueInput,
          id: Math.random(),
        });

        this.setState({ valueInput: "" });
        this.InputRef.current.focus();
      } else {
        alert("Please enter information!");
        this.InputRef.current.focus();
      }
    };

    const handleDeleteTodoItem = (id) => {
      handleDeleteTodo(id);
    };

    return (
      <div style={{ margin: "30px" }}>
        <input
          ref={this.InputRef}
          value={this.state.valueInput}
          onChange={this.handleOnChange}
          style={{ width: "200px", border: "1px solid #000" }}
        />
        <button
          style={{ padding: "5px", margin: "0 10px" }}
          onClick={handleAddTodoState}
        >
          Add
        </button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <h1>
                {todo.name}{" "}
                <span
                  onClick={() => {
                    handleDeleteTodoItem(todo.id);
                  }}
                >
                  &times;
                </span>
              </h1>
            </li>
          ))}
        </ul>

        <MyContextConsummer>
          {(props) => {
            return (
              <div>
                <h1>Context cusumer: {props.count}</h1>
                <button
                  onClick={() => {
                    props.setCount((prev) => prev + 1);
                  }}
                >
                  Increase count
                </button>
                <button
                  onClick={() => {
                    props.setCount((prev) => prev - 1);
                  }}
                >
                  Desincrease count
                </button>
              </div>
            );
          }}
        </MyContextConsummer>
      </div>
    );
  }

  componentDidMount() {
    console.log("A1");
  }

  componentDidUpdate() {
    console.log("A2");
  }

  componentWillUnmount() {
    console.log("A3");
  }
}

export default Todo;
