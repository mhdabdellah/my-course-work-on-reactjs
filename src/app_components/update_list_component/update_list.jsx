import React, {useState} from "react";

function List(){

    const [foods, setFoods] = useState(["apple","bananas","orange","coconut","pineaple"]);

    function handleAddFood(event){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        // setFoods([...foods, newFood])
        // setFoods(foods => [...foods, newFood])
        setFoods(f => [...f, newFood])
    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2> List of Food </h2>
            <ol>
                { foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}> {food} </li>) }
            </ol>
            <hr />
            <input type="text" id="foodInput" placeholder="Enter food name"></input>
            <button onClick={handleAddFood}> Add Food</button>
        </div>
    );
}

export default List