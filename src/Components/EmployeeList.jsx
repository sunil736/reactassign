// EmployeeList.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EmployeeList = ({ employees, setEmployees }) => {
  const navigate = useNavigate();

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  return (
    <div>
      <h2>Employee List</h2>
      <table border="1" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.position}</td>
              <td>
                <button onClick={() => navigate(`/edit/${employee.id}`)}>Edit</button>
                <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
