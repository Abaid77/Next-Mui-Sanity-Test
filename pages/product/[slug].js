import React, { useState } from 'react';
import { client } from '@/utils/client';

import { Grid, Typography, Box, Button } from '@mui/material';

import { Link } from '@mui/material';

import NextLink from 'next/link';
import ProductCarousel from '@/components/ProductCarousel';
import ProductCard from '@/components/ProductCard';

const ProductDetails = ({ product, products }) => {
  const [randomArrayIndex, setRandomArrayIndex] = useState();
  return (
    <>
      {/* <NextSeo
        title={`${product.brand} ${product.name}| Maggie's Diamond Boutique`}
        description={`${product.description}`}
        canonical={`https://maggiesdiamond.com/product/jewelry/${product.slug.current}`}
        openGraph={{
          type: 'website',
          url: `https://maggiesdiamond.com/product/jewelry/${product.slug.current}`,
          title: `${product.brand} ${product.name}| Maggie's Diamond Boutique`,
          description: `${product.description}`,
          images: [
            {
              url: `${urlFor(product.image[0])}`,
              width: 2700,
              height: 2250,
              alt: `Maggie's Diamond Boutique - ${product.name}`,
            },
          ],
        }}
      /> */}
      <Box padding={5}>
        <Grid
          container
          spacing={1}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 4,
          }}
        >
          <Grid item md={6} xs={12}>
            <ProductCarousel images={product.image} />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h4" variant="h5" align="center" gutterBottom>
              {product.name}
            </Typography>

            <Typography variant="body2" align="justify" gutterBottom>
              Description: {product.description}
            </Typography>

            <Typography variant="body1" gutterBottom paddingBottom={3}>
              Price:
              {product.price ? product.price : ' Contact for pricing'}
            </Typography>

            <Link
              href={`mailto:sales@maggiesdiamonds.com?subject=Info on ${product.name} Model #: ${product.model}}`}
              underline="none"
            >
              <Button variant="contained" color="success">
                Request Info
              </Button>
            </Link>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Specs:
            </Typography>
            <Typography variant="body2" gutterBottom>
              Metal: {product.metal}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Diamond: {product.diamond ? product.diamond : 'N/A'}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Model #: {product.model}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Brand: {product.brand}
            </Typography>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="center">
          <Typography variant="h5">Other items you might like:</Typography>
        </Box>

        <Grid
          container
          spacing={1}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {products
            .slice(randomArrayIndex, randomArrayIndex + 3)
            .map((product) => (
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
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 3,
          }}
        >
          <Link
            component={NextLink}
            href="/product/jewelry"
            style={{
              textDecoration: 'none',
              color: '#ffb302',
              marginTop: '20px',
            }}
          >
            <Button variant="outlined" color="success" style={{ margin: 10 }}>
              Back to All Jewelry
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
