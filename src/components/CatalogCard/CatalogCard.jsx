import React, { useState, useEffect } from 'react';
import { Button, Box, CardActionArea } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material/';
// Slick-React
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Elements
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import axios from 'axios';

const Kartu = ({
  price, name, url, desc, id,
}) => (

  <Card sx={{
    maxWidth: 285,
    borderRadius: 2,
    height: '430px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }}
  >
    <CardActionArea
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
      }}
      href={`/katalog/${id}`}
    >

      <CardHeader
        title={name}
        subheader={price}
        sx={{
          color: '#662577',
          fontWeight: 'bold',
        }}
      />
      <CardMedia
        style={{
          borderRadius: '4px',
          width: '90%',
          height: '200px',
          objectFit: 'cover',
          margin: '0 auto',
        }}
        component="img"
        height="150"
        image={url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions disableSpacing>
      <button>Add to cart</button>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
);

export default Kartu;
