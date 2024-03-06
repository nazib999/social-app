import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="loginLogo">Sociallogo</div>
          <span className="loginDes">Connect with friends and around you.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text" placeholder="Email" className="loginInput" />
            <input type="text" placeholder="Password" className="loginInput" />
            <button className="loginButton">Log in</button>
            <span className="loginForget">Forget Password?</span>
            <div className="loginRegisterButton">Create a new account</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
