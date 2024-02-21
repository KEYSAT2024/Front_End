import React from "react";
import keyin_logo from "../../src/images/Keyin_logo.png";

function SignInPage() {
  return (
    <div id="sign_in">
      <div class="card">
        <h2>Sign In</h2>
        <p>Are you a Keyin student or a staff member?</p>
        <a href="/login">
          <button>Keyin Student</button>
        </a>
        <a href="/login">
          <button>Staff Member</button>
        </a>
      </div>
      <img src={keyin_logo} alt="Keyin Logo" width="140px"></img>
    </div>
  );
}

export default SignInPage;
