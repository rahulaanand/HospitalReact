import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function DoctorPage() {
    const [patients , setPatient]=useState([])
 // const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(`https://localhost:5006/api/Doctors/${201}`)
      .then(response => response.json())
      .then(data => setPatient(data.patients))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container" style={{ marginTop: '20px' }}>
        <h1>Patient Details of</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {patients.map(patient => (
          <div key={patient.patientId} className="col">
            <div className="card my-bg-glass">
              <div className="card-body">
                <h5 className="card-title">{}</h5>
                <div>
                <h4 className="card-text">
    Name: {patient.patientName}</h4><br />
    Age: {patient.age}<br />
    Gender: {patient.gender}<br />
    Email: {patient.emailId}<br />
    Contact: {patient.contact}
 
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> 
     
    </div>
  );
}
