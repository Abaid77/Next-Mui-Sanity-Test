import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const About = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3">About us</Typography>
        <Box>
          <Typography variant="h5" padding={4}>
            Welcome to Maggie's Diamond Boutique, a family-owned jewelry store
            that has been serving the community for over 14 years. At our
            boutique, we offer a wide range of exquisite diamond jewelry that is
            carefully selected and crafted to meet the highest standards of
            quality and elegance. Whether you are looking for a stunning
            engagement ring, a beautiful pendant, or a pair of sparkling
            earrings, we have something to suit every taste and occasion. Our
            team of experienced and knowledgeable staff are dedicated to
            providing the highest level of customer service and ensuring that
            every visit to our store is an enjoyable and memorable experience.
            We take pride in our attention to detail and are committed to
            helping you find the perfect piece of jewelry that reflects your
            unique style and personality. As a family-owned business, we
            understand the importance of building lasting relationships with our
            customers. We believe that every piece of jewelry tells a story, and
            we are honored to be a part of our customers' most precious moments.
            Thank you for choosing Maggie's Diamond Boutique, and we look
            forward to serving you for many years to come.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default About;
