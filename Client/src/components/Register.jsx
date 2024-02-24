import React from "react";
import { Link } from "react-router-dom";

export default function Register() {


  return (
    <div className="wrapper signUp">
      <div className="illustration">
        {/* <img src="https://source.unsplash.com/random" alt="illustration" /> */}
      </div>
      <div className="form">
        <div className="heading">CREATE AN ACCOUNT</div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="emial">E-Mail</label>
            <input type="text" id="email" placeholder="Enter your mail" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter you password"
            />
          </div>
          <button type="submit">Submit</button>
          <h2 align="center" className="or">
            OR
          </h2>
        </form>
        <p>
          Have an account ? <Link to="/account/login"> Login </Link>
        </p>
      </div>
    </div>
  );
}
