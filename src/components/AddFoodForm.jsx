import { useState } from "react";
import { Input, Divider, Button } from 'antd';


function AddFoodForm({ addNewFood }) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = { name, image, calories, servings };
        addNewFood(newFood)

        setName("");
        setImage("");
        setCalories(0);
        setServings(0);
    }
    return (
        <div>
            <Divider>Add Food Entry</Divider>
            <form onSubmit={handleSubmit}>
                <label > Name: </label>
                <Input value={name} type="text" onChange={(e) => setName(e.target.value)} />
                <label > Image: </label>
                <Input value={image} type="text" onChange={(e) => setImage(e.target.value)} />
                <label > Calories: </label>
                <Input value={calories} type="text" onChange={(e) => setCalories(e.target.value)} />
                <label > Servings: </label>
                <Input value={servings} type="text" onChange={(e) => setServings(e.target.value)} />
                <Button type="submit" htmlType='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default AddFoodForm;