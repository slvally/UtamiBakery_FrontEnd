import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Divider } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import Slide from '@mui/material/Slide';

import Logo from '../../assets/images/logo.png';

const pages = ['Beranda', 'Katalog', 'Blog', 'Company'];
const routes = ['', 'catalog', 'blog', 'company'];

function HideOnScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
};

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [activeMenu, setactiveMenu] = React.useState(0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setactiveMenu(1);
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={{
          // bgcolor: '#ba526f',
          backgroundImage: 'linear-gradient(to right bottom, #CF69F1, #fff)',

        }}
      >
        <Container
          maxWidth="xl"
        >
          <Toolbar disableGutters>
            <img src={Logo} alt="utamibakery-logo" width="auto" height="50px" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              color="#662577"
              href="/"
              sx={{
                mr: 0,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.1rem',
                textDecoration: 'none',
              }}
            >
              Utami Bakery
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="black">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{
              flexGrow: 1,
              display: {
                xs: 'none', md: 'flex', justifyContent: 'center', columnGap: '30px',
              },
            }}
            >
              {pages.map((page, index) => (
                <Button
                  key={page}
                  onClick={() => navigate(`/${routes[index]}`)}
                  sx={{
                    my: 2, display: 'block', color: index === activeMenu ? 'primary' : '#666666', fontWeight: 'bold',
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{
              flexGrow: 0, flexDirection: 'row', columnGap: '10px', display: 'flex', alignItems: 'center',
            }}
            >
              <IconButton>
                <ShoppingCartIcon color="secondary" />

              </IconButton>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Button variant="outlined" sx={{ color: 'primary', height: '30px' }}>Masuk</Button>
              <Button variant="contained" sx={{ color: 'primary', height: '30px' }}>Daftar</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

export default NavBar;
