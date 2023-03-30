import client, { urlFor } from '@/utils/client';
import { useState } from 'react';
import {
  Alert,
  CircularProgress,
  Grid,
  Typography,
  List,
  ListItem,
  Card,
  Button,
} from '@mui/material';
import { Box, margin } from '@mui/system';
import Image from 'next/image';
import { useEffect } from 'react';
import { Link } from '@mui/material';

import NextLink from 'next/link';
import ProductCarousel from '@/components/ProductCarousel';
import ProductCard from '@/components/ProductCard';

export default function ProductScreen(props) {
  const { slug } = props;
  const [state, setState] = useState({
    product: null,
    products: null,
    loading: true,
    error: '',
  });

  const { product, loading, error, products } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await client.fetch(
          `
            *[_type == "product" && slug.current == $slug][0]`,
          { slug }
        );
        const products = await client.fetch('*[_type == "product"]');

        setState({ ...state, product, products, loading: false });
      } catch (err) {
        setState({ ...state, error: err.message, loading: false });
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="error">{error}</Alert>
      ) : (
        <Box padding={5}>
          <Grid
            container
            spacing={1}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {/* <Grid item>
              <Box sx={{ margin: 1 }}>
                <Link component={NextLink} href="/" passHref>
                  <Typography color="secondary">back to home</Typography>
                </Link>
              </Box>
            </Grid> */}
            <Grid item md={6} xs={12} lg={4}>
              {/* <Box
                src={urlFor(product.image[0])}
                alt={product.name}
                component="img"
                sx={{
                  height: 650,
                  width: 650,
                  maxHeight: { xs: 350, md: 500 },
                  maxWidth: { xs: 350, md: 500 },
                }}
              /> */}
              <ProductCarousel images={product.image} />
            </Grid>
            <Grid item md={6} xs={12} lg={4}>
              <List>
                <ListItem>
                  <Typography component="h3" variant="h3">
                    {product.name}
                  </Typography>
                </ListItem>

                <ListItem>
                  <Typography>Description: {product.description}</Typography>
                </ListItem>
                <ListItem>
                  <Typography>Price: ${product.price}</Typography>
                </ListItem>
              </List>
            </Grid>
            {/* <Grid item md={6} xs={12}>
              <Card>
                <List>
                  <ListItem>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography>Price</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>${product.price}</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>

                  <ListItem>
                    <Button fullWidth variant="contained">
                      Request more info
                    </Button>
                  </ListItem>
                </List>
              </Card>
            </Grid> */}
          </Grid>
          <Box display="flex" justifyContent="center">
            <Typography variant="h5">Other items you might like:</Typography>
          </Box>

          <Grid
            container
            display="flex"
            spacing={5}
            justifyContent="center"
            alignContent="center"
            justifyItems="center"
            padding={2}
          >
            {products.map((product) => (
              <Grid item xs={12} md={6} lg={4} key={product.slug.current}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
}

export function getServerSideProps(context) {
  return {
    props: { slug: context.params.slug },
  };
}

// export const getStaticPaths = async () => {
//   const query = `*[_type == "product"] { slug  { current }}`;

//   const products = await client.fetch(query);

//   const paths = products.map((product) => ({
//     params: {
//       slug: product.slug.current,
//     },
//   }));
//   return {
//     paths,
//     fallback: 'blocking',
//   };
// };

// export const getStaticProps = async ({ params: { slug } }) => {
//   const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
//   const productsQuery = '*[_type == "product"]';
//   const product = await client.fetch(query);
//   const products = await client.fetch(productsQuery);

//   const bannerQuery = '*[_type == "banner"]';
//   const bannerData = await client.fetch(bannerQuery);

//   return {
//     props: { products, product },
//   };
// };
