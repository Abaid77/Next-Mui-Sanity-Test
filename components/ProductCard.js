import { urlFor, urlForThumbnail } from '@/pages/utils/client';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Link } from '@mui/material';
import React from 'react';
import NextLink from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <Card raised="true">
      <Link
        href={`/product/${product.slug.current}`}
        passHref
        component={NextLink}
      >
        <CardActionArea
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CardMedia
            component="img"
            image={urlFor(product.image[0])}
            title={product.name}
            sx={{ padding: 5, maxWidth: 390 }}
          />
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography color="secondary">{product.name}</Typography>
            <Typography color="secondary">${product.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default ProductCard;
