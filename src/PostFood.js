import React, { useState } from "react";
import "./App.css";
const PostFood = () => {
  const [foodName, setFoodName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [maxDeliveryTime, setMaxDeliveryTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const foodItem = {
      foodName,
      foodType,
      maxDeliveryTime,
    };
    localStorage.setItem(foodName, JSON.stringify(foodItem));
    setFoodName("");
    setFoodType("");
    setMaxDeliveryTime("");
  };

  return (
    <>
    <h2>Food App</h2>
    <div className="main">
      
      <form onSubmit={handleSubmit}>
        <label>
          Food Name:
          <input
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Food Type:
          <select
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
          >
            <option value="">Select Food Type</option>
            <option value="Delicious Food">Delicious Food</option>
            <option value="Nutritious Food">Nutritious Food</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Beverages">Beverages</option>
            <option value="Desserts">Desserts</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Max Delivery Time in Minutes:
          <input
            type="number"
            value={maxDeliveryTime}
            onChange={(e) => setMaxDeliveryTime(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button className="button1" type="submit">
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default PostFood;
