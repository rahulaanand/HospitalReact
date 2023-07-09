import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState('');

  useEffect(() => {
    fetch('https://localhost:5006/api/Doctors/Accepted status',{
      method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.log(error));
  }, []);

  const filterOptions = ['Cardiology', 'Dental', 'Neurology', 'Orthopedics'];

  const handleFilterSelection = (event) => {
    setSelectedSpeciality(event.target.value);
  };

  const filteredDoctors = selectedSpeciality
    ? doctors.filter(doctor => doctor.doctorSpeciality === selectedSpeciality)
    : doctors;

  return (
    <div style={{backgroundColor: 'ButtonShadow'}}>
      <div style={{ position: 'absolute', top: '15px', left: '10px' }}>
  <a href="/" style={{ fontSize: '2rem', color: 'black' }}>
    <FaHome />
  </a>
</div>
    <div className="container" >
    <br/>
    <div className="row">
      <div className="col">
        <div className="mb-4">
          <label htmlFor="specialityFilter" className="form-label">
            Filter by Speciality:
          </label>
          <select
            id="specialityFilter"
            className="form-select form-select-sm"
            value={selectedSpeciality}
            onChange={handleFilterSelection}
          >
            <option value="">All Specialities</option>
            {filterOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
      {filteredDoctors.map(doctor => (
        <div key={doctor.doctorId} className="col">
          <div
            className="card my-bg-glass doctor-card"
            style={{
              borderRadius: '10px',
              transition: 'box-shadow 0.5s ease',
            }}
            onMouseEnter={e => {
              e.target.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={e => {
              e.target.style.boxShadow = '0px 2px 5px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div
              className="doctor-img-wrapper"
              style={{
                overflow: 'hidden',
                borderRadius: '50%',
                width: '200px',
                height: '200px',
                margin: '20px auto 0',
              }}
            >
              <img
                src={`https://localhost:5006/uploads/${doctor.doctorImage}`}
                className="card-img-top img-fluid"
                alt="Doctor"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  transform: 'scale(1.3)',
                }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{doctor.doctorName}</h5>
              <div>
                <p className="card-text">
                  Specialization: {doctor.doctorSpeciality}<br />
                  Gender: {doctor.doctorGender}<br />
                  Email: {doctor.doctorEmail}<br />
                  Experience: {doctor.doctorExperience} years<br />
                  Description: {doctor.description}<br />
                  Phone Number: {doctor.phoneNumber}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <p>
      Want to become a doctor? <Link to="/dregis">Click here</Link>
    </p>
  </div>
  <br/>
  
  </div>
  );
}

export default Doctors;
