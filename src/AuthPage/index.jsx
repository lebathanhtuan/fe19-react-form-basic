import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthPage = () => {
  const [userList, setUserList] = useState([]);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="register-container">
      <div className="register-form">
        <div className="login-header">
          <h3
            className={isLogin ? "login-title active" : "login-title"}
            onClick={() => setIsLogin(true)}
          >
            Login
          </h3>
          <h3
            className={!isLogin ? "login-title active" : "login-title"}
            onClick={() => setIsLogin(false)}
          >
            Register
          </h3>
        </div>
        {isLogin ? (
          <LoginForm userList={userList} />
        ) : (
          <RegisterForm userList={userList} setUserList={setUserList} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
