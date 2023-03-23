import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  Alert,
  Snackbar,
} from '@mui/material';
import React from 'react';
import { useState } from 'react';

const ContactUs = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fullname, email, phonenumber, message);
    console.log(e);
    setFullname('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
    handleClick();
  };
  return (
    <Box>
      <Card style={{ maxWidth: 450, padding: '20px 5px', margin: '0 auto' }}>
        <CardContent>
          <Typography>Contact Us</Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Fill up the form and our team will get back to you within 24 hours.
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  placeholder="Enter name"
                  label="Name"
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  value={fullname}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="email"
                  placeholder="Enter email"
                  label="Email"
                  variant="outlined"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="tel"
                  placeholder="Enter phone number"
                  label="Phone"
                  variant="outlined"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  value={phonenumber}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Type your message here"
                  variant="outlined"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  value={message}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          You message has been sent!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUs;
