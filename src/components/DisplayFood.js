import React, { useState, useEffect } from "react";

const DisplayFoods = () => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [filterDeliveryTime, setFilterDeliveryTime] = useState("");

  useEffect(() => {
    const existingFoods = JSON.parse(localStorage.getItem("foods")) || [];
    setFoods(existingFoods);
    setFilteredFoods(existingFoods);
  }, []);

  useEffect(() => {
    let newFilteredFoods = foods;

    if (filterType !== "") {
      newFilteredFoods = newFilteredFoods.filter((food) => food.type === filterType);
    }

    if (filterDeliveryTime !== "") {
      newFilteredFoods = newFilteredFoods.filter(
        (food) => food.deliveryTime <= filterDeliveryTime
     
        );

        setFilteredFoods(newFilteredFoods);
    }, [foods, filterType, filterDeliveryTime]);

    const handleTypeFilter = (e) => {
    setFilterType(e.target.value);
    };
    
    const handleDeliveryTimeFilter = (e) => {
    setFilterDeliveryTime(e.target.value);
    };
    
    return (
    <div>
    <h2>Food List</h2>
    <div>
    <label>
    Filter by Type:
    <select value={filterType} onChange={handleTypeFilter}>
    <option value="">All</option>
    <option value="Delicious Food">Delicious Food</option>
    <option value="Nutritious Food">Nutritious Food</option>
    <option value="Fast Food">Fast Food</option>
    <option value="Beverages">Beverages</option>
    <option value="Desserts">Desserts</option>
    </select>
    </label>
    <label>
    Filter by Delivery Time (in minutes):
    <input
             type="number"
             value={filterDeliveryTime}
             onChange={handleDeliveryTimeFilter}
           />
    </label>
    </div>
    <ul>
    {filteredFoods.map((food) => (
    <li key={food.id}>
    <p>Name: {food.name}</p>
    <p>Type: {food.type}</p>
    <p>Max Delivery Time: {food.deliveryTime} minutes</p>
    </li>
    ))}
    </ul>
    </div>
    );
    };
    
    export default DisplayFoods;