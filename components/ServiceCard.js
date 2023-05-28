import {
  Box,
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
            <Button
              variant="outlined"
              color="success"
              aria-label="More Info"
              component={Link}
              // href={`/product${service.link}`}
            >
              Get More Info
            </Button>
          </CardActions>
        </Box>
      </Card>
    );
  } else {
    return <CircularProgress />;
  }
};

export default ServiceCard;
