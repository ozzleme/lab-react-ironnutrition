import React from 'react';
import { Card, Col, Button } from 'antd';

function FoodBox({ foods, search, deleteFood }) { // {food: {name, image, calories, servings}} destructuring code for iteration 2


    return (
        <div className="food-container">
            {foods
                .filter((oneFood) => {
                    return oneFood.name.toLowerCase().includes(search.toLowerCase());
                })
                .map((oneFood, index) => {
                    return (
                        <div key={index} className="food-card">
                            <Col>
                                <Card
                                    title={oneFood.name}
                                    style={{ width: 230, height: 300, margin: 10 }}
                                >
                                    <img src={oneFood.image} height={60} alt="food" />
                                    <p>Calories: {oneFood.calories}</p>
                                    <p>Servings: {oneFood.servings}</p>
                                    <p>
                                        <b>Total Calories: {oneFood.servings * oneFood.calories} kcal </b>
                                    </p>
                                    <Button type="primary" htmlType="submit" onClick={() => deleteFood(index)}> Delete </Button>
                                </Card>
                            </Col>
                        </div>
                    );
                })}
        </div>
    );
}

/* {foodRepo.map (food => (
    <div> 
    <p> {food.name}</p>
    </div>
))}

*/

export default FoodBox;