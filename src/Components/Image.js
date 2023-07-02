import React, { useState } from 'react';
import department1 from './Assets/img/department1.jpg';
import department2 from './Assets/img/department2.jpg';
import department3 from './Assets/img/departments3.jpg';
import department4 from './Assets/img/department4.jpg';
import department5 from './Assets/img/department5.jpg';


export default function Image() {
  const [activeTab, setActiveTab] = useState('tab-1');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="departments" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
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
  );
}
