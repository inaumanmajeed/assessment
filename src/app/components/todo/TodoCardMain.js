import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import "app/assets/css/styles.css";


const ThoughtsBookMainComponent = () => {
  return (
    <>
      <div className="main__container">
      <div className="squares">
        <div className="square" style={{ "--i": 0 }}></div>
        <div className="square" style={{ "--i": 1 }}></div>
        <div className="square" style={{ "--i": 2 }}></div>
        <div className="square" style={{ "--i": 3 }}></div>
        <div className="square" style={{ "--i": 4 }}></div>
        <div className="square" style={{ "--i": 5 }}></div>
        </div>
        <div className="container__content">
          <AddTodo />
          <h2 className="subtitle__main">Memories</h2>
          <TodoList />
        </div>
      </div>
    </>
  );
};

export default ThoughtsBookMainComponent;
