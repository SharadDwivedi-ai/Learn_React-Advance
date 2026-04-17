import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [];
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Like this video",
  //     dueDate: "right now",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    // const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    // setTodoItems(newTodoItems);

    // Latest best version of handleNewItem function: to avoid errors
    // setTodoItems((currValue) => {
    //   const newTodoItems = [...currValue, { name: itemName, dueDate: itemDueDate }]
    //   return newTodoItems;
    // });

    // Shorter version of the above code:
    setTodoItems((currValue) => [...currValue, { name: itemName, dueDate: itemDueDate }]);
  };

  const handleDeleteItem = (newTodoItems) => {
    const updatedTodoItems = todoItems.filter((item) => item.name !== newTodoItems);
    setTodoItems(updatedTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMsg todoItems={todoItems} />}
      <TodoItems onDeleteClick={handleDeleteItem} todoItems={todoItems} />
    </center>
  );
}

export default App;