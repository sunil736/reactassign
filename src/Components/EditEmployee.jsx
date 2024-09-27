// EditEmployee.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditEmployee = ({ employees, setEmployees }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const emp = employees.find(emp => emp.id === parseInt(id));
    if (emp) setEmployee(emp);
  }, [id, employees]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployees(employees.map(emp => (emp.id === employee.id ? employee : emp)));
    navigate('/');
  };

  if (!employee) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Employee</h2>
      <header style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="https://via.placeholder.com/50" alt="Employee" />
        <h3>{employee.name}</h3>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={employee.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={employee.email} onChange={handleChange} />
        </div>
        <div>
          <label>Position:</label>
          <input type="text" name="position" value={employee.position} onChange={handleChange} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditEmployee;
