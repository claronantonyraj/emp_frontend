import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeForm from './components/Employeeform';
import EmployeeList from './components/EmployeeList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeForm />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
};

export default App;
