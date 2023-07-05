import "./TodoItem.css";
import React from "react";

const TodoItem = (props) => {
  return <div className="item">{props.item}</div>;
};

export default TodoItem;
