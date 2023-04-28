import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useState } from "react";

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const handleRegister = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
    .then(result=>{
      const createdUser = result.user;
      console.log(createdUser);
    })
    .catch(error=>{
      console.error(error);
    })
  }
  const handleTerms=event=>{
    setAccepted(event.target.checked);
  }
  return (
    <Container className="w-50 mx-auto">
      <Form onSubmit={handleRegister}>
        <Form.Text className="fs-4 text-black fw-bold d-block text-center mb-5">
          Register your account
        </Form.Text>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Enter your photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleTerms}
            type="checkbox"
            label={<>Accept <Link to='/terms'>Terms & conditions</Link></>}
          />
        </Form.Group>
        <Button className="w-100" disabled={!accepted} type="submit" variant="primary">
          Register
        </Button>
        <Form.Text className="d-block text-center mb-5">
          Already have an account?{" "}
          <Link className="text-danger" to="/login">
            Login
          </Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
