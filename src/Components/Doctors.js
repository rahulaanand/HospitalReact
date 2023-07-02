import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState('');

  useEffect(() => {
    fetch('https://localhost:5006/api/Doctors/Accepted status')
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
    <div className="container" style={{ marginTop: '20px' }}>
      <div className="row">
        <div className="col">
          <div className="mb-4">
            <label htmlFor="specialityFilter" className="form-label">Filter by Speciality:</label>
            <select
              id="specialityFilter"
              className="form-select form-select-sm"
              value={selectedSpeciality}
              onChange={handleFilterSelection}
            >
              <option value="">All Specialities</option>
              {filterOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredDoctors.map(doctor => (
          <div key={doctor.doctorId} className="col">
            <div className="card my-bg-glass">
              <img
                src={`https://localhost:5006/Uploads/${doctor.doctorImage}`}
                className="card-img-top img-fluid"
                alt="Doctor"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{doctor.doctorName}</h5>
                <div>
                  <p className="card-text">
                    Specialization: {doctor.doctorSpeciality}<br/>
                    Gender: {doctor.doctorGender}<br/>
                    Email: {doctor.doctorEmail}<br/>
                    Experience: {doctor.doctorExperience} years<br/>
                    Description: {doctor.description}<br/>
                    Phone Number: {doctor.phoneNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p>Want to become a doctor? <Link to="/dregis">Click here</Link></p>
    </div>
  );
}

export default Doctors;
