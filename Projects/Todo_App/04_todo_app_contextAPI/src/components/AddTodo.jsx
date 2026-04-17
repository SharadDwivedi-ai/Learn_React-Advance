import { useContext } from "react";
import { useRef, useState } from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { TodoItemsContext } from "../store/todo_items_store";

function AddTodo() {
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems; 
  // After destructuring the above code, we can write the below code:
  const { newItem } = useContext(TodoItemsContext);
  const todoNameInput = useRef();
  const todoDueDateInput = useRef();



  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameInput.current.value;
    const todoDueDate = todoDueDateInput.current.value;
    todoNameInput.current.value = "";
    todoDueDateInput.current.value = "";
    newItem(todoName, todoDueDate);

  }

  return (
    <div className="container text-center">
      <form className="row sd-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameInput}
            placeholder="Enter Todo Here"

          />

        </div>
        <div className="col-4">
          <input type="date" ref={todoDueDateInput} />

        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success sd-button">

            <MdFormatListBulletedAdd />
          </button>
        </div>
      </form>
    </div >
  );
}

export default AddTodo;