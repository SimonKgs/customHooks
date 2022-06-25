import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

// const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos"));
};

export const useTodos = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] add",
      payload: todo,
    };

    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    dispatchTodo({
      type: "[TODO] remove",
      payload: id,
    });
  };

  const onToggleTodo = (id) => {
    dispatchTodo({
      type: "[TODO] toggle",
      payload: id,
    });
  };

  const todosCount = todos ? todos.length : 0;

  const pendingTodosCount = todos ? todos.filter( todo => !todo.done).length : 0

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
  };
};
