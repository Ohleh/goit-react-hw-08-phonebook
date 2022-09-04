import { useState } from 'react';
import { useRegisterMutation } from '../redux/userApi';
import { Button, TextField, Grid, Container, FormControl } from '@mui/material';

export const Register = () => {
  const [register, status] = useRegisterMutation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangName = e => setName(e.target.value);
  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);

  const { isLoading } = status;

  const handleSubmit = e => {
    const credentials = { email, password, name };

    e.preventDefault();

    register(credentials);
    // console.log('credentials', credentials);
  };

  return (
    <>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label>
            <span> Name</span>
            <input type="text" value={name} onChange={handleChangName}></input>
          </label>

          <label>
            <span> Email</span>
            <input
              type="email"
              value={email}
              onChange={handleChangeEmail}
            ></input>
          </label>

          <label>
            <span> Password</span>
            <input
              type="text"
              value={password}
              onChange={handleChangePassword}
            ></input>
          </label>

          <button type="submit" disabled={isLoading}>
            Login
          </button>
        </form>
      </fieldset>
    </>
  );
};
