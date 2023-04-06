import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  useMediaQuery,
} from '@mui/material';
import { PhoneEnabled } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import MenuDrawer from './MenuDrawer';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Watches', path: '/product' },
  { title: 'Jewelry', path: '/product' },
  { title: 'Services', path: '/services' },
  { title: 'About Us', path: '/about' },
  { title: 'Contact Us', path: '/contact' },
  { title: 'Reviews', path: '/reviews', target: '_blank', rel: 'noreferrer' },
];

export default function NavBar2() {
  const [phoneNumberAnchorEl, setPhoneNumberAnchorEl] = React.useState(null);
  const [phoneNumber, setPhoneNumber] = React.useState(null);
  const hideInMobileMode = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const handlePhoneNumberClick = (event) => {
    setPhoneNumberAnchorEl(event.currentTarget);
  };

  const handlePhoneNumberClose = () => {
    setPhoneNumberAnchorEl(null);
  };

  const renderNavLinks = () => {
    return (
      <>
        {navLinks.map((link) => (
          <Link key={link.title} href={link.path} passHref>
            <Button
              color="inherit"
              component="a"
              target={link.target}
              rel={link.rel}
            >
              {link.title}
            </Button>
          </Link>
        ))}
      </>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {hideInMobileMode ? (
            <Link href="/" passHref>
              <IconButton component="a">
                <Image
                  src="/static/maggies-logo.png"
                  alt="logo"
                  width="152"
                  height="80"
                  priority
                />
              </IconButton>
            </Link>
          ) : (
            <MenuDrawer />
          )}

          <Box sx={{ flexGrow: 1 }}>
            {!hideInMobileMode && (
              <Link href="/" passHref>
                <IconButton component="a">
                  <Image
                    src="/static/maggies-logo.png"
                    alt="logo"
                    width="152"
                    height="80"
                    priority
                  />
                </IconButton>
              </Link>
            )}

            {renderNavLinks()}
          </Box>

          <IconButton
            size="small"
            aria-label="phone number"
            aria-controls="menu-phone-number"
            aria-haspopup="true"
            onClick={handlePhoneNumberClick}
            color="inherit"
          >
            <PhoneEnabled />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={phoneNumberAnchorEl}
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
            onClose={handlePhoneNumberClose}
          >
            <MenuItem onClick={handlePhoneNumberClose}>
              <a href="tel:4036923248">403-692-3248</a>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
