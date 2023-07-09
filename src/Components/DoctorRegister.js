import React, {  useState } from "react";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoMdPerson, IoMdMail, IoMdLock, IoMdCall, IoMdCheckmarkCircleOutline } from 'react-icons/io';
import bg from './Assets/3386851.jpg'
import { FaHome } from 'react-icons/fa';


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

  const navigate = useNavigate();
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setDoctor({ ...doctor, doctorImage: file });
    setSelectedFileName(file ? file.name : '');
  };


  const doctorRegister = () => {
    console.log(doctor);
    const requiredFields = [
      "doctorName",
      "doctorSpeciality",
      "doctorAge",
      "doctorGender",
      "doctorEmail",
      "doctorPwd",
      "doctorExperience",
      "description",
      "phoneNumber",
      "doctorImage",
    ];

    const isAnyFieldEmpty = requiredFields.some((field) => !doctor[field]);

    if (isAnyFieldEmpty) {
      toast.error("Please fill in all the required fields.");
      return;
    }

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
    formData.append("phoneNumber", doctor.phoneNumber);

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
        navigate("/loginx");
      })
      .catch((error) => {
        console.error("Error Creating the Doctor:", error);
        toast.success("Error");
        navigate("/loginx");

      });      
  };

  return (
    <div>
    <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
  <a href="/" style={{ fontSize: '2rem', color: 'white' }}>
    <FaHome />
  </a>
</div>
    <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
<div className="container justify-content-center" style={{ maxWidth: '600px'}} >
    <div className="card shadow">
    <div className="card-body">
      <div className="offset-lg-2 col-8" style={{ marginTop: '20px' }}>
        <h1>Doctor Register Page</h1>
        <br />

        <div className="form-group mb-4">
          <label htmlFor="name">
            <IoMdPerson className="mr-2" />
            Name
          </label>
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
          <label htmlFor="specialty">
            <IoMdPerson className="mr-2" />
            Specialty
          </label>
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
          <label htmlFor="age">
            <IoMdPerson className="mr-2" />
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            onChange={(event) => {
              setDoctor({ ...doctor, doctorAge: event.target.value });
            }}
          />
        </div>

        <div className="form-group mb-4" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <label>Gender</label>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="genderMale"
                name="gender"
                value="Male"
                checked={doctor.doctorGender === 'Male'}
                onChange={(event) => {
                  setDoctor({ ...doctor, doctorGender: event.target.value });
                }}
              />
              <label className="form-check-label" htmlFor="genderMale">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="genderFemale"
                name="gender"
                value="Female"
                checked={doctor.doctorGender === 'Female'}
                onChange={(event) => {
                  setDoctor({ ...doctor, doctorGender: event.target.value });
                }}
              />
              <label className="form-check-label" htmlFor="genderFemale">
                Female
              </label>
            </div>
          </div>
        </div>

        <div className="form-group mb-4">
          <label htmlFor="email">
            <IoMdMail className="mr-2" />
            Email
          </label>
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
          <label htmlFor="password">
            <IoMdLock className="mr-2" />
            Password
          </label>
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
          <label htmlFor="experience">
            <IoMdPerson className="mr-2" />
            Experience (in years)
          </label>
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
          <label htmlFor="phoneNumber">
            <IoMdCall className="mr-2" />
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            onChange={(event) => {
              setDoctor({ ...doctor, phoneNumber: event.target.value });
            }}
          />
        </div>

        <div className="form-group mb-4">
                <label htmlFor="doctorImage">Image</label>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="doctorImage"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                  />
                  <label className="custom-file-label" htmlFor="doctorImage">
                    {selectedFileName || 'Choose file'}
                  </label>
                </div>
              </div>

        <div className="form-check d-flex mb-4">
          <input className="form-check-input" type="checkbox" id="terms" />
          <label className="form-check-label" htmlFor="terms">
            <IoMdCheckmarkCircleOutline className="mr-2" />
            I have read and agree to the terms
          </label>
        </div>

        <button className="btn btn-primary mb-4 w-100" onClick={doctorRegister}>
          Sign up
        </button>

        <div className="text-center">
              Already Logged in ? <br/>
              <a href="/loginx">Sign-in</a>
            </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  );
}
