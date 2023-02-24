import React from 'react';
import { Card, Col, Button } from 'antd';

function FoodBox({ food }) {

    return (

        <div>

            {food.map((oneFood) => {

                return (
                    <Col>
                        <Card
                            title={oneFood.name}
                            style={{ width: 230, height: 300, margin: 10 }}
                        >
                            <img src={oneFood.image} height={60} alt="food" />
                            <p>Calories: {oneFood.calories}</p>
                            <p>Servings: {oneFood.servings}</p>
                            <p>
                                <b>Total Calories: {oneFood.servings * oneFood.calories} </b>
                            </p>
                            <Button type="primary"> Delete </Button>
                        </Card>
                    </Col>
                );

            })}
        </div>
    );
}

export default FoodBox;