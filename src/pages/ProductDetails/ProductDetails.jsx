import {
  Box, CircularProgress, Typography, ImageList, ImageListItem, Grid, Divider, Fab,
} from '@mui/material';
import { Icon } from '@iconify/react';

import { useState, useEffect } from 'react';
import Axios from 'axios';
import FsLightbox from 'fslightbox-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];

  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    Axios.get(`https://utamibakery-backend.vercel.app/products/${id}`).then((response) => {
      console.log(response.data.data.product);
      setProduct(response.data.data.product);
    });
  }, []);

  return (

    product == null ? <CircularProgress />
      : (
        <div className="appbackground">
          <Navbar />
          <Grid
            container
            sx={{
              marginLeft: '50px',
              marginBlock: '70px',
            }}
          >
            <Grid item md={12} />
            <Grid
              item
              md={4}
            >
              <img src={product.photos[0]} width={400} alt={product.photos[0]} />
              <ImageList sx={{ width: 500, height: 150 }} variant="quilted" cols={4} rowHeight={121}>
                {product.photos.map((item) => (
                  <ImageListItem key={item.img} onClick={() => setToggler(!toggler)}>
                    <img
                      src={`${item}`}
                      srcSet={`${item}`}
                      alt={item}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>

            <Grid
              item
              md={6}
              sx={{
                marginLeft: '50px',
              }}
            >
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '10px',
              }}
              >
                <Typography variant="h5" fontWeight="bold">{product.name}</Typography>

                <Typography variant="h6" fontWeight="600" color="gray">
                  {'Rp '}
                  {product.price}
                </Typography>

                <Typography variant="p">{product.description}</Typography>

                <Divider />

                <Grid container>
                  <Grid
                    item
                    md={5}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      columnGap: '10px',
                    }}
                  >
                    <Icon icon="mdi:box-variant" />
                    <Typography variant="p">
                      Stock:
                      {' '}
                      {product.quantity ? product.quantity : '-'}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    md={5}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      columnGap: '10px',
                    }}
                  >
                    <Icon icon="game-icons:weight" />
                    <Typography variant="p">
                      Berat:
                      {' '}
                      {product.weight}
                      {' Kg'}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider />

              </Box>
            </Grid>

            <FsLightbox
              toggler={toggler}
              sources={product.photos}
            />
          </Grid>
          <Footer />
        </div>
      )

  );
};

export default ProductDetails;
