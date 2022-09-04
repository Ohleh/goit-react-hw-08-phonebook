import { useState } from 'react';
import { useRegisterMutation } from '../redux/userApi';
import { Button, TextField, Grid, Container, FormControl } from '@mui/material';

const classes = {
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  submit: {
    margin: '5px',
  },
  formControl: {
    minWidth: '100%',
    marginTop: '2vh',
  },
  buttonsWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '60%',
  },
  authNavigateText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'blue',
  },
};

export const Register = () => {
  const [register, status] = useRegisterMutation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isRegister, setIsRegister] = useState(true); // button toggle

  const handleChangName = e => setName(e.target.value);
  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);

  const { isLoading } = status;

  const onRegisterHandleSubmit = e => {
    const credentials = { email, password, name };
    e.preventDefault();
    register(credentials);
  };

  return (
    <>
      <Container component="main" maxWidth="xs" style={classes.paper}>
        {/* <h1>{isRegister ? 'REGISTER' : 'LOGIN'}</h1>
          {errorMessage && <p>{errorMessage}</p>} */}

        <Grid item xs={12}>
          <FormControl variant="outlined" style={classes.formControl}>
            <TextField
              // autoComplete={email || 'Email'}
              name="email"
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email"
              value={email}
              onChange={handleChangeEmail}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined" style={classes.formControl}>
            <TextField
              // autoComplete={name || 'DisplayName'}
              name="Name"
              variant="outlined"
              required
              fullWidth
              id="Name"
              label="Name"
              value={name}
              onChange={handleChangName}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined" style={classes.formControl}>
            <TextField
              // autoComplete={password || 'Password'}
              name="password"
              variant="outlined"
              required
              fullWidth
              id="password"
              label="Password"
              value={password}
              onChange={handleChangePassword}
            />
          </FormControl>
        </Grid>
        <div className={classes.buttonsWrapper}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={classes.submit}
            disabled={isLoading}
            onClick={onRegisterHandleSubmit}
          >
            {/* {isRegister ? 'REGISTER' : 'LOGIN'} */}
            REGISTER
          </Button>

          {/* <div
            className={classes.authNavigateText}
            onClick={() => setIsRegister(!isRegister)}
          >
            <p>{isRegister ? 'go login >>' : 'go register >>'}</p>
          </div> */}
        </div>
      </Container>
    </>
  );
};
