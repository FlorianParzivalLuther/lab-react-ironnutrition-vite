import React from "react";

function FoodBox({ food, handleDelete }) {
  const { id, name, calories, image, servings } = food;
  const totalCalories = servings * calories;

  const onDelete = () => {
    handleDelete(id);
  };

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={image} alt={name} />
        <div className="card-body">
          <h5 className="card-title">Food Name: {name}</h5>
          <p className="card-text">Calories: {calories}</p>
          <p className="card-text">Servings: {servings}</p>
          <p className="card-text">
            <b>Total Calories: {totalCalories} kcal</b>
          </p>
          <button className="btn btn-danger" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodBox;