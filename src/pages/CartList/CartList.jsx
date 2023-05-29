import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';
import {
  Typography,
  Box, Grid, Fab, CircularProgress, CardContent, Divider, Card, Button,
} from '@mui/material';
import Axios from 'axios';
import { Icon } from '@iconify/react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import FilterBox from '../../components/FilterBox/FilterBox';
import Kartu from '../../components/CatalogCard/CatalogCard';
import Cart from '../../components/Cart/Cart';

const CartList = () => {
  const [prods, setprods] = useState(null);
  const userLoggedIn = JSON.parse(window.localStorage.getItem('userLoggedIn'));
  const [isLoading, setIsLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleBuy = () => {
    let text = '*Pembelian*%0a--------------------------%0a';
    prods.map((p) => {
      text += `${p.name} (${p.amount}) - ${p.price * p.amount}%0a`;
    });
    text += `%0a*Total = ${totalPrice}*`;
    console.log(text);
    window.open(
      `https://wa.me/6283819763325?text=${text}`,
      '_blank', // <- This is what makes it open in a new window.
    );
  };

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${userLoggedIn.token}` },
    };
    Axios.get(
    //   'http://localhost:5000/cart',
      'https://utamibakery-backend.vercel.app/cart',
      config,
    ).then((response) => {
      console.log(response);
      setprods(response.data.data.cartDetail);
      setTotalPrice(response.data.data.summary.totalPrice);
      console.log(prods);
      setIsLoading(false);
    });
  }, []);
  return (

    <>
      <div className="appbackground">
        <Navbar />

        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            marginBlock: '20px',
            marginLeft: '40px',
          }}
        >
          Keranjang

        </Typography>
        <Grid
          container
          sx={{
            mb: '100px',
          }}
        >
          <Grid item md={8}>
            {
            isLoading ? <CircularProgress />
              : prods.map((p) => (
                <Cart
                  key={p._id}
                  id={p._id}
                  name={p.name}
                  coverImg={p.imgCover}
                  amount={p.amount}
                  price={p.amount * p.price}
                />
              ))
        }

          </Grid>
          <Grid
            item
            md={3}
          >
            <Box>
              <Card sx={{}}>
                <CardContent>
                  <Typography
                    variant="p"
                    fontWeight="900"
                    fontSize={16}
                    sx={{
                      marginBottom: '100px',
                    }}
                  >
                    Ringkasan Belanja

                  </Typography>
                  {
                      isLoading ? <CircularProgress />
                        : (
                          <Box sx={{
                            mt: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '5px',
                          }}
                          >
                            {
                                prods.map((p) => (
                                  <>
                                    <Box
                                      sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'start',
                                      }}
                                    >
                                      <Typography variant="p">
                                        {p.name}
                                        {' '}
                                        (
                                        {p.amount}
                                        )
                                      </Typography>
                                      <Typography variant="p">
                                        {p.amount * p.price}
                                      </Typography>
                                    </Box>

                                  </>
                                ))
                            }
                            <Grid item md={12}>
                              <Divider />
                            </Grid>
                            <Box sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'start',
                            }}
                            >
                              <Typography variant="p" fontWeight="bold">
                                Total
                              </Typography>
                              <Typography variant="p" fontWeight="bold">
                                {totalPrice}
                              </Typography>

                            </Box>
                            <Button
                              onClick={handleBuy}
                              variant="contained"
                              sx={{
                                borderRadius: '30px',
                                marginTop: '20px',
                                backgroundColor: 'green',
                                '&:hover': {
                                  backgroundColor: 'darkgreen',
                                },
                              }}
                            >
                              <Icon icon="ri:whatsapp-line" style={{ marginRight: '10px' }} />
                              Beli Sekarang
                            </Button>
                          </Box>
                        )
                    }
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </>
  );
};
export default CartList;
