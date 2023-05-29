import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  useNavigate,
} from 'react-router-dom';
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
  ThemeProvider,
  Typography,
  createTheme,
  CssBaseline,
  CircularProgress,
  Backdrop,
  Alert,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
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

export default function SignIn() {
  const [isFailed, setIsFailed] = useState(false);
  const [failedMessage, setFailedMessage] = useState('');

  // RouterDOM
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      
      await axios.post('https://utamibakery-backend.vercel.app/authentication/signin', {
        telephone: data.get('telephone'),
        password: data.get('password'),
      }).then((response) => {
        console.log(response);
        localStorage.setItem('userLoggedIn', JSON.stringify(response.data.data.user));
        // Navigate to root page on successful form submission
        navigate('/');
      });
    } catch (error) {
      setIsFailed(true);
      setIsLoading(false);
      if (error.response) {
        setFailedMessage(error.response.data.message);
        console.log(error.response.data);
      }
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userLoggedIn = JSON.parse(window.localStorage.getItem('userLoggedIn'));
    if (userLoggedIn !== null) {
      window.location.href = '/';
    }
    setIsLoading(!isLoading);
  }, []);

  return (

    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          border: '1px solid #F0F0F0',
          borderRadius: '8px',
          marginTop: '100px',
          padding: '20px 32px',
          boxSizing: 'border-box',
        }}
      >
        <CssBaseline />
        <Box sx={{
          marginTop: '18px', display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
              margin="normal"
              required
              fullWidth
              id="telephone"
              label="Telephone Number"
              name="telephone"
              autoComplete="telephone"
              autoFocus
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {
              isFailed && <Alert severity="error">{failedMessage}</Alert>
            }
            {
              isLoading === false
                ? (
                  <Button style={{ backgroundColor: 'primary' }} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Sign In
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
            <Button
              onClick={() => navigate('/')}
              fullWidth
              sx={{
                mb: 2,
                ':hover': {
                  bgcolor: 'primary.darker',
                  color: 'primary.main',
                },
              }}
            >
              Cancel
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{ color: 'primary' }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2" style={{ color: 'primary' }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>

  );
}
