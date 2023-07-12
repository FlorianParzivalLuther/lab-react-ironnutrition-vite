import React, { useState } from "react";

const AddFoodForm = ({ addFood }) => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");
  const [serving, setServing] = useState(1);

  const handleNameInput = (e) => setName(e.target.value);

  const handleCaloriesInput = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setCalories(value);
    }
  };

  const handleImageInput = (e) => setImage(e.target.value);

  const handleServingInput = (e) => setServing(parseInt(e.target.value));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
    id,
      name,
      calories,
      image,
      serving,
    };

    console.log("Submitted Food, yummy:", newFood);
    addFood(newFood);

    setName("");
    setCalories("");
    setImage("");
    setServing(1);
  };

  return (
    <div className="AddFoodForm">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name of the Food:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={handleNameInput}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Calories per serving:</label>
          <input
            type="number"
            className="form-control"
            name="calories"
            value={calories}
            onChange={handleCaloriesInput}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image uploaded:</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={image}
            onChange={handleImageInput}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Servings per portion:</label>
          <input
            type="number"
            className="form-control"
            name="servings"
            value={serving}
            onChange={handleServingInput}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add new type of Food
        </button>
      </form>
    </div>
  );
};

export default AddFoodForm;