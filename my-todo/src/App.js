import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const changeInputHandler = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const addListHandler = () => {
    setTodoList([...todoList, inputValue]);
    setInputValue("");
  };

  return (
    <div className="container">
      <p>명언</p>
      <h1>TodoList</h1>
      <div>
        <input type="radio" name="tag" value="공부" /> 공부
        <input type="radio" name="tag" value="할일" /> 할일
        <input type="radio" name="tag" value="살것" /> 살것
      </div>
      <input
        className="inputBar"
        type="text"
        onChange={changeInputHandler}
        value={inputValue}
      />
      <button onClick={addListHandler}>추가</button>

      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
