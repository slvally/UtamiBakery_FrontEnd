import React, { useState } from 'react';
import {
  useNavigate,
} from 'react-router-dom';

import {
  AppBar, Box, styled, Toolbar, Typography, IconButton, Badge, Avatar, Menu, MenuItem, Button,
  Divider,
} from '@mui/material';
import { Pets, Mail, ShoppingCart } from '@mui/icons-material/';

import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import AvatarImage from '../assets/images/avatar.png';
import Logo from '../assets/images/logo.png';

// Styled
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  height: '65px',
  alignItems: 'center',
});
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'brown',
  background: 'none',
  boxShadow: 'none',
}));
const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  cursor: 'pointer',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
  color: 'grey',
}));
const UserBox = styled(Box)(({ theme }) => ({
  color: 'grey',
  cursor: 'pointer',
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

// Navbar
const Navbar = () => {
  // RouterDOM
  const navigate = useNavigate();

  // Navigation
  const pages = ['Beranda', 'Catalog', 'Blog', 'About Us'];
  const routes = ['', 'catalog', 'blog', 'company'];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [open, setOpen] = useState(false);

  const userLoggedIn = JSON.parse(window.localStorage.getItem('userLoggedIn'));
  return (

    <>
      <StyledAppBar
        position="static"
        sx={{
          background: 'rgba(255, 255, 255, 0.25)',
          // boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(10px)',
          webkitBackdropFilter: 'blur(10px)',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        }}
      >
        <StyledToolbar>

          {/* Logo hidden when xs and block when sm */}
          <Box sx={{
            display: 'flex',
            // height: '50px',
            alignItems: 'center',
          }}
          >
            {/* <img src={Logo} alt="utamibakery-logo" height="10px" /> */}
            <Typography variant="h5" fontWeight="bold" sx={{ display: { xs: 'none', sm: 'block' }, color: '#662577' }}>UtamiBakery</Typography>
          </Box>
          {/* Icon block when xs and hidden when sm */}
          <Pets sx={{
            display: { xs: 'block', sm: 'none' }, width: 40, height: 40, color: 'grey',
          }}
          />
          {/* NavMenu turn to button when xs and flex when md */}
          <Box sx={{
            flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', gap: '8px',
          }}
          >
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={() => {
                  if (page === 'Beranda') {
                    navigate('/');
                  } else {
                    navigate(`/${routes[index]}`)
                  }
                }}
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  '&:hover': {
                    color: 'black',
                    // backgroundColor: 'grey',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* Pages Button when xs */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {
            userLoggedIn !== null ? (
              <Box>
                <Icons>
                  <IconButton aria-label="cart" href="/carts">
                    <StyledBadge badgeContent={userLoggedIn.cart.length} color="error">
                      <ShoppingCart style={{ color: '#917FB3' }} />
                    </StyledBadge>
                  </IconButton>
                  <Avatar style={{ cursor: 'pointer', backgroundColor: '#2A2F4F' }} onClick={(e) => setOpen(true)}>
                    <img src={AvatarImage} alt="avatar" />
                  </Avatar>
                </Icons>

                <UserBox onClick={(e) => setOpen(true)}>
                  <Avatar style={{ cursor: 'pointer', backgroundColor: '#2A2F4F' }} onClick={(e) => setOpen(true)}>
                    <img src={AvatarImage} alt="avatar" />
                  </Avatar>
                  <Typography variant="span">{userLoggedIn.name}</Typography>
                </UserBox>
              </Box>
            )
              : (
                <Box sx={{
                  flexGrow: 0, flexDirection: 'row', columnGap: '10px', display: 'flex', alignItems: 'center',
                }}
                >
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Button variant="outlined" href="/signin" sx={{ color: '#662577', height: '30px', borderColor: '#662577' }}>Masuk</Button>
                  <Button variant="contained" href="/signup" sx={{ color: 'secondary', height: '30px', backgroundColor: '#662577' }}>Daftar</Button>
                </Box>
              )
          }

        </StyledToolbar>

        {anchorElNav && (
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page, index) => (
              <MenuItem key={page} onClick={() => navigate(`/${routes[index]}`)}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        )}
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={() => navigate('/profile')}>My account</MenuItem>
          <MenuItem onClick={() => {
            window.localStorage.removeItem('userLoggedIn');
            window.location.href = '/';
          }}
          >
            Logout

          </MenuItem>
        </Menu>

      </StyledAppBar>
    </>
  );
};

export default Navbar;
