
import './App.css';
import foods from './foods.json';
import { useState } from "react";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';





function App() {

  const [foodArray, setFoods] = useState(foods);
  const [foodAll, setFoodAll] = useState(foods);
  const [search, setSearch] = useState('');

  const addNewFood = (newFood) => {
    const updatedFood = [...foodArray, newFood]
    const updatedFoodAll = [...foodAll, newFood]
    setFoods(updatedFood)
    setFoodAll(updatedFoodAll)
  }

  const handleSearch = (userInput) => {
    setSearch(userInput.target.value);
  };

  return (
    <div>
      <h1>Food List</h1>
      <AddFoodForm addNewFood={addNewFood} />
      <Search handleSearch={handleSearch} search={search} />
      <FoodBox foods={foodArray} search={search} />

    </div>
  );
}

export default App;
