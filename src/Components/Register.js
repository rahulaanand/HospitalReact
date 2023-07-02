import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const [formData, setFormData] = useState({
    patientName: '',
    age: 0,
    gender: '',
    emailId: '',
    password: '',
    contact: 0,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://localhost:5006/api/Patients', formData);
      console.log('API Response:', response.data);
      toast.success('Data submitted successfully');
      navigate('/'); 
    } catch (error) {
      console.error('API Error:', error);
      toast.error('Error submitting data: ' + error.message);
    }
  };

  return (
    <div className="offset-lg-4 col-4" style={{ marginTop: '20px' }}>
    <div className="card shadow">
      <h1 className="card-header">Patient Register Form</h1>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="container">
          <div className="form-group mb-4">
            <label htmlFor="name">Patient Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.patientName}
              onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              className="form-control"
              id="gender"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.emailId}
              onChange={(e) => setFormData({ ...formData, emailId: e.target.value })}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="contact">Contact</label>
            <input
              type="number"
              className="form-control"
              id="contact"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            />
          </div>
          <div className="form-group mb-4">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  );
}
