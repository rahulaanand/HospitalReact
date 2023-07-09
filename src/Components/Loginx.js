import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import loginbg from './Assets/login2.jpg';
import { FaHome } from 'react-icons/fa';


export default function Login() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('patient'); // Default role is "patient"
  
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
  
    const validateInputs = () => {
      let errors = {};
    
      if (!username.trim()) {
        errors.username = 'Please enter a username';
      }
    
      if (!password.trim()) {
        errors.password = 'Please enter a password';
      }
    
      return errors;
    };
  
    const proceedLoginUsingAPI = async (e) => {
      e.preventDefault();
  
      if (!validateInputs()) {
        return;
      }

    let inputObj;
    if (role === 'patient') {
      inputObj = {
        patientName: username,
        password: password,
      };
    } else if (role === 'doctor') {
      console.log(username)
      localStorage.setItem("Username", username)
      const doctorUrl = 'https://localhost:5006/api/Doctors/Accepted Status';
      try {
        const doctorResponse = await axios.get(doctorUrl);
        const acceptedDoctors = doctorResponse.data;
      

        const doctorExists = acceptedDoctors.some(
          
          (doctor) =>
            doctor.doctorName === username && doctor.status === 'Accepted'
         
        );
        
        if (!doctorExists) {
          toast.error('Invalid credentials or admin approval not granted');
          return;
        }
      } catch (error) {
        toast.error('Failed to fetch doctor data: ' + error.message);
        return;
      }
      


      inputObj = {
        doctorName: username,
        doctorPwd: password,
      };
    }

    const apiUrl =
      role === 'patient'
        ? 'https://localhost:5006/api/Token/Patients'
        : 'https://localhost:5006/api/Token/Doctors';

    try {
      const response = await axios.post(apiUrl, inputObj, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data !== 'Invalid credentials') {
        toast.success('Success');
        
        localStorage.setItem('token', response.data);
        console.log('Token:', response.data); // Display the generated token in the console

        if (role === 'patient') {
          navigate('/');
        } else if (role === 'doctor') {
          navigate('/doctorpage');
        }
      } else {
        toast.error('Invalid credentials');
      }
    } catch (error) {
      toast.error('Login Failed due to: ' + error.message);
    }
  };

  return (
    <div>
    <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
  <a href="/" style={{ fontSize: '2rem', color: 'black' }}>
    <FaHome />
  </a>
</div>

    <div className="container" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' , marginTop: '10px'}}>
    <div className="col-lg-4">
      <div className="card shadow" id="login-card" style={{}}>
      
        <img src={loginbg} style={{ height: '80%', width: '100%', objectFit: 'cover', justifyContent: 'center'}} alt="Background" />
        <div className="card-body">
          <form onSubmit={proceedLoginUsingAPI}>
            <div className="form-group">
              <label>User Name <span className="errmsg">*</span></label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Password <span className="errmsg">*</span></label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  required
                />
                <div className="input-group-append">
                  <span
                    className="input-group-text"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: 'pointer' }}
                  >
                    {showPassword ? <BsEyeSlash /> : <BsEye />}
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Role <span className="errmsg">*</span></label>
              <div className="form-check">
                <input
                  type="radio"
                  name="role"
                  value="patient"
                  checked={role === 'patient'}
                  onChange={() => setRole('patient')}
                  className="form-check-input"
                />
                <label className="form-check-label">Patient</label>
              </div>
              <div className="form-check">
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
            <div className="text-center">
              <button type="submit" className="btn btn-primary mr-3">Login</button>
              <span className="separator"></span>
              <a href="/regis" className="btn btn-primary">Signup</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}
