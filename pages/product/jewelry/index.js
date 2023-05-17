import AppPagination from '@/components/pagination';
import ProductCard from '@/components/ProductCard';
import { client } from '@/utils/client';
import { Grid, Pagination } from '@mui/material';
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

  const pageSize = 3;

  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };

  const { loading, error, products } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch('*[_type == "product"]');

        setState({ ...state, products, loading: false });
        setPagination({ ...pagination, count: products.length });
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
            {products.slice(pagination.from, pagination.to).map((product) => (
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
            justifyContent={'center'}
            alignItems="center"
            display={'flex'}
            sx={{ margin: '20px 0px' }}
          >
            <Pagination
              count={Math.ceil(pagination.count / pageSize)}
              onChange={handlePageChange}
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Jewelry;
