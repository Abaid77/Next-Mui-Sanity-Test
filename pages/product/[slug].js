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

export default function ProductScreen(props) {
  const { slug } = props;
  const [state, setState] = useState({
    product: null,
    loading: true,
    error: '',
  });

  const { product, loading, error } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await client.fetch(
          `
            *[_type == "product" && slug.current == $slug][0]`,
          { slug }
        );

        setState({ ...state, product, loading: false });
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
        <Box>
          <Grid
            container
            spacing={1}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Grid item>
              <Box sx={{ margin: 1 }}>
                <Link component={NextLink} href="/" passHref>
                  <Typography color="secondary">back to home</Typography>
                </Link>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box
                src={urlFor(product.image[0])}
                alt={product.name}
                component="img"
                sx={{
                  height: 650,
                  width: 650,
                  maxHeight: { xs: 350, md: 500 },
                  maxWidth: { xs: 350, md: 500 },
                }}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <List>
                <ListItem>
                  <Typography component="h2" variant="h2">
                    {product.name}
                  </Typography>
                </ListItem>

                <ListItem>
                  <Typography>Description: {product.description}</Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={6} xs={12}>
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
            </Grid>
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
