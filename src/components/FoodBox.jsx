import React from 'react';
import { Card, Col, Button } from 'antd';

function FoodBox({ food }) {

    return (

        <div className="food-container">
            

            {food.map((oneFood) => {

                return (
                   <div className="food-card">
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
                            <Button type="primary"> Delete </Button>
                        </Card>
                    </Col>
                    </div>
                );

            })}
        </div>
    );
}

export default FoodBox;