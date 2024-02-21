import React from "react";
import keysat_logo from "../../src/images/KEYSAT_red.png";
import keyin_logo from "../../src/images/Keyin_logo.png";

function LoginPage() {
  
  return (
    <div id="log_in">
    <div class="card">
      <img src={keysat_logo} alt="" width="240px"></img>
      <h2>Login</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <button id="login_btn">Login</button>
      </form>
    </div>
    <img src={keyin_logo} alt="Keyin Logo" width="140px"></img>
    </div>
  );
}

export default LoginPage;
