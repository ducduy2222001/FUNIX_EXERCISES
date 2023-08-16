import { useRef } from "react";
import { useStore, actions } from "../store";

function TodoList() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const inputRef = useRef();
  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput(""));
    inputRef.current.focus();
  };

  return (
    <div>
      {/* -----APP TODO------ */}
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="Enter to..."
        onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
        style={{ width: "200px", border: "1px solid #000" }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() => {
                dispatch(actions.deleteTodo(index));
              }}
              style={{ margin: "0 10px" }}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
