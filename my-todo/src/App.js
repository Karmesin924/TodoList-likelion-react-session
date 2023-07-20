import "./App.css";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [idValue, setIdValue] = useState(0);

  const changeInputHandler = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const addListHandler = () => {
    setTodoList([...todoList, { id: idValue, data: inputValue }]);
    setInputValue("");
    setIdValue((prev) => prev + 1);
  };

  const removeListHandler = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  useEffect(() => {}, []);

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
      <button className="add-button" onClick={addListHandler}>
        추가
      </button>

      <TodoList removeListHandler={removeListHandler} todoList={todoList} />
    </div>
  );
}

export default App;
