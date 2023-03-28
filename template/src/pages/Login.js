import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { initHistory, setHistory } from '../utilities/historyHandler';

const Login = () => {
    const history = useNavigate()
    initHistory(history)
  return (
    <div>
      <h2>Login</h2>
      <form>
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <Button variant="contained" color="primary" fullWidth onClick={()=>alert('Need to Implement Login Logic here !!')}>
          Login
        </Button>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
