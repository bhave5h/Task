import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import Employee from './Pages/Employee';

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/admin" element={<Admin />} />

      <Route path="/employee" element={<Employee />} />

    </Routes>
  );
};

export default App;
