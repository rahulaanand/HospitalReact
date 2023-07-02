import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import department1 from './Assets/img/department1.jpg'
import department2 from './Assets/img/department2.jpg'
import department3 from './Assets/img/departments3.jpg'
import department4 from './Assets/img/department4.jpg'
import department5 from './Assets/img/department5.jpg'
import './Home.css';

function Home() {
  const [doctors, setDoctors] = useState([]);

  const [activeTab, setActiveTab] = useState('tab-1');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    fetch('https://localhost:5006/api/Doctors/Accepted status')
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto"><a href="/">One-Health</a></h1>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a className="nav-link scrollto active" href="/">Home</a></li>
              <li><a className="nav-link scrollto" href="#departments">Departments</a></li>
              <li><a className="nav-link scrollto" href="#services">Services</a></li>
              <li><a className="nav-link scrollto" href="/doctors">Doctors</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <a href="#appointment" className="appointment-btn scrollto">
            <span className="d-none d-md-inline" href="">Make an</span> Appointment
          </a>
          <a href="/loginp" className="appointment-btn scrollto">
            <span className="d-none d-md-inline" href="/loginp">Login/</span>Sign Up
          </a>
        </div>
        
      </header>

      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1>Welcome to One-Health,</h1>
          <h2>a renowned healthcare institution dedicated to providing exceptional medical care and services exclusively</h2><br/><br/><br/><br/><br/><br/><br/>
          <a href="#about" className="btn-get-started scrollto">Get Started</a>
        </div>
      </section>

    <main id='main'>


    <section id="why-us" className="why-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="content">
              <h3>Why Choose <br/>One - Health..?</h3>
              <p>
              At One-Health, we believe in the power of comprehensive healthcare that encompasses the well-being of individuals, animals, and the environment. Our hospital is named "One-Health" to reflect our commitment to delivering a holistic approach to healthcare, with a focus on integrated services, preventive medicine, community engagement, and a unique brand identity.
              </p>
              <div className="text-center">
                <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-receipt"></i>
                    <h4>Integrated Services</h4>
                    <p>Experience comprehensive care under one roof, tailored to your needs. Our integrated services provide a seamless healthcare experience, combining various specialties.</p>
                    </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-cube-alt"></i>
                    <h4>Multidisciplinary Approach</h4>
                    <p>By integrating multiple disciplines, we ensure that you receive well-rounded care that takes into account your unique needs, providing you with a comprehensive.</p>
                    </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-images"></i>
                    <h4>Community Engagement</h4>
                    <p>Building a healthier community through collaboration, quality healthcare, and health awareness.</p>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="departments" className="departments" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
  <div className="container">
    <div className="section-title">
      <h2>Departments</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>

    <div className="row gy-4">
      <div className="col-lg-3">
        <ul className="nav nav-tabs flex-column" style={{ position: 'sticky', top: '20px' }}>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'tab-1' ? 'active show' : ''}`}
              data-bs-toggle="tab"
              href="#tab-1"
              onClick={() => handleTabChange('tab-1')}
            >
              Cardiology
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'tab-2' ? 'active show' : ''}`}
              data-bs-toggle="tab"
              href="#tab-2"
              onClick={() => handleTabChange('tab-2')}
            >
              Dental
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'tab-3' ? 'active show' : ''}`}
              data-bs-toggle="tab"
              href="#tab-3"
              onClick={() => handleTabChange('tab-3')}
            >
              Neurology
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'tab-4' ? 'active show' : ''}`}
              data-bs-toggle="tab"
              href="#tab-4"
              onClick={() => handleTabChange('tab-4')}
            >
              Orthopedics
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'tab-5' ? 'active show' : ''}`}
              data-bs-toggle="tab"
              href="#tab-5"
              onClick={() => handleTabChange('tab-5')}
            >
              General Health Check-up
            </a>
          </li>
        </ul>
      </div>

      <div className="col-lg-9">
        <div className="tab-content">
          <div className={`tab-pane ${activeTab === 'tab-1' ? 'active show' : ''}`} id="tab-1">
            <div className="row gy-4">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Cardiology</h3>
                <p>
                  Discover exceptional cardiac care at our Cardiology Department. Our dedicated team of cardiologists provides comprehensive services using advanced technology for accurate diagnoses and personalized treatment plans. From non-invasive tests to expert interventions, we prioritize your heart health with compassion and expertise. Experience the highest quality care with us.
                </p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img src={department1} alt="" className="img-fluid shadow" style={{ width: '250px', height: '250px' }} />
              </div>
            </div>
          </div>
          <div className={`tab-pane ${activeTab === 'tab-2' ? 'active show' : ''}`} id="tab-2">
            <div className="row gy-4">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Dental</h3>
                <p>
                  Experience exceptional dental care at our Dental Department. Our expert team of dentists and hygienists deliver top-quality services using advanced techniques and state-of-the-art equipment. From routine check-ups to specialized treatments, we prioritize your oral health with precision and care.
                </p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img src={department2} alt="" className="img-fluid shadow" style={{ width: '250px', height: '250px' }} />
              </div>
            </div>
          </div>
          <div className={`tab-pane ${activeTab === 'tab-3' ? 'active show' : ''}`} id="tab-3">
            <div className="row gy-4">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Neurology</h3>
                <p>
                  Discover advanced neurological care at our Neurology Department. Our expert team of neurologists provides exceptional services using cutting-edge technology for accurate diagnoses and personalized treatment plans. From comprehensive evaluations to innovative therapies, we prioritize your neurological well-being with expertise and compassion.
                </p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img src={department3} alt="" className="img-fluid shadow" style={{ width: '250px', height: '250px' }} />
              </div>
            </div>
          </div>
          <div className={`tab-pane ${activeTab === 'tab-4' ? 'active show' : ''}`} id="tab-4">
            <div className="row gy-4">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Orthopedics</h3>
                <p>
                  Experience exceptional orthopedic care at our Orthopedics Department. Our skilled team of orthopedic specialists offers advanced treatments and state-of-the-art procedures for a wide range of musculoskeletal conditions. From diagnosis to rehabilitation, we prioritize your mobility and well-being with expertise and compassion.
                </p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img src={department4} alt="" className="img-fluid shadow" style={{ width: '250px', height: '250px' }} />
              </div>
            </div>
          </div>
          <div className={`tab-pane ${activeTab === 'tab-5' ? 'active show' : ''}`} id="tab-5">
            <div className="row gy-4">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>General Health Check-up</h3>
                <p>
                  Prioritize your overall well-being with our comprehensive General Health Check-up. Our dedicated team of healthcare professionals provides a thorough evaluation of your health, including vital signs, blood tests, and preventive screenings. With personalized recommendations and expert guidance, we empower you to take control of your health and lead a fulfilling life. Invest in your well-being with our trusted General Health Check-up today.
                </p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img src={department5} alt="" className="img-fluid shadow" style={{ width: '250px', height: '250px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section>
<div className="container">
  <div className="row">
    {doctors.slice(0, 3).map(doctor => (
      <div key={doctor.doctorId} className="col-md-4">
        <div className="card my-bg-glass">
        <img
  src={`https://localhost:5006/Uploads/${doctor.doctorImage}`}
  className="card-img-top rounded-circle mx-auto d-block"
  alt={doctor.doctorName}
  style={{ width: "150px", height: "150px", padding: "10px" }}
