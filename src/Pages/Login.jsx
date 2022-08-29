import { useState } from 'react';
import { useLoginMutation } from '../redux/userApi';

export const Login = () => {
  const [login, status] = useLoginMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);

  const handleSubmit = e => {
    const credentials = { email, password };

    e.preventDefault();

    // console.log('credentials', credentials);
    login(credentials);
  };

  return (
    <>
      <fieldset>
        <form onSubmit={handleSubmit}>
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

          <button type="submit">Login</button>
        </form>
      </fieldset>
    </>
  );
};

// https://connections-api.herokuapp.com/users/login
