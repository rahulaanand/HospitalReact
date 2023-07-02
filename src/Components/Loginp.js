import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Loginp() {
  const [user_password, setPassword] = useState('');
  const [user_name, setUserName] = useState('');
  const [role, setRole] = useState('user'); // Default role is "user"
  const navigate = useNavigate();

  const proceedLoginUsingAPI = (e) => {
    e.preventDefault();
    const apiUrl = role === 'user' ? 'https://localhost:5006/api/Token/Patients' : 'https://localhost:5006/api/Token/Doctor';
    const inputObj = {
      user_name: user_name,
      user_password: user_password,
    };
    const input = role === 'user' ? inputObj : null;
    
    fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    })
      .then((res) => res.text())
      .then((resp) => {
        console.log(resp);
        if (resp !== 'Invalid credentials') {
          toast.success('Success');
          localStorage.setItem('token', resp);
          if (role === 'user') {
            navigate('/'); 
          } else if (role === 'doctor') {
            navigate('/doctorpage'); 
          }
        } else {
          toast.error('Invalid credentials');
        }
      })
      .catch((err) => {
        toast.error('Login Failed due to: ' + err.message);
      });
  };

  return (
<div className="row justify-content-center">
  <div className="col-lg-4" style={{ marginTop: '100px' }}>
    <form onSubmit={proceedLoginUsingAPI} className="container">
      <div className="card custom-card-style bg-light">
        <div className="card-header custom-header-style bg-primary text-white">
          <h2>User Login</h2>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label>User Name <span className="errmsg">*</span></label>
            <input
              value={user_name}
              onChange={(e) => setUserName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>User Password <span className="errmsg">*</span></label>
            <input
              type="password"
              value={user_password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div><br/>
          <div className="form-group d-flex justify-content-between">
            <label>Role <span className="errmsg">*</span></label>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="role"
                value="user"
                checked={role === 'user'}
                onChange={() => setRole('user')}
                className="form-check-input"
              />
              <label className="form-check-label">Patient</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="role"
                value="doctor"
                checked={role === 'doctor'}
                onChange={() => setRole('doctor')}
                className="form-check-input"
              />
              <label className="form-check-label">Doctor</label>
            </div>
          </div>
        </div>
        <div className="card-footer text-center custom-footer-style">
          <button type="submit" className="btn btn-primary custom-button-style">
            Login
          </button>
          <Link
            className="btn btn-success"
            to={'/regis'}
            style={{ marginLeft: '10px' }}
          >
            New User
          </Link>
        </div>
      </div>
    </form>
  </div>
</div>


  );
}