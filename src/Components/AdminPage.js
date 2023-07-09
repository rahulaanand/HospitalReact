import React, { useEffect, useState } from "react";
import axios from 'axios';
import { FaHome } from 'react-icons/fa';

function AdminPage() {
  const [activeSection, setActiveSection] = useState("content");
  const [doctors, setDoctors] = useState([]);
  const [notApprovedDoctors, setNotApprovedDoctors] = useState([]);
  const [approvedCount, setApprovedCount] = useState(0);
  const [requestedCount, setRequestedCount] = useState(0);

  useEffect(() => {
    fetchApprovedDoctors();
    fetchNotApprovedDoctors();
  }, []);

  const handleHomeClick = () => {
    localStorage.clear();
  };

  const fetchApprovedDoctors = async () => {
    try {
      const response = await axios.get('https://localhost:5006/api/Doctors/Accepted status', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });
  
      const approvedDoctors = response.data;
      setDoctors(approvedDoctors);
      setApprovedCount(approvedDoctors.length);
    } catch (error) {
      console.log('Failed to fetch approved doctors: ' + error.message);
    }
  };
  
  const fetchNotApprovedDoctors = () => {
    fetch("https://localhost:5006/api/Doctors/Requested status", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setNotApprovedDoctors(data);
        setRequestedCount(data.length);
      })
      .catch((error) => console.log(error));
  };

  const handleSectionClick = (section) => {
    if (section === 'content') {
      setActiveSection('content');
    } else {
      setActiveSection(section);
    }
  };

  // const handleDeleteDoctor = (doctorId) => {
  //   const endpoint = `https://localhost:5006/api/Doctors/${doctorId}`;

  //   axios.delete(endpoint, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem('token')}`, // Ensure you are using the correct token
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response.data);
  //       // Update the list of not approved doctors after successful deletion
  //       fetchNotApprovedDoctors();
  //     })
  //     .catch((error) => console.log(error));
  // };
  
  return (
    <>
      <header className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#337ab7", color: "#fff" }}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" style={{ color: "#fff", fontSize: "20px" }} onClick={() => handleSectionClick('content')}>One - Health Admin Page</a>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-1 mb-lg-0 justify-content-between">
          <li className="nav-item ms-auto">
  <a href="/admin" className="nav-link" style={{ color: "#fff", fontSize: "16px", cursor: "pointer", textDecoration: "none" }} onClick={handleHomeClick}>
    <FaHome style={{ marginRight: "5px" }} /> Home
  </a>
</li>
<li className="nav-item">
    <a className="nav-link" onClick={() => handleSectionClick('doctors')} style={{ color: "#fff", fontSize: "16px" }}>Requested Doctors</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" onClick={() => handleSectionClick('getDoctors')} style={{ color: "#fff", fontSize: "16px" }}>Get Doctors</a>
  </li>
  
</ul>


            <span className="navbar-text me-2" style={{ color: "#fff", fontSize: "16px", border: "1px solid #fff", padding: "5px 10px", borderRadius: "4px" }}>Hi, Admin</span>
          </div>
        </div>
      </header>

      {activeSection === 'content' && (
        <div className="content" style={{ marginTop: '100px' }}>
          <div className="container">
            <h1 className="text-center mb-4">Welcome to Our Hospital Website!</h1>
            <p className="text-center lead mb-5">
              As an admin, you have access to various features and tools to manage and update the hospital website. Here are some key areas you can focus on:
            </p>
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Approved Doctors</h5>
                    <p className="card-text">Total: {approvedCount}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Requested Doctors</h5>
                    <p className="card-text">Total: {requestedCount}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'doctors' && (
        <div className="doctors">
          <section className="my-background-radial-gradient overflow-hidden">
            <div className="my-doctors-container container">
              <div className="my-page-heading">
                <h2>Not Approved Doctor Details</h2>
                <hr />
              </div>
              <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                  {notApprovedDoctors.map(doctor => (
                    <div key={doctor.doctorId} className="col">
                      <div className="card my-bg-glass">
                        <div className="card-body">
                        <img
                          src={`https://localhost:5006/Uploads/${doctor.doctorImage}`}
                          className="card-img-top"
                          alt=""
                          style={{ width: '200px', height: '200px', transform: 'scale(1.2)' }}
                        />

                          <div className="flex flex-wrap">
                            <br />
                            <span className="inline-block w-1/2">
                              <p className="text-sm text-gray-600">Name: {doctor.doctorName}</p>
                              <p className="text-sm text-gray-600">Age: {doctor.doctorAge}</p>
                              <p className="text-sm text-gray-600">Specialization: {doctor.doctorSpeciality}</p>
                              <p className="text-sm text-gray-600">Gender: {doctor.doctorGender}</p>
                              <p className="text-sm text-gray-600">Email: {doctor.doctorEmail}</p>
                            </span>
                            <span className="inline-block w-1/2">
                              <p className="text-sm text-gray-600">Experience: {doctor.doctorExperience} years</p>
                              {/* <p className="text-sm text-gray-600">Description: {doctor.description}</p> */}
                              <p className="text-sm text-gray-600">Phone Number: {doctor.phoneNumber}</p>
                              <p className="text-sm text-gray-600">Status: {doctor.status}</p>
                            </span>
                          </div>
                          <hr />

                          <div className="d-flex justify-content-center">

                            <button
                              type="button"
                              className="btn btn-success me-2"
                              onClick={() => {
                                const requestBody = {
                                  "id": doctor.doctorId
                                };
                                console.log(requestBody);

                                fetch("https://localhost:5006/api/Doctors/Update status", {
                                  method: "PUT",
                                  headers: {
                                    "Accept": "application/json",
                                    "Content-Type": "application/json",
                                    Authorization: 'Bearer ' + localStorage.getItem('token')
                                  },
                                  body: JSON.stringify(requestBody)
                                })
                                  .then(response => response.json())
                                  .then(data => {
                                    console.log(data);
                                    fetchNotApprovedDoctors();
                                    fetchApprovedDoctors();
                                  })
                                  .catch(error => console.log(error));
                              }}>Accept</button>


                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => {
                                const requestBody = {
                                  "id": doctor.doctorId
                                };
                                console.log(requestBody);

                                fetch("https://localhost:5006/api/Doctors/Decline Doctor", {
                                  method: "PUT",
                                  headers: {
                                    "Accept": "application/json",
                                    "Content-Type": "application/json",
                                    Authorization: 'Bearer ' + localStorage.getItem('token')
                                  },
                                  body: JSON.stringify(requestBody)
                                })
                                  .then(response => response.json())
                                  .then(data => {
                                    console.log(data);
                                    fetchNotApprovedDoctors();
                                    fetchApprovedDoctors();
                                  })
                                  .catch(error => console.log(error));
                              }}>Decline</button>


                          </div>
                          {/* <button
  type="button"
  className="btn btn-danger"
  onClick={() => handleDeleteDoctor(doctor.doctorId)}
>
  Delete
</button> */}


                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        </div>
      )}

      {activeSection === 'getDoctors' && (
        <div className="getDoctors">
          <section className="my-background-radial-gradient overflow-hidden">
            <div className="my-doctors-container container">
              <div className="my-page-heading">
                <h2>Approved Doctor Details</h2>

                <hr />
              </div>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {doctors.map(doctor => (
                  <div key={doctor.doctorId} className="col">

                    <div className="card my-bg-glass">
                      <br />
                      
                      
                      <div className="card-body">
                      <img
  src={`https://localhost:5006/Uploads/${doctor.doctorImage}`}
  className="card-img-top rounded-circle"
  alt=""
  style={{ width: '150px', height: '150px',objectFit: "cover", transform: 'scale(1.2)' }}
/>
<br/>
<br/>
<hr/>
                        <h5 className="card-title">{doctor.doctorName}</h5>
                        <div className="flex flex-wrap">
                          <span className="inline-block w-1/2">
                            <p className="text-sm text-gray-600">Age: {doctor.doctorAge}</p>
                            <p className="text-sm text-gray-600">Specialization: {doctor.doctorSpeciality}</p>
                            <p className="text-sm text-gray-600">Gender: {doctor.doctorGender}</p>
                            <p className="text-sm text-gray-600">Email: {doctor.doctorEmail}</p>
                          </span>
                          <span className="inline-block w-1/2">
                            <p className="text-sm text-gray-600">Experience: {doctor.doctorExperience} years</p>
                            {/* <p className="text-sm text-gray-600">Description: {doctor.description}</p> */}
                            <p className="text-sm text-gray-600">Phone Number: {doctor.phoneNumber}</p>
                            <p className="text-sm text-gray-600">Status: {doctor.status}</p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default AdminPage;
