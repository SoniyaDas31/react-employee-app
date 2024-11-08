import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {

  let navigate=useNavigate();

  const [user, setUsers] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://jsonplaceholder.typicode.com/users/", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Employee</h2>

          <form onSubmit="">
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Employee Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Name"
                name="name"
                value=""
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Username"
                name="username"
                value=""
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="E-mail"
                name="email"
                value=""
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link type="submit" className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
