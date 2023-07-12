import React, { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foodItems, setFoodItems] = useState(foodsJson);

  const handleDelete = (id) => {
    const updatedFoodItems = foodItems.filter((food) => food.id !== id);
    setFoodItems(updatedFoodItems);
  };

  const addNewFood = (newFood) => {
    setFoodItems((prevFoodItems) => [...prevFoodItems, newFood]);
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <h1 className="navbar-brand">Food List</h1>
          <AddFoodForm addFood={addNewFood} />
        </div>
      </nav>

      {foodItems.map((food,index) => (
        <div><FoodBox key={food.id || index } food={food} handleDelete={handleDelete} /></div>
      ))}
    </div>
  );
}

export default App;