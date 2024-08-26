import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "app/firebase/index";
import "app/assets/css/styles.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editableTodoId, setEditableTodoId] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  useEffect(() => {
    const userId = auth.currentUser ? auth.currentUser.uid : null;
    if (!userId) {
      alert("You must be logged in to view todos.");
      return;
    }

    const todosRef = collection(db, `todos/${userId}/items`);
    const q = query(todosRef);

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const todosList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTodos(todosList);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching todos: ", error);
        setLoading(false);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth.currentUser]);

  const handleEditClick = (todoId) => {
    setEditableTodoId(todoId);
  };

  const handleSaveClick = async (todoId, newText) => {
    if (!newText.trim()) {
      alert("Todo text cannot be empty.");
      return;
    }

    try {
      const userId = auth.currentUser ? auth.currentUser.uid : null;
      if (!userId) {
        alert("You must be logged in to update todos.");
        return;
      }

      const todoRef = doc(db, `todos/${userId}/items/${todoId}`);
      await updateDoc(todoRef, { text: newText });
      setEditableTodoId(null);
    } catch (err) {
      console.error("Error updating todo: ", err);
      alert("Failed to update todo. Please try again.");
    }
  };

  const handleDeleteClick = async (todoId) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      try {
        const userId = auth.currentUser ? auth.currentUser.uid : null;
        if (!userId) {
          alert("You must be logged in to delete todos.");
          return;
        }

        const todoRef = doc(db, `todos/${userId}/items/${todoId}`);
        await deleteDoc(todoRef);
      } catch (err) {
        console.error("Error deleting todo: ", err);
        alert("Failed to delete todo. Please try again.");
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="list___main">
      {todos.map((todo) => (
        <li key={todo.id} className="input__box">
          {editableTodoId === todo.id ? (
            <input
              className="todo__input__box"
              type="text"
              value={todo.text}
              onBlur={(e) => handleSaveClick(todo.id, e.target.value)}
              onChange={(e) =>
                setTodos((prevTodos) =>
                  prevTodos.map((t) =>
                    t.id === todo.id ? { ...t, text: e.target.value } : t
                  )
                )
              }
              autoFocus
            />
          ) : (
            <div
              className="todo__text__box"
              onDoubleClick={() => handleEditClick(todo.id)}
            >
              {todo.text}
            </div>
          )}
          <div className="todo__button__box">
            {editableTodoId === todo.id ? (
              <button
                type="button"
                className="save__btn"
                onClick={() => handleSaveClick(todo.id, todo.text)}
              >
                Save
              </button>
            ) : (
              <button
                type="button"
                className="edit__btn"
                onClick={() => handleEditClick(todo.id)}
              >
                Edit
              </button>
            )}
            <button
              type="button"
              className="delete__btn"
              onClick={() => handleDeleteClick(todo.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
