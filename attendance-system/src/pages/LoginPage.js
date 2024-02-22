import React from "react";
import keysat_logo from "../../src/images/KEYSAT_red.png";
import keyin_logo from "../../src/images/Keyin_logo.png";


function LoginPage() {
  
  return (
    <div id="log_in">
    <div class="card">
      <img class="Stat" src={keysat_logo} alt="" width="240px" ></img>
      <h3 class="PSign">Please sign in with your Keyin account</h3>
      <form>
        <div className="email-password">
        <div>
          
          <input className="email" type="text" placeholder="Username" />
        </div>
        <break></break>
        <div>
          
          <input className="password" type="password" placeholder="Password" />
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
