import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const columns = [
  { name: 'First Name', selector: row => row.firstName, sortable: true },
  { name: 'Last Name', selector: row => row.lastName, sortable: true },
  { name: 'Start Date', selector: row => row.startDate, sortable: true },
  { name: 'Department', selector: row => row.department, sortable: true },
  { name: 'Date of Birth', selector: row => row.dateOfBirth, sortable: true },
  { name: 'Street', selector: row => row.street, sortable: true },
  { name: 'City', selector: row => row.city, sortable: true },
  { name: 'State', selector: row => row.state, sortable: true },
  { name: 'Zip Code', selector: row => row.zipCode, sortable: true },
];

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees.employees);

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr style={{ backgroundColor: '#f1f3f5' }}>
                <th style={{ padding: '0.75rem' }}>First Name</th>
                <th style={{ padding: '0.75rem' }}>Last Name</th>
                <th style={{ padding: '0.75rem' }}>Start Date</th>
                <th style={{ padding: '0.75rem' }}>Department</th>
                <th style={{ padding: '0.75rem' }}>Date of Birth</th>
                <th style={{ padding: '0.75rem' }}>Street</th>
                <th style={{ padding: '0.75rem' }}>City</th>
                <th style={{ padding: '0.75rem' }}>State</th>
                <th style={{ padding: '0.75rem' }}>Zip Code</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, index) => (
                <tr key={index}>
                  <td style={{ padding: '0.75rem' }}>{emp.firstName}</td>
                  <td style={{ padding: '0.75rem' }}>{emp.lastName}</td>
                  <td style={{ padding: '0.75rem' }}>{emp.startDate}</td>
                  <td style={{ padding: '0.75rem' }}>{emp.department}</td>
                  <td style={{ padding: '0.75rem' }}>{emp.dateOfBirth}</td>
                  <td style={{ padding: '0.75rem' }}>{emp.street}</td>
                  <td style={{ padding: '0.75rem' }}>{emp.city}</td>
                  <td style={{ padding: '0.75rem' }}>{emp.state}</td>
                  <td style={{ padding: '0.75rem' }}>{emp.zipCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Link to="/" style={{ display: 'block', marginTop: '2rem', textAlign: 'center' }}>Home</Link>
    </div>
  );
};

export default EmployeeList;
