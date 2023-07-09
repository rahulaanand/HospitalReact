import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Doctors from './Components/Doctors';
import DoctorRegister from './Components/DoctorRegister';
import AdminPage from './Components/AdminPage';
import DoctorPage from './Components/DoctorPage';
import Admin from './Components/Admin';
import Register from './Components/Register';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Image from './Components/Image';
import Loginx from './Components/Loginx';


function App() {
  return (
    <Router>
      <div className="App">
      <ToastContainer theme='colored'></ToastContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/dregis" element={<DoctorRegister />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/regis" element={<Register/>}/>
          <Route path="/doctorpage" element={<DoctorPage/>}/>
          <Route path='/image' element={<Image/>}></Route>
          <Route path='/loginx' element={<Loginx/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
