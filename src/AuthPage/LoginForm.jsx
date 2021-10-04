import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const LoginFormPage = ({ userList }) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState({
    email: "",
    password: "",
  });

  const changeLoginField = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setLoginForm({
      ...loginForm,
      [fieldName]: fieldValue,
    });
  };

  const handleSubmitLogin = () => {
    let isValid = true;
    let error = {};
    // Email
    if (!loginForm.email) {
      error.email = "Bạn cần nhập email";
      isValid = false;
    } else {
      error.email = "";
    }

    // Password
    if (!loginForm.password) {
      error.password = "Bạn cần nhập password";
      isValid = false;
    } else {
      error.password = "";
    }

    setLoginError({ ...loginError, ...error });
    if (isValid) {
      const userIndex = userList.findIndex((item) => {
        return (
          item.email === loginForm.email && item.password === loginForm.password
        );
      });
      if (userIndex !== -1) {
        alert('Đăng nhập thành công')
      } else {
        alert('Đăng nhập thất bại')
      }
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          onChange={(e) => changeLoginField(e)}
          value={loginForm.email}
        />
        {loginError.email && (
          <span className="text-danger">{loginError.email}</span>
        )}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => changeLoginField(e)}
          value={loginForm.password}
        />
        {loginError.password && (
          <span className="text-danger">{loginError.password}</span>
        )}
      </Form.Group>

      <Button
        type="button"
        variant="primary"
        className="w-100"
        onClick={() => handleSubmitLogin()}
      >
        Submit
      </Button>
    </Form>
  );
};

export default LoginFormPage;
