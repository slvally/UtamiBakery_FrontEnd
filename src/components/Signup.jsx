import CssBaseline from '@mui/material/CssBaseline';
import React, { useState } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  InputAdornment,
  Link,
  TextField,
  Backdrop,
  CircularProgress,
  Typography,
  Alert,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIcon from '@mui/icons-material/Phone';
import CheckIcon from '@mui/icons-material/Check';

import './Signup.css';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'managed by '}
      <Link color="inherit" href="https://mui.com/">
        UtamiBakery
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#662577',
      darker: '#DFDFDF',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

export default function SignUp() {
  const [isFailed, setIsFailed] = useState(false);
  const [failedMessage, setFailedMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('firstName').concat(' ', data.get('lastName'));
    const password = data.get('password');
    const confirm = data.get('confirm');
    if (password !== confirm) {
      setIsFailed(true);
      setFailedMessage('Password tidak sesuai.');
      setIsLoading(false);
      return;
    }
    try {
      await axios.post('https://utamibakery-backend.vercel.app/authentication/signup', {
        name,
        telephone: data.get('telephone'),
        password: data.get('password'),
        confPassword: confirm,
      }).then((response) => {
        localStorage.setItem('userLoggedIn', JSON.stringify(response.data.data.user));
        // Navigate to root page on successful form submission
        navigate('/');
      });
    } catch (error) {
      if (error.response) {
        setIsFailed(true);
        setIsLoading(false);
        if (error.response) {
          setFailedMessage(error.response.data.message);
          console.log(error.response.data);
        }
      }
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          border: '1px solid #F0F0F0',
          borderRadius: '8px',
          marginTop: '75px',
          padding: '20px 32px',
          boxSizing: 'border-box',
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            mt: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                  required
                  fullWidth
                  id="telephone"
                  name="telephone"
                  type="number"
                  label="Telephone"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    min: 0,
                    max: 99999999999,
                    pattern: '[0-9]*',
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CheckIcon />
                      </InputAdornment>
                    ),
                  }}
                  required
                  fullWidth
                  name="confirm"
                  label="Confirm Password"
                  type="password"
                  id="confirm"
                />
              </Grid>
            </Grid>
            {
              isFailed && <Alert severity="error">{failedMessage}</Alert>
            }
            {
              isLoading === false
                ? (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                )
                : (
                  <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={isLoading}
                    // onClick={handleClose}
                  >
                    <CircularProgress color="inherit" />
                  </Backdrop>
                )
            }

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
