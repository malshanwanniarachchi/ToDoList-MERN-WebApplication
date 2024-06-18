import React, { useState} from "react";
import "./login.css"
import axios from "axios";
import Swal from 'sweetalert2';


export default function Login() {

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    setData({
      ...data,
      [name]: value,
    });
  }

  const onSubmitForm = async (e) => {

    

    try {
      e.preventDefault();
  
      const res = await axios({
        method: "post",
        baseURL: "http://localhost:8000",
        url: "/api/user/signin",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const token = res.data.token;
      localStorage.setItem("token", token);
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'Redirecting to Dashboard...',
        showConfirmButton: false,
        timer: 2000 
      }).then(() => {
        window.location.assign("/home");
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while signing in. Please try again.',
      });
    }
  };
  

  return (
    <div>
    <div className='container'>

    <section className="vh-100" >
<div id="login" className="container py-5 h-100">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col col-xl-10">
      <div className="card" style={{borderRadius: "1rem", maxHeight:"653px"}}>
        <div className="row g-0">
          <div className="col-md-6 col-lg-5 d-none d-md-block">
          <video className="homepage-video" autoPlay loop muted style={{maxHeight:"650px"}} >
      <source src="/images/login.mp4" type="video/mp4" />
          Your browser does not support the video tag.
  </video>
          </div>
          <div className="col-md-6 col-lg-7 d-flex align-items-center">
            <div className="card-body p-4 p-lg-5 text-black">

              <form  noValidate onSubmit={(e) => onSubmitForm(e)}>

                <div className="d-flex align-items-center mb-3 pb-1">
                  <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                  <span className="h1 fw-bold mb-0"> Welcome</span>
                </div>

                <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>

                <div className="form-outline mb-4">
                  <input type="email" id="form2Example17" className="form-control form-control-lg"
                   value={data.email}
                   onChange={handleChange}
                   name="email"
                />
                 
                  <label className="form-label" for="form2Example17">Email address</label>
                </div>

                <div className="form-outline mb-4"  >
                  <input id="form2Example27" className="form-control form-control-lg" 
                     value={data.password}
                     onChange={handleChange}
                     name="password"
                     
                  />
                  <label className="form-label" for="form2Example27">Password</label>
                </div>
                <div className="pt-1 mb-4">
                  <button className="btn btn-dark btn-lg btn-block" type="submit">
                  <i className='fas fa-sign-in-alt'></i>&nbsp;Login</button>
                </div>

                <p className="mb-5 pb-lg-2" style={{color:"#393f81"}}>Don't have an account? <a href="/register"
              style={{color: "#393f81"}}>Register here</a></p>


              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
      
    </div>
  </div>
  )
}
