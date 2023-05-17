import AppPagination from '@/components/pagination';
import ProductCard from '@/components/ProductCard';
import { client } from '@/utils/client';
import { Grid } from '@mui/material';
import { Alert, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Jewelry = () => {
  const [state, setState] = useState({
    products: [],
    loading: true,
    error: '',
  });

  const { loading, error, products } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch('*[_type == "product"]');

        setState({ ...state, products, loading: false });
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
          <AppPagination />
        </Box>
      )}
    </>
  );
};

export default Jewelry;
