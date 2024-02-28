import React from 'react';
import keysat_logo from '../../src/images/KEYSAT_red.png';
import keyin_logo from '../../src/images/Keyin_logo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../auth/auth';
import axios from 'axios';

function LoginPage() {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const auth = useAuth();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name.toString()]: [e.target.value] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // const response =  {
      //   authorization: "Basic c3VwZXJ1c2VyMjpwYXNzd29yZA==",
      //   roles: ["ROLE_ADMIN", "ROLE_INSTUCTOR"],
      //   message: "Logged in successfully.",
      // };
      const response = await auth.login(data.username, data.password);
      const authHeader = response.authorization;
      const roles = JSON.stringify(response.roles);
      localStorage.setItem('auth', authHeader); // Store the token
      localStorage.setItem('roles', roles);

      onLoginSuccess();
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const onLoginSuccess = () => {
    const authRoles = JSON.parse(localStorage.getItem('roles'));
    if (authRoles.includes('ROLE_ADMIN')) {
      navigate('/admin-dashboard');
    } else if (authRoles.includes('ROLE_INSTRUCTOR')) {
      navigate('/instructor-dashboard');
    } else if (authRoles.includes('ROLE_STUDENT')) {
      navigate('/student-dashboard');
    }
  };

  return (
    <div id='log_in'>
      <div className='card'>
        <img
          className='Stat'
          src={keysat_logo}
          alt=''
          width='240px'
        ></img>
        <h3 className='PSign'>Please sign in with your Keyin account</h3>
        <form onSubmit={handleSubmit}>
          <div className='email-password'>
            <div>
              <input
                className='email'
                type='text'
                name='username'
                value={data.username}
                placeholder='Username'
                onChange={changeHandler}
              />
            </div>
            {/* <break></break> */}
            <div>
              <input
                className='password'
                type='password'
                placeholder='Password'
                name='password'
                value={data.password}
                onChange={changeHandler}
              />
            </div>
          </div>
          <button id='login_btn'>Sign In</button>
        </form>
      </div>
      <p className='Power'>Powered By</p>
      <img
        src={keyin_logo}
        alt='Keyin Logo'
        width='140px'
      ></img>
    </div>
  );
}

export default LoginPage;
