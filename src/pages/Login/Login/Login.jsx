import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || '/category/0';
  const handleSignIn=event=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, {replace: true});
    })
    .catch(error=>{
      console.error(error);
    })
  }
  return (
    <Container>
      <Form onSubmit={handleSignIn} className="w-50 mx-auto">
      <Form.Text className="fs-4 text-black fw-bold d-block text-center mb-5">
            Login your account
          </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Button className="w-100" type="submit" variant="primary">
          Login
        </Button>
        <Form.Text className="d-block text-center mb-5">
            Don't have an account? <Link className="text-danger" to='/register'>Register</Link>
          </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
