import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");  

  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading    
  ] = useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate("/login");    
  } 
  
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
    console.log(user);
    if (password === confirmPassword) {
      setError("Passwords Matched")
    } else {
      setError("Passwords do not match")
      return;
    }
  };
  
  if (loading) {
    return <p>Loading...</p>;
  }  
 


  return (
    <div className="form-group">
      <h2 className="text-center text-primary mb-5">SIGN UP</h2>
      <Form>
        <Form.Group onBlur={handleName} className="mb-3" controlId="formBasicName" required>
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" />          
        </Form.Group>

        <Form.Group onBlur={handleEmail} className="mb-3" controlId="formBasicEmail" required>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />          
        </Form.Group>

        <Form.Group onBlur={handlePassword} className="mb-3" controlId="formBasicPassword" required>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>       

        <Form.Group onBlur={handleConfirmPassword} className="mb-3" controlId="formBasicPassword" required>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button onClick={handleSubmit} variant="primary" size="lg">
            Sign Up
          </Button>          
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
