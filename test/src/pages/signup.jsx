import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./bootstrap-grid.css";
import "./bootstrap-reboot.css";
import "./bootstrap.css";
import "./bootstrap-utilities.css";
import { FormDataContext } from "../App";

function SignUp() {
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [firstError, setFirstError] = useState(null);
  const [lastError, setLastError] = useState(null);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const { setFormData } = useContext(FormDataContext);

  const navigate = useNavigate();

  function isValidEmail(phone) {
    const ne =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return ne.test(phone);
  }
  function isValidPassword(password) {
    const ne = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    return ne.test(password);
  }
  function isFirstName(name) {
    const ne = /^[A-Za-z]{4,15}$/;
    return ne.test(name);
  }
  console.log("first Name" + ": " + firstName);
  console.log("last Name" + ": " + lastName);
  console.log("Email" + ": " + email);
  console.log("password" + ": " + password);

  const loginEmail = (event) => {
    if (!isValidEmail(event.target.value)) {
      setEmailError("email is invalid");
    } else {
      setEmailError(null);
    }
    setEmail(event.target.value);
  };
  const loginFirstNme = (event) => {
    if (!isFirstName(event.target.value)) {
      setFirstError("name is invalid");
    } else {
      setFirstError(null);
    }
    setFirstName(event.target.value);
  };
  const loginLastNme = (event) => {
    if (!isFirstName(event.target.value)) {
      setLastError("LastName is invalid");
    } else {
      setLastError(null);
    }
    setLastName(event.target.value);
  };
  const loginPassword = (event) => {
    if (!isValidPassword(event.target.value)) {
      setError("password is invalid");
    } else {
      setError(null);
    }

    setPassword(event.target.value);
  };



  function handleSubmitForLogin(e) {
    e.preventDefault();
    var form = document.forms["register-form"];
    const data = [
      {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        password: form.password.value,
      },
    ];
    console.log(data);
  }

  function handleSubmitForLogin(e) {
    e.preventDefault();
   var form = document.forms["register-form"];
    const data = [
      {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        password: form.password.value,
      },
    ];

    setFormData(data);

    if (
      setError !== isValidPassword &&
      setEmailError !== isValidEmail &&
      setFirstError !== isFirstName &&
      setLastError !== isFirstName
    ) {
       document.getElementById("loginButton").disabled = true;
      navigate("/dashboard");
    } else {
      document.getElementById("loginButton").disabled = false;
    }
  }

  var check = function () {
    if (
      document.getElementById("password").value ==
      document.getElementById("confirm_password").value
    ) {
      let confrimedPassword = document.getElementById("confirm_password").value;
      setPassword(confrimedPassword);
      document.getElementById("message").style.color = "green";
      document.getElementById("message").innerHTML = "Password is Matched";
    } else {
      document.getElementById("message").style.color = "red";
      document.getElementById("message").innerHTML = "Password is Not Matching";
    }
  };

  return (
    <div className="main">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 shadow">
            <form
              autoComplete="off"
              name="register-form"
              id="register-form"
              onSubmit={handleSubmitForLogin}
              className="my-3"
            >
              <h3 className="my-3">Sign-Up</h3>
              <div className="name text-start my-2">
                <label htmlFor="" className="text-start">
                  First Name
                </label>
                <input
                  type="text"
                  id="cname"
                  className="form-control"
                  required
                  name="firstName"
                  onChange={loginFirstNme}
                  placeholder="First Name"
                />
                {firstError && (
                  <div className="text-danger csFont-4 ml-5">{firstError}</div>
                )}
              </div>
              <div className="name text-start my-2">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={loginLastNme}
                  className="form-control"
                  required
                />
                {lastError && (
                  <div className="text-danger csFont-4 ml-5">{lastError}</div>
                )}
              </div>
              <div className="name text-start my-2">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                  className="form-control"
                  onChange={loginEmail}
                  required
                />
                {emailError && (
                  <div className="text-danger csFont-4 ml-5">{emailError}</div>
                )}
              </div>
              <div className="name text-start my-2">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  required
                  onChange={loginPassword}
                  onKeyUp={() => check()}
                />
                {error && (
                  <div className="text-danger csFont-4 ml-5">{error}</div>
                )}
              </div>
              <div className="name text-start my-2">
                <label htmlFor="">Conform Password</label>
                <input
                  type="password"
                  className="form-control rounded"
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Confirm Password"
                  required
                  onKeyUp={() => check()}
                />
                <span className="password-match" id="message"></span>
              </div>
              <button
                action="submit"
                className="form-control bg-primary text-light"
                id="loginButton"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
