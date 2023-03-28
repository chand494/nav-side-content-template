import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';

const Register = () => {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" fullWidth>
          Register
        </Button>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
