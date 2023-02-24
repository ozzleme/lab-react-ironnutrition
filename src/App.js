
import './App.css';
import foods from './foods.json';
// import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from "react";
import FoodBox from './components/FoodBox';



function App() {

  const [foodArray, setFoods] = useState(foods);

  return (
    <div>
      <h1>Food List</h1>
      <FoodBox food={foodArray} />
    </div>
  );
}

export default App;
