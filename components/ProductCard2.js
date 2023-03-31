import { urlFor } from '@/utils/client';
import {
  Button,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
  IconButton,
} from '@mui/material';
import { Link } from '@mui/material';
import React from 'react';
import NextLink from 'next/link';
import { AddShoppingCart } from '@mui/icons-material';

const ProductCard2 = ({ product, size }) => {
  const imgsize = size * 0.75;
  console.log(imgsize);
  if (product) {
    return (
      <Card sx={{ maxWidth: '100%' }}>
        <CardMedia
          component="img"
          src={urlFor(product.image[0])}
          title={product.name}
          sx={{
            padding: 5,
            height: 'auto',
            width: 'auto',
            maxHeight: 300,
            maxWidth: 300,
          }}
        />
        <CardContent>
          <div sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              ${product.price}
            </Typography>
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
            component="p"
          />
        </CardContent>
        <CardActions
          disableSpacing
          sx={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    );
  } else {
    return <CircularProgress />;
  }
};

export default ProductCard2;
