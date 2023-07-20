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
    setTodoList([
      ...todoList,
      { id: idValue, data: inputValue, searched: false },
    ]);
    setInputValue("");
    setIdValue((prev) => prev + 1);
  };

  const removeListHandler = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  const searchListHandler = () => {
    const newTodoList = todoList.map((item) => {
      if (inputValue === "") {
        return {
          ...item,
          searched: false,
        };
      } else if (item.data.includes(inputValue)) {
        return {
          ...item,
          searched: true,
        };
      } else {
        return {
          ...item,
          searched: false,
        };
      }
    });
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
      <button className="search-button" onClick={searchListHandler}>
        검색
      </button>
      <TodoList removeListHandler={removeListHandler} todoList={todoList} />
    </div>
  );
}

export default App;
