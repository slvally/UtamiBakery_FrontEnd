import React from 'react';
import './MainStyle.css';

// import BannerBackground from "../Assets/home-banner-background.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BannerImage from '../assets/home-banner-image.png';

const Main = () => (
  <div className="screen" style={{ marginTop: '20px' }}>
    <div className="home-container">
      <div className="home-banner-container">
        {/* <div className="home-bannerImage-container">
             <img src={BannerBackground} alt="" />
          </div> */}
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            JamHealthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          {/* <button className="secondary-button">
              Lihat Selengkapnya <FiArrowRight />{" "}
            </button> */}
        </div>
      </div>
    </div>
  </div>

);

export default Main;
