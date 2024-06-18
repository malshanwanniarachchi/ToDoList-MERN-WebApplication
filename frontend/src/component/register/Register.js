import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export default function Register() {
  const history = useHistory();
  const [data, setData] = useState({
    name: "",
    email:"",
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
        url: "/api/user/signup",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Signup Successful!",
        text: "You have successfully signed up.",
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/");
          window.location.reload();
        }
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while signing up. Please try again.",
      });
    }
  };

 

  return (
    <div className="container">
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form noValidate onSubmit={(e) => onSubmitForm(e)}>
                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                           Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter your Name"
                            value={data.name}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                           Email
                          </label>
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address"
                            title="Username should only contain lowercase letters. e.g. john"
                            value={data.email}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                          </label>
                          <input
                            minLength="8"
                            className="form-control"
                            placeholder="Enter Password"
                            id="myInput"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                          />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ marginTop: "15px" }}>
                          <i className="fas fa-user-plus"></i>
                          &nbsp;Signup
                        </button>
                        <div className="text-center text-lg-start mt-4 pt-2">
                          <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                            Do you have an account? <a href="/" style={{ color: "#393f81" }}>Login here</a>
                          </p>
                        </div>
                      </form>
                    </div>

                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        alt="signup form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
