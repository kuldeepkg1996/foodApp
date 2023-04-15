import "./styles.css";

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import AddFood from './components/AddFood';
import DisplayFood from './components/DisplayFood';

const App = () => {
  return (
    <h1>Food App</h1>
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/addfood' element={<AddFood />} />
        <Route exact path='/displayfood' element={<DisplayFood />} />
      </Routes>
    </Router>
  );
};

export default App;

