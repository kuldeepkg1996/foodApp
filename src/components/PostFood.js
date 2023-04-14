import React, { useState } from "react";

const PostFood = () => {
  const [foodName, setFoodName] = useState("");
  const [foodType, setFoodType] = useState("Delicious Food");
  const [maxDeliveryTime, setMaxDeliveryTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      id: Date.now(),
      name: foodName,
      type: foodType,
      deliveryTime: maxDeliveryTime,
    };

    const existingFoods = JSON.parse(localStorage.getItem("foods")) || [];
    localStorage.setItem("foods", JSON.stringify([...existingFoods, newFood]));

    setFoodName("");
    setFoodType("Delicious Food");
    setMaxDeliveryTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Food Name:
        <input
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
      </label>
      <label>
        Food Type:
        <select value={foodType} onChange={(e) => setFoodType(e.target.value)}>
          <option value="Delicious Food">Delicious Food</option>
          <option value="Nutritious Food">Nutritious Food</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Beverages">Beverages</option>
          <option value="Desserts">Desserts</option>
        </select>
      </label>
      <label>
        Max Delivery Time (in minutes):
        <input
          type="number"
          value={maxDeliveryTime}
          onChange={(e) => setMaxDeliveryTime(e.target.value)}
        />
      </label>
      <button type="submit">Post Food</button>
    </form>
  );
};

export default PostFood;
