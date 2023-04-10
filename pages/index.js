import Head from 'next/head';

import Button from '@mui/material/Button';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

import HomeCarousel from '@/components/HomeCarousel';
import Footer from '@/components/Footer';
import { Grid } from '@mui/material';
import MapSection from '../components/Map';
import ContactUs from '@/components/ContactUs';
import { useState } from 'react';
import { createClient } from 'next-sanity';

import ProductCard from '@/components/ProductCard';
import NavBar from '@/components/Navbar';

export default function Home({ products }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Head>
        <title>Next Mui Test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <HomeCarousel />
        <Grid
          container
          spacing={1}
          sx={{
            display: 'flex',

            flexWrap: 'wrap',
          }}
        >
          {products.map((product) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={product.slug.current}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            display: 'flex',
            margin: 2,
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button variant="outlined" onClick={handleClickOpen} color="success">
            Contact Us
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogContent>
              <ContactUs />
              <Box display="flex" justifyContent="end">
                <Button
                  onClick={handleClose}
                  color="success"
                  variant="outlined"
                  sx={{ margin: 2 }}
                >
                  Cancel
                </Button>
              </Box>
            </DialogContent>
          </Dialog>
          <Typography variant="h5" paddingBottom={2}>
            Come Visit us!
          </Typography>
          <MapSection />
        </Box>

        <Footer />
      </main>
    </>
  );
}

const client = createClient({
  projectId: 'of3tgqgc',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
});

export async function getStaticProps() {
  const products = await client.fetch(`*[_type == "product"]`);

  return {
    props: {
      products,
    },
  };
}
