import React from "react";
import "./LoginPage.css";

function SignUpPage() {
  return (
    <>
      <form>
        <div>
          <div className="forn-input">
            <input placeholder="Phone Number" />
          </div>
          <div className="forn-input">
            <input placeholder="Name" />
          </div>
          <div className="forn-input">
            <input placeholder="Email" />
          </div>
        </div>

        <div>
          <button className="sumt-btn">Continue</button>
        </div>
      </form>
    </>
  );
}

export default SignUpPage;
