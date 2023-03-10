import { AppBar, Typography, Box, Grid } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';

import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from '@mui/material';

import React from 'react';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" sx={{ marginTop: '24px' }}>
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          spacing={2}
        >
          <Grid item xs={12} md={4} justifyContent="center">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                paddingBottom: '10px',
              }}
            >
              <Typography variant="h6" color="inherit" p={2}>
                Contact Us
              </Typography>
              <Typography variant="h7" fontWeight="bold" color="inherit">
                Maggies Diamond Boutique <br />
              </Typography>
              <Typography variant="h7" fontWeight="light" color="inherit">
                <Link
                  href="https://www.google.com/maps/place/Maggie's+Diamond+Boutique/@50.9993165,-114.0764286,17z/data=!3m1!4b1!4m6!3m5!1s0x537170ff120e74b1:0x76bd3eba6efb26d!8m2!3d50.9993165!4d-114.0742399!16s%2Fg%2F1tknk393"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  target="to_blank"
                >
                  6455 Macleod Trail SW,
                  <br />
                  Calgary, Alberta, T2H 0K8
                  <br />
                </Link>
                <br />
                Phone: 1-403-692-3248
              </Typography>
            </Box>
            <Grid
              item
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Link
                href="https://www.facebook.com/people/Maggies-Diamond-Boutique/100054383326368/"
                style={{ textDecoration: 'none', color: 'inherit' }}
                target="to_blank"
              >
                <FacebookIcon fontSize="large" className="social-icons" />
              </Link>
              <Link
                href="https://www.instagram.com/maggies_diamonds/?hl=en"
                style={{ textDecoration: 'none', color: 'inherit' }}
                target="to_blank"
              >
                <InstagramIcon fontSize="large" className="social-icons" />
              </Link>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box sx={{}}>
              <Typography variant="h6" color="inherit" p={2}>
                Business Hours
              </Typography>
              <table>
                <tbody>
                  <tr>
                    <td>Monday</td>
                    <td>10:00AM - 8:00PM</td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td>10:00AM - 8:00PM</td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td>10:00AM - 8:00PM</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td>10:00AM - 8:00PM</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>10:00AM - 8:00PM</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>10:00AM - 8:00PM</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>11:00AM - 6:00PM</td>
                  </tr>
                </tbody>
              </table>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6" color="inherit" p={2}>
              Helpful Links
            </Typography>

            <Grid container item justifyContent="center">
              <Grid item alignItems="flex-start">
                <ul className="footer-link-list">
                  <li>
                    <Link
                      href="/"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/watches"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      Watches
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/jewlery"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      Jewelry
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      Reviews
                    </Link>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}
