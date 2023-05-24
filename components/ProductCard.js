import { urlFor } from '@/utils/client';
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import { Link } from '@mui/material';
import React from 'react';
import NextLink from 'next/link';
import InfoIcon from '@mui/icons-material/Info';

const ProductCard = ({ product }) => {
  if (product) {
    return (
      <Card
        raised={true}
        sx={{
          width: 390,
          height: 400,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        className="product-card"
      >
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
              sx={{
                height: 'auto',
                width: 'auto',
                maxHeight: 270,
                maxWidth: 225,
              }}
            />
          </CardActionArea>
        </Link>
        <Box>
          <CardContent
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography color="secondary">{product.name}</Typography>
            <Typography
              dangerouslySetInnerHTML={{ __html: product.description }}
              variant="body2"
              color="textSecondary"
              component="p"
            />
          </CardContent>
          <CardActions
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography color="secondary">${product.price}</Typography>
            <Tooltip title={product.description}>
              <IconButton
                aria-label="More Info"
                component={Link}
                href={`/product/${product.slug.current}`}
                size="small"
                color="secondary"
              >
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Box>
      </Card>
    );
  } else {
    return <CircularProgress />;
  }
};

export default ProductCard;

{
  /* <Button
component={Link}
href={`/product/${product.slug.current}`}
size="small"
color="secondary"
variant="outlined"
>
Details
</Button> */
}
