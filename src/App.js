
import './App.css';
import foods from './foods.json';
import { useState } from "react";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';





function App() {

  const [foodArray, setFoods] = useState(foods);
  const [foodAll, setFoodAll] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFood = [...foodArray, newFood]
    const updatedFoodAll = [...foodAll, newFood]
    setFoods(updatedFood)
    setFoodAll(updatedFoodAll)
  }

  return (
    <div>
      <h1>Food List</h1>
      <AddFoodForm addNewFood={addNewFood} />
      <FoodBox food={foodArray} />

    </div>
  );
}

export default App;
