import { Grid, Typography } from '@mui/material';

const About = () => {
  return (
    <div className="about-container">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <div className="about-image">
            <img src="/static/store.jpeg"></img>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat.
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
// <Typography variant="h5" padding={4}>
//   Welcome to Maggie's Diamond Boutique, a family-owned jewelry store
//   that has been serving the community for over 14 years. At our
//   boutique, we offer a wide range of exquisite diamond jewelry that is
//   carefully selected and crafted to meet the highest standards of
//   quality and elegance. Whether you are looking for a stunning
//   engagement ring, a beautiful pendant, or a pair of sparkling
//   earrings, we have something to suit every taste and occasion. Our
//   team of experienced and knowledgeable staff are dedicated to
//   providing the highest level of customer service and ensuring that
//   every visit to our store is an enjoyable and memorable experience.
//   We take pride in our attention to detail and are committed to
//   helping you find the perfect piece of jewelry that reflects your
//   unique style and personality. As a family-owned business, we
//   understand the importance of building lasting relationships with our
//   customers. We believe that every piece of jewelry tells a story, and
//   we are honored to be a part of our customers' most precious moments.
//   Thank you for choosing Maggie's Diamond Boutique, and we look
//   forward to serving you for many years to come.
// </Typography>
