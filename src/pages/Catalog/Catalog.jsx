import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';
import {
  Typography,
  Box, Grid, Fab, CircularProgress,
} from '@mui/material';
import Axios from 'axios';
import { Icon } from '@iconify/react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import FilterBox from '../../components/FilterBox/FilterBox';
import Kartu from '../../components/CatalogCard/CatalogCard';

const Catalog = () => {
  const [prods, setprods] = useState(null);
  useEffect(() => {
    Axios.get('https://utamibakery-backend.vercel.app/products').then((response) => {
      setprods(response.data.data.products);
      console.log(response.data.data.products);
    });
  }, []);
  return (

    <>
      <div className="appbackground">
        <Navbar />
        <Box sx={{
          paddingInline: '50px',
          mb: '100px',
        }}
        >

          <FilterBox />
          {
        prods == null ? <CircularProgress />
          : (
            <Grid
              container
              sx={{
                marginTop: '30px',
              }}
              spacing={2}
            >

              {
            prods.map((product, index) => (
              <Grid key={index} item md={3} xs={12}>
                <Kartu
                  id={product._id}
                  price={product.price}
                  name={product.name}
                  url={product.photos[0]}
                  desc={product.description}
                />
              </Grid>
            ))
          }

            </Grid>
          )
      }

        </Box>
        <Footer />
      </div>
    </>
  );
};
export default Catalog;
