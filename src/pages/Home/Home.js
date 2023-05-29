import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Style.css';
import Navbar from '../../components/Navbar';
import Main from '../../components/Main';
import Topsale from '../../components/Topsale';
import Testimonial from '../../components/Testimonial';
import Footer from '../../components/Footer';

const Home = () => (
  <>
    <div className="appbackground">
      <Navbar />
      <Main />
      <Topsale />
      <Testimonial />
      <Footer />
    </div>
  </>
);

export default Home;
