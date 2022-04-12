import React, { useState } from "react";
import './Login.css'
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const Login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
    console.log(email, password);
  };

  if (user) {
    navigate("/");
  }  

  return ( 
      <div className='form-group'>
          <h2 className='text-center text-primary mb-5'>LOGIN</h2>
          <Form>
        <Form.Group onBlur={handleEmail} className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />          
        </Form.Group>

        <Form.Group onBlur={handlePassword} className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button onClick={Login} variant="primary" size="lg">
            Login
          </Button>          
        </div>
      </Form>
      <p>Do you have an account? <Link to='/signup'>Create an account</Link></p>      
      </div> 
      
          
  );
};

export default Login;
