
import './App.css';
import foods from './foods.json';
import { useState } from "react";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Row, Divider, Button } from 'antd';





function App() {

  const [foodArray, setFoods] = useState(foods);
  const [foodAll, setFoodAll] = useState(foods);
  const [search, setSearch] = useState('');
  const [visible, setVisible] = useState(true);

  const addNewFood = (newFood) => {
    const updatedFood = [...foodArray, newFood]
    const updatedFoodAll = [...foodAll, newFood]
    setFoods(updatedFood)
    setFoodAll(updatedFoodAll)
  }

  const handleSearch = (userInput) => {
    setSearch(userInput.target.value);
  }

  const deleteFood = (e) => {
    const filteredFoodArray = foodArray.filter((_, i) => i !== e);
    setFoods(filteredFoodArray);
  }

  const hideElement = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div>
      <h1>Food List</h1>
      {visible && (
        <AddFoodForm addNewFood={addNewFood} hideElement={hideElement} />
      )}
      <Button onClick={hideElement}> {visible ? 'Hide Add New Food Form' : 'Show Add New Food Form'} </Button>
      <Search handleSearch={handleSearch} search={search} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}></Row>
      <FoodBox foods={foodArray} search={search} deleteFood={deleteFood} />
    </div>
  );
}

export default App;
