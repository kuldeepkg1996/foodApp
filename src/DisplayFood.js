import React, { useState, useEffect } from "react";

const DisplayFood = () => {
  const [foodList, setFoodList] = useState([]);
  const [filteredFoodList, setFilteredFoodList] = useState([]);
  const [foodTypeFilter, setFoodTypeFilter] = useState("");
  const [maxDeliveryTimeFilter, setMaxDeliveryTimeFilter] = useState("");

  useEffect(() => {
    const foodItems = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const foodItem = JSON.parse(localStorage.getItem(key));
      foodItems.push(foodItem);
    }
    setFoodList(foodItems);
  }, []);

  useEffect(() => {
    let filteredList = [...foodList];
    if (foodTypeFilter !== "") {
      filteredList = filteredList.filter(
        (item) => item.foodType === foodTypeFilter
      );
    }
    if (maxDeliveryTimeFilter !== "") {
      filteredList = filteredList.filter(
        (item) => item.maxDeliveryTime <= maxDeliveryTimeFilter
      );
    }
    setFilteredFoodList(filteredList);
  }, [foodList, foodTypeFilter, maxDeliveryTimeFilter]);

  const handleFoodTypeFilter = (event) => {
    setFoodTypeFilter(event.target.value);
  };

  const handleMaxDeliveryTimeFilter = (event) => {
    setMaxDeliveryTimeFilter(event.target.value);
  };

  return (
    <>
      <div>
        <label>
          Filter by Food Type:
          <select value={foodTypeFilter} onChange={handleFoodTypeFilter}>
            <option value="">All</option>
            <option value="Delicious Food">Delicious Food</option>
            <option value="Nutritious Food">Nutritious Food</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Beverages">Beverages</option>
            <option value="Desserts">Desserts</option>
          </select>
        </label>
        <label>
          Filter by Max Delivery Time:
          <input
            type="number"
            value={maxDeliveryTimeFilter}
            onChange={handleMaxDeliveryTimeFilter}
          />
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Food Type</th>
            <th>Max Delivery Time (minutes)</th>
          </tr>
        </thead>
        <tbody>
          {filteredFoodList.map((foodItem, index) => (
            <tr key={index}>
              <td>{foodItem.foodName}</td>
              <td>{foodItem.foodType}</td>
              <td>{foodItem.maxDeliveryTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DisplayFood;
