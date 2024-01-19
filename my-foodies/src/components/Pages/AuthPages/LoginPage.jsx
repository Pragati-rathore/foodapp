import React, { useState } from "react";
import "./LoginPage.css";
import { RxCross1 } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import LoginImg from "../../../assets/login.avif";
import SignUpPage from "./SignPage";

function LoginPage({ handleLoginPopUpClose }) {
  const [showSignUp , setShowSignUp] = useState(false)
  const handleClosePopup = () => {
    handleLoginPopUpClose();
  };

  const handleSignIn =()=>{
   setShowSignUp(!showSignUp)
  }
 
  return (
    <>
      <div className="login-container" >
        <div className=" login-main">
          <div className="hd-box-login">
            <div className="login-hd">
              <div
                onClick={() => {
                  handleLoginPopUpClose();
                }}
              >
                <RxCross1 />
              </div>

              <h1>{showSignUp? "Sign Up" :"Login"}</h1>
            </div>
            <div className="crct-accnt">
              <p>
                or  <a onClick={()=>{handleSignIn() }}>{showSignUp? "login to your account" :"Creact an account"}</a>
              </p>
            </div>
            <div className="logim-img">
              <img src={LoginImg} />
            </div>
          </div>
          <hr className="hr" />
          <div className=" login-form">
            <div>
            {showSignUp ?  <SignUpPage/> : <form>
                <div>
                  <div className="forn-input">
                    <input placeholder="Phone Number" />
                  </div>
                </div>
                <div>
                  <button className="sumt-btn">SAVE ADDRESS & PROCEED</button>
                </div>
                
              </form> }
              
              <div className="login-policy">
                  <p>By clicking on Login, I accept the <a>Terms & Conditions </a>& <a>Privacy Policy</a> </p>
                </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default LoginPage;
