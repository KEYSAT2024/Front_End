import React from "react";
import keysat_logo from "../../src/images/KEYSAT_red.png";
import keyin_logo from "../../src/images/Keyin_logo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../auth/auth";

function LoginPage() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const auth = useAuth();

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name.toString()]: [e.target.value] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (auth.login(data.username, data.password) === "admin") {
      navigate("/admin-dashboard");
    } else if (auth.login(data.username, data.password) === "student") {
      navigate("/student-dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div id="log_in">
      <div class="card">
        <img class="Stat" src={keysat_logo} alt="" width="240px"></img>
        <h3 class="PSign">Please sign in with your Keyin account</h3>
        <form onSubmit={handleSubmit}>
          <div className="email-password">
            <div>
              <input
                className="email"
                type="text"
                name="username"
                value={data.username}
                placeholder="Username"
                onChange={changeHandler}
              />
            </div>
            <break></break>
            <div>
              <input
                className="password"
                type="password"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={changeHandler}
              />
            </div>
          </div>
          <button id="login_btn">Sign In</button>
        </form>
      </div>
      <p class="Power">Powered By</p>
      <img src={keyin_logo} alt="Keyin Logo" width="140px"></img>
    </div>
  );
}

export default LoginPage;
