// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './Components/EmployeeList';
import EditEmployee from './Components/EditEmployee';
import './stylee/styles.css'

const App = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', position: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', position: 'Designer' },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList employees={employees} setEmployees={setEmployees} />} />
        <Route path="/edit/:id" element={<EditEmployee employees={employees} setEmployees={setEmployees} />} />
      </Routes>
    </Router>
  );
};

export default App;
