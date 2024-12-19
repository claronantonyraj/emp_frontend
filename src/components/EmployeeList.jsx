import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate between pages
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('http://localhost:5000/');
        setEmployees(res.data.data); // Adjust if your API's response format differs
        setLoading(false);
      } catch (err) {
        setError('Error fetching employees.');
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);
  const handleAddEmployees = () => {
    navigate('/'); // Navigate to the EmployeeForm page
  };

  if (loading) return <p>Loading employees...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Department</th>
            <th>Date of Joining</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.employee_id}>
              <td>{employee.name}</td>
              <td>{employee.employee_id}</td>
              <td>{employee.email}</td>
              <td>{employee.phone_number}</td>
              <td>{employee.department}</td>
              <td>{employee.date_of_joining}</td>
              <td>{employee.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddEmployees}>Add Employees</button>
    </div>
  );
};

export default EmployeeList;
