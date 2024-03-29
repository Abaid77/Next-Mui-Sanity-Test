import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button, Grid, useMediaQuery } from '@mui/material';
import { PhoneEnabled } from '@mui/icons-material';
import Link from 'next/link';
import MenuDrawer from './MenuDrawer';
import Image from 'next/image';

export default function NavBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [phoneNumber, setPhoneNumber] = React.useState(null);
  const [menu, setMenu] = React.useState(null);

  const hideInMobileMode = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const handleAnchorEl = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.currentTarget);
  };

  const anchorElOnClose = () => {
    setAnchorEl(null);
  };
  const phoneNumberOnClose = () => {
    setPhoneNumber(null);
  };
  const menuOnClose = () => {
    setMenu(null);
  };

  const maggiesLogo = () => {
    return (
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Image
          src="/static/maggies-logo.png"
          alt="logo"
          width="210"
          height="70"
        ></Image>
      </Link>
    );
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '64px' }}>
      <AppBar position="fixed">
        <Toolbar>
          {hideInMobileMode ? maggiesLogo() : <MenuDrawer />}

          <Box sx={{ flexGrow: 1 }}>
            {!hideInMobileMode ? (
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item>{maggiesLogo()}</Grid>
              </Grid>
            ) : (
              <>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Link
                    href="/"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Button color="inherit">Home</Button>
                  </Link>
                  &#124;
                  <Link
                    href="/watches"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Button color="inherit">Watches</Button>
                  </Link>
                  &#124;
                  <Link
                    href="/product/jewelry"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Button color="inherit">Jewelry</Button>
                  </Link>
                  &#124;
                  <Link
                    href="/about"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Button color="inherit">About Us</Button>
                  </Link>
                  &#124;
                  <Link
                    href="/contact"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Button color="inherit">Contact Us</Button>
                  </Link>
                  &#124;
                  <a
                    href="/reviews"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button color="inherit">Reviews</Button>
                  </a>
                  &#124;
                  <a
                    href="/news"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button color="inherit">News</Button>
                  </a>
                </Box>
              </>
            )}
          </Box>
          {auth && (
            <div>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handlePhoneNumber}
                color="inherit"
              >
                <PhoneEnabled />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(phoneNumber)}
                onClose={phoneNumberOnClose}
              >
                <MenuItem onClick={phoneNumberOnClose}>403-692-3248</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
