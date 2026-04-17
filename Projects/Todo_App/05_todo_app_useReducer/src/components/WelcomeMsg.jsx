import { useContext } from "react";
import styles from "./WelcomeMsg.module.css";
import { TodoItemsContext } from "../store/todo_items_store";
const WelcomeMsg = () => {
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems; 
  // After destructuring the above code, we can write the below code:
  const { todoItems } = useContext(TodoItemsContext);
  return todoItems.length === 0 && <p className={styles.welcome}>Enjoy your Day</p>
}

export default WelcomeMsg;