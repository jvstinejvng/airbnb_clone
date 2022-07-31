import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './LoginForm.css'

function LoginForm({ onClose }) {
  const dispatch = useDispatch();
  const [email, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ email, password })).catch(
        async (res) => {
            const data = await res.json();
            if (data) setErrors(data);
        }
    );
    };


  const DemoUserLogin = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({
        email: 'demo@demo.io',
        password: 'password',
    }))
        .catch(
            async (res) => {
                const data = await res.json();
                if (data) setErrors(data);
            }
    );
  }



  return (
    <div className='formPage'>
    <form onSubmit={handleSubmit} className='loginFormBox'>
      <div>
        <h2>Petbnb Log in</h2>
      </div>
      <ul>
        {errors.message}
      </ul>
      <div className='userInputField'>
      <label>
        Email
        <input
          id='input'
          type="text"
          value={email}
          onChange={(e) => setCredential(e.target.value)}
          required
          />
      </label>
      </div>

      <div className='userInputField'>
      Password
      <label>
        <input
          id='input'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      </div>
      <div>
      <button className='loginFormButton' type="submit">Continue</button>
      </div>
      <div>
      <button className="DemoButton" onClick={DemoUserLogin}>Demo User</button>
      </div>
    </form>
    </div>
  );
}

export default LoginForm;
