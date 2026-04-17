import { createContext } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  newItem: () => { },
  deleteItem: () => { },
});

export const TodoItemsContextProvider = () => {
  // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const newItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "ADD_ITEM",
      payload: { name: itemName, dueDate: itemDueDate },
    }
    dispatchTodoItems(newItemAction);

    // setTodoItems((currValue) => [...currValue, { name: itemName, dueDate: itemDueDate }]);
  };

  const deleteItem = (newTodoItems) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { name: newTodoItems, },
    }
    dispatchTodoItems(deleteItemAction);

    // const defaultTodoItems = [{ name: "Buy Milk", dueDate: "4/10/2023" }];
    // const defaultTodoItems = [];
  };
}