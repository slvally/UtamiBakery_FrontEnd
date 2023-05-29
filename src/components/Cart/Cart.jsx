import { useState } from 'react';
import {
  Card, Typography, CardMedia, CardContent, Box, CardActions, IconButton,
} from '@mui/material';
import { Icon } from '@iconify/react';

const Cart = (props) => {
  const [isLoading, setisLoading] = useState(false);

  const {
    id, name, coverImg, price, amount,
  } = props;
  return (
    <Card sx={{ display: 'flex', marginInline: '40px', mb: '20px' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={coverImg}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ width: '720px' }}>
          <Typography component="div" variant="h5">
            {name}
            {' '}
            x
            {amount}
          </Typography>
          <Typography variant="subtitle1" color="#662577" fontWeight="bold" component="div">
            {price}
          </Typography>
        </CardContent>
        <CardActions sx={{
          alignSelf: 'end',
        }}
        >
          <IconButton>
            <Icon icon="ph:trash-fill" color="#990042" />
          </IconButton>
        </CardActions>
        <Box sx={{
          display: 'flex', alignItems: 'center', pl: 1, pb: 1,
        }}
        >
          {/* <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton> */}
        </Box>
      </Box>
    </Card>
  );
};

export default Cart;
