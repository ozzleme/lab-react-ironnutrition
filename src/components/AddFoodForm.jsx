import { useState } from "react";


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
            <form onSubmit={handleSubmit}>
                <label > Name: </label>
                <input value={name} type="text" onChange={(e) => setName(e.target.value)} />
                <label > Image: </label>
                <input value={image} type="text" onChange={(e) => setImage(e.target.value)} />
                <label > Calories: </label>
                <input value={calories} type="text" onChange={(e) => setCalories(e.target.value)} />
                <label > Servings: </label>
                <input value={servings} type="text" onChange={(e) => setServings(e.target.value)} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddFoodForm;