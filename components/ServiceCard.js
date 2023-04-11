import { urlFor, urlForThumbnail } from '@/utils/client';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  Typography,
} from '@mui/material';
import { Link } from '@mui/material';
import React from 'react';
import NextLink from 'next/link';
import InfoIcon from '@mui/icons-material/Info';

const services = [
  {
    title: 'Custom Engagement Rings',
    link: '/custom-engagement-rings',
  },
  {
    title: 'Custom Jewelry',
    link: '/custom-jewelry',
  },
  {
    title: 'Engraving',
    link: '/engraving',
  },
];

const ServiceCard = ({ service }) => {
  if (service) {
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
        <Link href={`/product/${service.link}`} passHref component={NextLink}>
          <CardActionArea
            sx={{
              display: 'flex',
              flexGrow: 1,
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <CardMedia
              component="img"
              src={service.image_link}
              title={service.name}
              sx={{
                // height: 'auto',
                // width: 'auto',
                maxHeight: 330,
                maxWidth: 275,
                marginTop: 1,
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
              alignItems: 'center',
            }}
          >
            <Typography color="secondary">{service.title}</Typography>
            <Typography
              dangerouslySetInnerHTML={{ __html: service.description }}
              variant="body2"
              color="textSecondary"
              component="p"
            />
          </CardContent>
          <CardActions
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* <Typography color="secondary">Click to get more info</Typography> */}
            <Button
              variant="outlined"
              color="success"
              aria-label="More Info"
              component={Link}
              href={`/product/${service.link}`}
            >
              Get More Info
            </Button>
            {/* <IconButton
              aria-label="More Info"
              component={Link}
              href={`/product/${service.link}`}
              size="small"
              color="secondary"
            >
              <InfoIcon />
            </IconButton> */}
          </CardActions>
        </Box>
      </Card>
    );
  } else {
    return <CircularProgress />;
  }
};

export default ServiceCard;
