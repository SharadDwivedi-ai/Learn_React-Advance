import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import { TodoItemsContext } from "./store/todo_items_store";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const newItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [...currValue, { name: itemName, dueDate: itemDueDate }]);
  };

  const deleteItem = (newTodoItems) => {
    const updatedTodoItems = todoItems.filter((item) => item.name !== newTodoItems);
    setTodoItems(updatedTodoItems);
  };

  // const defaultTodoItems = [{ name: "Buy Milk", dueDate: "4/10/2023" }];
  // const defaultTodoItems = [];
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