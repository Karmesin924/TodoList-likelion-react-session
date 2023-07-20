import "./TodoItem.css";
import React from "react";

const TodoItem = (props) => {
  const clickRemoveHandler = () => {
    props.removeListHandler(props.item.id);
  };
  return (
    <div
      className="item"
      style={{
        background: props.item.searched == true ? "#4444eb" : "#6633cc",
      }}
    >
      <div>{props.item.data}</div>
      <div className="item-button">
        <input type="checkbox" />
        <button onClick={clickRemoveHandler} className="item-x">
          X
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
