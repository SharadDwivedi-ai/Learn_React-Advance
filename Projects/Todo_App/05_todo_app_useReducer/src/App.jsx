import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import { TodoItemsContext } from "./store/todo_items_store";
import "./App.css";
import { useState, useReducer } from "react";

const todoItemsReducer = (currValue, action) => {
  let updateTodoItems = currValue;
  if (action.type === "ADD_ITEM") {
    updateTodoItems = [...currValue, {
      name: action.payload.name,
      dueDate: action.payload.itemDueDate
    }]
  } else if (action.type === "DELETE_ITEM") {
    updateTodoItems = currValue.filter((item) => item.name !== action.payload.name);
  }
  return updateTodoItems;
};

function App() {



  return (
    <TodoItemsContext.Provider value={{
      todoItems,
      newItem,
      deleteItem,
    }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMsg />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;