import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

function LoginService() {

    const API_URL = "http://localhost:8080/users";

    const getUsers = () => {
        axios.get(API_URL)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => console.error(error))
    }
    
  return (
    <div>
      <h1>Login Service</h1>
      <Button variant='contained' onClick={getUsers}>Get Users</Button>
    </div>
  )
}

export default LoginService;