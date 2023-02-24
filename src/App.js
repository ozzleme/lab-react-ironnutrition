
import './App.css';
import foods from './foods.json';
// import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from "react";



function App() {

  const [foodArray, setFoods] = useState(foods);

  return (
    <div>

      {foodArray.map((food) => {

        return (
          <div>
            <p>{food.name}</p>
            <img src={food.image} width={200} alt="food" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
