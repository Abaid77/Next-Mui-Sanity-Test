import { urlFor, urlForThumbnail } from '@/utils/client';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from '@mui/material';
import { Link } from '@mui/material';
import React from 'react';
import NextLink from 'next/link';

const ProductCard = ({ product }) => {
  if (product) {
    return (
      <Card raised={true} sx={{ maxWidth: 390, maxHeight: 500 }}>
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
              src={urlFor(product.image[0])}
              title={product.name}
              sx={{ padding: 5, maxWidth: 390 }}
              height={390}
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography color="secondary">{product.name}</Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography color="secondary">${product.price}</Typography>
          <Button size="small" color="secondary" variant="outlined">
            Details
          </Button>
        </CardActions>
      </Card>
    );
  } else {
    return <CircularProgress />;
  }
};

export default ProductCard;
