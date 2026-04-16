import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FootInput";
import "./App.css";
import { useState } from "react";
function App() {
  // let foodItems = [];
  // let foodItems = [
  //   "Bread",
  //   "Apple",
  //   "Banana",
  //   "Orange",
  //   "PineApple",
  //   "Grapes",
  //   "Ghee",
  //   "Butter",
  //   "Milk",
  //   "Curd",
  // ];

  // let [textToShow, setTextToShow] = useState("");

  // let [foodItems, setFoodItems] = useState([
  //   "Bread",
  //   "Apple",
  //   "Banana",
  //   "Orange",
  //   "PineApple"]);

  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems)
    }
    // console.log(event.target.value)
    // setTextToShow(event.target.value)
  }

  return (<>
    <Container>
      <h1 className="food-head">Learning Fragment</h1>
      <div style={{ textAlign: "center" }}>Healthy Food-Items</div>

      <FoodInput handleKeyDown={onKeyDown} />
      <ErrorMessage items={foodItems} />
      {/* <p>{textToShow}</p> */}
      <FoodItems items={foodItems} />
    </Container>
    {/* <Container>
      <p>Above listed products for make your life Healthy!</p>
    </Container> */}
  </>
  );
}

export default App;
