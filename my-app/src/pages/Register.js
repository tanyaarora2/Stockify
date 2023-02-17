import React from "react";
import { Link } from "react-router-dom";
const register = () => {
  return (
    <div className="text-center m-5-auto">
      <h2>CREATE AN ACCOUNT</h2>
      <form action="/home">
        <p>
          <label>Name</label>
          <br />
          <input type="text" name="first_name" required />
        </p>
        <p>
          <label>Email address</label>
          <br />
          <input type="text" name="email address" required />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input type="password" name="password" required />
        </p>
        <p>
          <label>Repeat Password</label>
          <br />
          <input type="password" name="repeat-password" required />
        </p>
        <p>
          <button id="sub_btn" type="submit">
            REGISTER
          </button>
        </p>
      </form>
      <footer>
        <p>
          Have already an account? <Link to="/LogIn">Login here</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
};

export default register;
