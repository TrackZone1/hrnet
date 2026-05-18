import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addEmployee } from '../features/employeesSlice';
import Modal from 'hrnet-modal-react-component-tz1';

const states = [
    { "name": "Alabama", "abbreviation": "AL" },
    { "name": "Alaska", "abbreviation": "AK" },
    { "name": "American Samoa", "abbreviation": "AS" },
    { "name": "Arizona", "abbreviation": "AZ" },
    { "name": "Arkansas", "abbreviation": "AR" },
    { "name": "California", "abbreviation": "CA" },
    { "name": "Colorado", "abbreviation": "CO" },
    { "name": "Connecticut", "abbreviation": "CT" },
    { "name": "Delaware", "abbreviation": "DE" },
    { "name": "District Of Columbia", "abbreviation": "DC" },
    { "name": "Federated States Of Micronesia", "abbreviation": "FM" },
    { "name": "Florida", "abbreviation": "FL" },
    { "name": "Georgia", "abbreviation": "GA" },
    { "name": "Guam", "abbreviation": "GU" },
    { "name": "Hawaii", "abbreviation": "HI" },
    { "name": "Idaho", "abbreviation": "ID" },
    { "name": "Illinois", "abbreviation": "IL" },
    { "name": "Indiana", "abbreviation": "IN" },
    { "name": "Iowa", "abbreviation": "IA" },
    { "name": "Kansas", "abbreviation": "KS" },
    { "name": "Kentucky", "abbreviation": "KY" },
    { "name": "Louisiana", "abbreviation": "LA" },
    { "name": "Maine", "abbreviation": "ME" },
    { "name": "Marshall Islands", "abbreviation": "MH" },
    { "name": "Maryland", "abbreviation": "MD" },
    { "name": "Massachusetts", "abbreviation": "MA" },
    { "name": "Michigan", "abbreviation": "MI" },
    { "name": "Minnesota", "abbreviation": "MN" },
    { "name": "Mississippi", "abbreviation": "MS" },
    { "name": "Missouri", "abbreviation": "MO" },
    { "name": "Montana", "abbreviation": "MT" },
    { "name": "Nebraska", "abbreviation": "NE" },
    { "name": "Nevada", "abbreviation": "NV" },
    { "name": "New Hampshire", "abbreviation": "NH" },
    { "name": "New Jersey", "abbreviation": "NJ" },
    { "name": "New Mexico", "abbreviation": "NM" },
    { "name": "New York", "abbreviation": "NY" },
    { "name": "North Carolina", "abbreviation": "NC" },
    { "name": "North Dakota", "abbreviation": "ND" },
    { "name": "Northern Mariana Islands", "abbreviation": "MP" },
    { "name": "Ohio", "abbreviation": "OH" },
    { "name": "Oklahoma", "abbreviation": "OK" },
    { "name": "Oregon", "abbreviation": "OR" },
    { "name": "Palau", "abbreviation": "PW" },
    { "name": "Pennsylvania", "abbreviation": "PA" },
    { "name": "Puerto Rico", "abbreviation": "PR" },
    { "name": "Rhode Island", "abbreviation": "RI" },
    { "name": "South Carolina", "abbreviation": "SC" },
    { "name": "South Dakota", "abbreviation": "SD" },
    { "name": "Tennessee", "abbreviation": "TN" },
    { "name": "Texas", "abbreviation": "TX" },
    { "name": "Utah", "abbreviation": "UT" },
    { "name": "Vermont", "abbreviation": "VT" },
    { "name": "Virgin Islands", "abbreviation": "VI" },
    { "name": "Virginia", "abbreviation": "VA" },
    { "name": "Washington", "abbreviation": "WA" },
    { "name": "West Virginia", "abbreviation": "WV" },
    { "name": "Wisconsin", "abbreviation": "WI" },
    { "name": "Wyoming", "abbreviation": "WY" }
];

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    startDate: null,
    street: '',
    city: '',
    state: 'AL',
    zipCode: '',
    department: 'Sales'
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEmployee({ ...employee, [id]: value });
  };

  const handleDateChange = (date, field) => {
    setEmployee({ ...employee, [field]: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const employeeToSave = {
      ...employee,
      dateOfBirth: employee.dateOfBirth ? new Date(employee.dateOfBirth).toLocaleDateString() : '',
      startDate: employee.startDate ? new Date(employee.startDate).toLocaleDateString() : ''
    };
    dispatch(addEmployee(employeeToSave));
    setIsModalOpen(true);
  };

  return (
    <div className="container">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <Link to="/employee-list">View Current Employees</Link>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit} id="create-employee">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" value={employee.firstName} onChange={handleChange} required />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" value={employee.lastName} onChange={handleChange} required />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          value={employee.dateOfBirth || ''}
          onChange={(e) => handleDateChange(e.target.value, 'dateOfBirth')}
          required
        />

        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          value={employee.startDate || ''}
          onChange={(e) => handleDateChange(e.target.value, 'startDate')}
          required
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" value={employee.street} onChange={handleChange} required />

          <label htmlFor="city">City</label>
          <input id="city" type="text" value={employee.city} onChange={handleChange} required />

          <label htmlFor="state">State</label>
          <select id="state" value={employee.state} onChange={handleChange}>
            {states.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>

          <label htmlFor="zipCode">Zip Code</label>
          <input id="zipCode" type="number" value={employee.zipCode} onChange={handleChange} required />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select id="department" value={employee.department} onChange={handleChange}>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
        
        <button type="submit" className="save-button">Save</button>
      </form>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>Employee Created!</p>
      </Modal>
    </div>
  );
};

export default CreateEmployee;
