import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const RegisterFormPage = ({ userList, setUserList }) => {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    gender: "male",
    role: "",
    choice: [],
    isOK: false,
  });
  const [registerError, setRegisterError] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    gender: "",
  });

  const changeRegisterField = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const fieldChecked = e.target.checked;
    let newValue
    if (fieldName === 'isOK') {
      newValue = fieldChecked
    } else if (fieldName === 'choice') {
      if (fieldChecked) {
        newValue = [
          ...registerForm.choice,
          fieldValue,
        ]
      } else {
        newValue = registerForm.choice.filter((item) => item !== fieldValue)
      }
    } else {
      newValue = fieldValue
    }
    setRegisterForm({
      ...registerForm,
      [fieldName]: newValue,
    });
  };

  const handleSubmitRegister = () => {
    let isValid = true;
    let error = {};
    // Name
    if (!registerForm.name) {
      error.name = "Bạn cần nhập tên";
      isValid = false;
    } else if (registerForm.name.length < 6 || registerForm.name.length > 20) {
      error.name = "Tên của bạn phải nằm trong khoảng 6-20 kí tự";
      isValid = false;
    } else {
      error.name = "";
    }

    // Email
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!registerForm.email) {
      error.email = "Bạn cần nhập email";
      isValid = false;
    } else if (!emailRegex.test(registerForm.email)) {
      error.email = "Email không đúng định dạng";
      isValid = false;
    } else {
      error.email = "";
    }

    // Password
    if (!registerForm.password) {
      error.password = "Bạn cần nhập password";
      isValid = false;
    } else if (
      registerForm.password.length < 6 ||
      registerForm.password.length > 14
    ) {
      error.password = "Mật khẩu của bạn phải nằm trong khoảng 6-14 kí tự";
      isValid = false;
    } else {
      error.password = "";
    }

    // RePassword
    if (!registerForm.rePassword) {
      error.rePassword = "Bạn cần xác nhận password";
      isValid = false;
    } else if (registerForm.password !== registerForm.rePassword) {
      error.rePassword = "Xác nhận mật khẩu chưa đúng";
      isValid = false;
    } else {
      error.rePassword = "";
    }

    setRegisterError({ ...registerError, ...error });
    if (isValid) {
      setUserList([
        ...userList,
        registerForm,
      ])
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Enter name"
          onChange={(e) => changeRegisterField(e)}
          // value={registerForm.name}
        />
        {registerError.name && (
          <span className="text-danger">{registerError.name}</span>
        )}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          type="text"
          placeholder="Enter email"
          onChange={(e) => changeRegisterField(e)}
          // value={registerForm.email}
        />
        {registerError.email && (
          <span className="text-danger">{registerError.email}</span>
        )}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => changeRegisterField(e)}
          // value={registerForm.password}
        />
        {registerError.password && (
          <span className="text-danger">{registerError.password}</span>
        )}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Re-Password</Form.Label>
        <Form.Control
          name="rePassword"
          type="password"
          placeholder="Re-Password"
          onChange={(e) => changeRegisterField(e)}
          // value={registerForm.rePassword}
        />
        {registerError.rePassword && (
          <span className="text-danger">{registerError.rePassword}</span>
        )}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <Form.Select
          name="gender"
          placeholder="Gender"
          onChange={(e) => changeRegisterField(e)}
          // value={registerForm.gender}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          name="role"
          type="radio"
          label="User"
          value="user"
          onChange={(e) => changeRegisterField(e)}
        />
        <Form.Check
          name="role"
          type="radio"
          label="Admin"
          value="admin"
          onChange={(e) => changeRegisterField(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          name="choice"
          type="checkbox"
          label="Option 1"
          value="1"
          onChange={(e) => changeRegisterField(e)}
        />
        <Form.Check
          name="choice"
          type="checkbox"
          label="Option 2"
          value="2"
          onChange={(e) => changeRegisterField(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          name="isOK"
          type="checkbox"
          label="Đồng ý điều khoản"
          onChange={(e) => changeRegisterField(e)}
        />
      </Form.Group>
      <Button
        type="button"
        variant="primary"
        className="w-100"
        onClick={() => handleSubmitRegister()}
        disabled={!registerForm.isOK}
      >
        Submit
      </Button>
    </Form>
  );
};

export default RegisterFormPage;
