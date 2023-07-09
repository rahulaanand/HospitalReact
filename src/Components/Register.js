import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { IoMdPerson, IoMdMail, IoMdLock, IoMdCall, IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';

export default function Register() {
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    gender: '',
    emailId: '',
    password: '',
    contact: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Field validations
    if (!formData.patientName || !formData.age || !formData.gender || !formData.emailId || !formData.password || !formData.contact) {
      toast.error('Please fill in all fields.');
      return;
    }

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
    <div>
    <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
  <a href="/" style={{ fontSize: '2rem', color: 'black' }}>
    <FaHome />
  </a>
</div>
    <div className="container d-flex justify-content-center" style={{ marginTop: '20px' }}>
      <div className="card shadow">
        <h1 className="card-header text-center">Patient Register Form</h1>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="container">
            <div className="form-group mb-4">
              <label htmlFor="name">
                <IoMdPerson size={15} style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Patient Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={formData.patientName}
                onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="age">
                <IoMdPerson size={15} style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Age
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="Enter your age"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              />
            </div>
            <div className="form-group mb-4">
              <label>
                <IoMdPerson size={15} style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Gender
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                />{' '}
                Male
              </label>
              <label style={{ marginLeft: '10px' }}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                />{' '}
                Female
              </label>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email">
                <IoMdMail size={15} style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={formData.emailId}
                onChange={(e) => setFormData({ ...formData, emailId: e.target.value })}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password">
                <IoMdLock size={15} style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="contact">
                <IoMdCall size={15} style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Contact
              </label>
              <input
                type="text"
                className="form-control"
                id="contact"
                placeholder="Enter your contact number"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              />
            </div>
            <div className="form-group mb-4 text-center">
              <button type="submit" className="btn btn-primary">
                <IoMdCheckmarkCircleOutline size={15} style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Submit
              </button>
            </div>
          </form>
          <div className="text-center">
      Already a member? <a href="/loginx">Sign in</a>
    </div>
    </div>

      </div>
    </div>
    </div>
  );
}
