import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Admin() {
   
    const [AdPassword, passwordupdate] = useState('');
    const [AdminEmail, userNameupdate] = useState('');

    const navigate=useNavigate();

    useEffect(() => {
         sessionStorage.clear();
        },[])

const ProceedLoginusingAPI = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('proceed');
            let inputobj={"AdminEmail":AdminEmail,
            "AdPassword": AdPassword};
            console.log(JSON.stringify(inputobj))
            fetch("https://localhost:5006/api/Token/Admin",{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(inputobj)
            }).then((res) => {
                return res.text();
            }).then((resp) => {
                console.log(resp)
                toast.success('Success');
                localStorage.setItem('token',resp);
                navigate('/AdminPage')                          
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }


   const validate = () => {
        let result = true;
        if (AdminEmail === '' || AdminEmail === null) {
            result = false;
            toast.warning('Please Enter Email');
        }
        if (AdPassword === '' || AdPassword === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }
    return (
        
        <div className="row">
            <ToastContainer />
  <div className="offset-lg-4 col-4" style={{ marginTop: '100px' }}>
    <form onSubmit={ProceedLoginusingAPI} className="container">
      <div className="card shadow">
        <div className="card-header bg-dark text-white">
          <h2>Admin Login</h2>
        </div>
        <div className="card-body">
          <div className="form-group mb-4">
            <label htmlFor="form1">Email address <span className="errmsg">*</span></label>
            <input type="email" value={AdminEmail} onChange={e => userNameupdate(e.target.value)} className="form-control" id="form1" />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="form2">Password <span className="errmsg">*</span></label>
            <input type="password" value={AdPassword} onChange={e => passwordupdate(e.target.value)} className="form-control" id="form2" />
          </div>
          <div className="d-flex justify-content-between mx-4 mb-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
            </div>
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-dark">Sign in</button>
        </div>
      </div>
    </form>
  </div>
</div>

      
      
    )
}