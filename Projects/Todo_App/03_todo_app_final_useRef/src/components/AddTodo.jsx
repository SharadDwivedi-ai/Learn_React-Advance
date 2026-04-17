import { useRef, useState } from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";
function AddTodo({ onNewItem }) {
  // After useRef implementation, we don't need these states anymore which is why they are commented out. We can directly access the input values using refs instead of maintaining them in state.
  // const [todoName, setTodoName] = useState("");
  // const [todoDueDate, setTodoDueDate] = useState("");
  const todoNameInput = useRef();
  const todoDueDateInput = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdate.current += 1;
  // }
  // const handleDueDateChange = (event) => {
  //   setTodoDueDate(event.target.value);
  // }

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameInput.current.value;
    const todoDueDate = todoDueDateInput.current.value;
    todoNameInput.current.value = "";
    todoDueDateInput.current.value = "";
    onNewItem(todoName, todoDueDate);
    // setTodoName("");
    // setTodoDueDate("");
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
          {/* value={todoName} onChange={handleNameChange} */}
        </div>
        <div className="col-4">
          <input type="date" ref={todoDueDateInput} />
          {/*value={todoDueDate} onChange={handleDueDateChange} */}
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success sd-button">
            {/* After update in Form: onClick={handleAddButtonClick} */}
            <MdFormatListBulletedAdd />
          </button>
        </div>
      </form>
    </div >
  );
}

export default AddTodo;