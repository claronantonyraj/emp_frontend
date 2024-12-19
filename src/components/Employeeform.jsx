import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    employeeId: '',
    email: '',
    phoneNumber: '',
    department: '',
    dateOfJoining: '',
    role: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://emp-backend-1ldy.onrender.com/employees', formData);
      setMessage('Employee added successfully.');
    } catch (err) {
      setMessage(err.response?.data || 'Error submitting the form.');
    }
  };

  const handleViewEmployees = () => {
    navigate('/employees'); // Navigate to the EmployeeList page
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Emp-Mgmt</h1>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="employeeId" placeholder="Employee ID" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
        <select name="department" onChange={handleChange} required>
          <option value="">Select Department</option>
          <option value="HR">HR</option>
          <option value="Engineering">Engineering</option>
          <option value="Marketing">Marketing</option>
        </select>
        <input type="date" name="dateOfJoining" onChange={handleChange} required />
        <input name="role" placeholder="Role" onChange={handleChange} required />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
      <button onClick={handleViewEmployees}>View All Employees</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EmployeeForm;
