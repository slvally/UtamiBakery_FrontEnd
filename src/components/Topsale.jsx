import React, { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material/';
import './MainStyle.css';
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
import { products } from '../utils/DataProduct';
// Button
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{
        color: 'white', fontSize: '30px', position: 'relative', left: '5px', textAlign: 'center',
      }}
      />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: 'white', fontSize: '30px' }} />
    </div>
  );
};

const Topsale = () => {
  const [Data, setData] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(5);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1090) {
        setSlidesToShow(4);
      } else if (window.innerWidth < 1090 && window.innerWidth >= 840) {
        setSlidesToShow(3);
      } else if (window.innerWidth < 840 && window.innerWidth >= 580) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getProductData = () => {
    const url = 'https://utamibakery-backend.vercel.app/products';
    axios.get(url)
      .then((response) => {
        const result = response.data;
        const { status, message, data } = result;
        if (status !== 'success') {
          alert(message, status);
        } else {
          setData(data.products);
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className=" screenTopSale" style={{ width: '95%', marginTop: '20px', marginBottom: '50px' }}>
      <Typography variant="h4" style={{ position: 'relative', top: '10px', left: '25px' }}>TOP SALES</Typography>
      <div
        className="BootstrapMulti"
        style={{
          display: 'flex', justifyContent: 'center', marginTop: 30, marginBottom: 30,
        }}
      >
        <div style={{ width: '92%' }}>
          <Slider
            prevArrow={<PreviousBtn />}
            nextArrow={<NextBtn />}
            slidesToShow={slidesToShow}
            slidesToScroll={3}
            infinite={false}
          >
            {Data.map((item, i) => (
              <Kartu
                key={i}
                price={item.price}
                name={item.name}
                url={item.photos[0]}
                desc={item.description}
              />
            ))}
          </Slider>
        </div>
      </div>
      <Box sx={{
        display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap',
      }}
      >
        <Button
          size="md"
          variant="solid"
          color="primary"
          style={{
            margin: '0 auto', display: 'inline-block', backgroundColor: '#21b6ae', color: 'white',
          }}
        >
          Lihat Selengkapnya
        </Button>
      </Box>
    </div>
  );
};

const Kartu = ({
  price, name, url, desc,
}) => (
  <div
    style={{
      textAlign: 'center',
      margin: '5px',
      // padding: "10px 10px",
      // width: 220,
    }}
  >
    <Card sx={{
      maxWidth: 285, borderRadius: 2, height: '430px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center',
    }}
    >
      <CardHeader
        title={name}
        subheader={price}
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
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <button>Add to cart</button>
      </CardActions>
    </Card>
  </div>
);

export default Topsale;
