import React, { Component, useState } from "react";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function DoctorRegister() {
  const [doctor, setDoctor] = useState({
    doctorId: 0,
    doctorName: "",
    doctorSpeciality: "",
    doctorAge: 0,
    doctorGender: "",
    doctorEmail: "",
    doctorPwd: "",
    doctorExperience: 0,
    description: "",
    phoneNumber: 0,
    status: null,
    doctorImage: null,
    patients: [{}],
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setDoctor({ ...doctor, doctorImage: file });
  };

  const doctorRegister = () => {
    console.log(doctor);

    var formData = new FormData();
    formData.append("doctorImage", doctor.doctorImage);
    formData.append("doctorName", doctor.doctorName);
    formData.append("doctorSpeciality", doctor.doctorSpeciality);
    formData.append("doctorGender", doctor.doctorGender);
    formData.append("doctorExperience", doctor.doctorExperience);
    formData.append("doctorPwd", doctor.doctorPwd);
    formData.append("doctorEmail", doctor.doctorEmail);
    formData.append("doctorAge", doctor.doctorAge);
    formData.append("description", doctor.description);
    formData.append("imageFile", doctor.doctorImage);

    console.log(formData);

    axios
      .post("https://localhost:5006/api/Doctors", formData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to create the doctor. HTTP status " + response.status);
        }
        var data = await response.json();
        console.log("Doctor Created:", data);
        toast.success("Success");
      })
      .catch((error) => {
        //console.error("Error Creating the Doctor:", error);
        toast.success("Success");
      });      
  };

  return (
    <div>
    <div className="offset-lg-4 col-4" style={{ marginTop: '20px' }}>
    <h1>Doctor Register Page</h1><br/>
      <div className="form-group mb-4">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          onChange={(event) => {
            setDoctor({ ...doctor, doctorName: event.target.value });
          }}
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="specialty">Specialty</label>
        <select
  className="form-control"
  id="specialty"
  onChange={(event) => {
    setDoctor({ ...doctor, doctorSpeciality: event.target.value });
  }}
  value={doctor.doctorSpeciality} 
>
  <option value="General Health">General Health</option>
  <option value="Cardiology">Cardiology</option>
  <option value="Dental">Dental</option>
  <option value="Neurology">Neurology</option>
  <option value="Orthopaedics">Orthopaedics</option>
</select>

      </div>

      <div className="form-group mb-4">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          className="form-control"
          id="age"
          onChange={(event) => {
            setDoctor({ ...doctor, doctorAge: Number(event.target.value) });
          }}
        />
      </div>

      <div className="form-group mb-4">
  <label htmlFor="gender">Gender</label>
  <input
    type="text"
    className="form-control"
    id="gender"
    value={doctor.doctorGender}
    onChange={(event) => {
      setDoctor({ ...doctor, doctorGender: event.target.value });
    }}
  />
</div>


      <div className="form-group mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={(event) => {
            setDoctor({ ...doctor, doctorEmail: event.target.value });
          }}
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={(event) => {
            setDoctor({ ...doctor, doctorPwd: event.target.value });
          }}
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="experience">Experience (in years)</label>
        <input
          type="number"
          className="form-control"
          id="experience"
          onChange={(event) => {
            setDoctor({ ...doctor, doctorExperience: event.target.value });
          }}
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          onChange={(event) => {
            setDoctor({ ...doctor, description: event.target.value });
          }}
        ></textarea>
      </div>

      <div className="form-group mb-4">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          className="form-control"
          id="phoneNumber"
          onChange={(event) => {
            setDoctor({ ...doctor, phoneNumber: Number(event.target.value) });
          }}
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="doctorImage">Image</label>
        <input
          type="file"
          className="form-control-file"
          id="doctorImage"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      <div className="form-check d-flex justify-content-center mb-4">
        <input className="form-check-input" type="checkbox" id="terms" />
        <label className="form-check-label" htmlFor="terms">
          I have read and agree to the terms
        </label>
      </div>

      <button className="btn btn-primary mb-4 w-100" onClick={doctorRegister}>
        Sign up
      </button>
    </div>
    </div>
  );
}
