import { MdDeleteSweep } from "react-icons/md";
import { TodoItemsContext } from "../store/todo_items_store";
import { useContext } from "react";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row sd-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger sd-button" onClick={() => deleteItem(todoName)}>
            <MdDeleteSweep />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;