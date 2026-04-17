import AppName from "./compoments/AppName";
import AddTodo from "./compoments/AddTodo";
import TodoItem from "./compoments/TodoItem";
import TodoItem1 from "./compoments/TodoItem1";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="item-container">
        <TodoItem />
        <TodoItem1 />
      </div>
    </center>
  );
}

export default App;