/>

          <div className="card-body">
            <h5 className="card-title">{doctor.doctorName}</h5>
            <p className="card-text">Specialization: {doctor.doctorSpeciality}</p>
            
            <p className="card-text">Description: {doctor.description}</p>

          </div>
        </div>
      </div>
    ))}
  
</div><br/><br/>

    <Link to="/doctors" className="btn btn-primary">Know More</Link>
  </div>
</section>


    <section id="services" className="services">
      <div className="container">

        <div className="section-title">
          <h2>Services</h2>
          <p>Experience a wide range of high-quality services designed to cater to your specific needs. Our dedicated team of professionals is committed to delivering exceptional care and ensuring your well-being.</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon"><i className="fas fa-heartbeat"></i></div>
              <h4><a href="">Heart Health Services</a></h4>
              <p>Our team of experienced cardiologists provides specialized care for a healthy heart round-the-clock. Trust us for expert treatment and support</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon"><i className="fas fa-pills"></i></div>
              <h4><a href="">Comprehensive Medical Care</a></h4>
              <p>From preventive care to specialized treatments, we offer personalized medical solutions to meet your unique needs. Count on us for comprehensive care at your convenience</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="fas fa-hospital-user"></i></div>
              <h4><a href="">Round-the-Clock</a></h4>
              <p>Emergencies can strike at any time. Our reliable 24/7 medical assistance ensures you receive prompt and reliable care when you need it the most.</p>
            </div>
          </div>


        </div>

      </div>
    </section><br/><br/>
    </main>

    <footer id="footer">
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <h4>One-Health</h4>
        <p>
          &copy; <span id="current-year"></span> One-Health. All Rights Reserved.
        </p>
      </div>
      <div class="col-lg-8 text-right">
      <p>
          Address: 404 Laugh Avenue, Giggle City, HA-HA 101, United Laughterdom<br/>
      
          Email: jokes@example.com
        </p>
      </div>
    </div>
  </div>
</footer>

<script>
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;
</script>


    </div>
  )
}

export default Home