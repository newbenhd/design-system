import React, { useState, useReducer } from "react";

type State = {
  todoList: { id: string; task: string; complete: boolean }[];
};
const initialData: State = {
  todoList: [
    {
      id: "a",
      task: "Clean bathroom",
      complete: false,
    },
    {
      id: "b",
      task: "Make breakfast",
      complete: false,
    },
  ],
};
type Action =
  | { type: "TO_DO"; payload: { id: string } }
  | { type: "UNDO_TODO"; payload: { id: string } };
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "TO_DO":
      return {
        ...state,
        todoList: state.todoList.map((task) =>
          task.id === action.payload.id ? { ...task, complete: true } : task
        ),
      };
    case "UNDO_TODO":
      return {
        ...state,
        todoList: state.todoList.map((task) =>
          task.id === action.payload.id ? { ...task, complete: false } : task
        ),
      };
    default:
      return state;
  }
};
const useData = () => {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>, State>(
    reducer,
    initialData,
    () => initialData
  );
  return [state, dispatch];
};
export default useData;
