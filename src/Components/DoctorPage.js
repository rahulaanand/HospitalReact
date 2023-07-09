import React, { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';

export default function DoctorPage() {
    const [patients , setPatient]=useState([])
 // const [doctors, setDoctors] = useState([]);
 var name = localStorage.getItem("Username")

  useEffect(() => {
    var name = localStorage.getItem("Username")
    fetch(`https://localhost:5006/api/Doctors/get bt name?name=${name}`)
      .then(response => response.json())
      .then(data => setPatient(data.patients))
      .catch(error => console.log(error));
  }, []);

  return (
<div className="container mt-5">
<div style={{ position: 'absolute', top: '15px', left: '10px' }}>
  <a href="/loginx" style={{ fontSize: '2rem', color: 'black' }}>
    <FaHome />
  </a>
</div>
      <h1 className="text-center">Patient Details of {name}</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        {patients.map(patient => (
          <div key={patient.patientId} className="col">
            <div className="card my-bg-glass border-0 shadow">
              <div className="card-body">
                <h5 className="card-title">{patient.patientId}</h5>
                <div>
                  <h4 className="card-text">
                    Name: {patient.patientName}
                  </h4>
                  <br />
                  <p>
                    Age: {patient.age}<br />
                    Gender: {patient.gender}<br />
                    Email: {patient.emailId}<br />
                    Contact: {patient.contact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
