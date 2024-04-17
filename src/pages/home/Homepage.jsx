import React from 'react';
import Layout from '../../components/layout/Layout';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../images/slider1.jpg';
import slider2 from '../../images/slider2.jpg';
import slider3 from '../../images/slider3.jpg';
import slider4 from '../../images/slider4.jpg';
import slider5 from '../../images/slider5.jpg';
import { Box } from '@mui/material';
import BlogCard from '../../components/card/Card';


const Homepage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
       <Layout>
        {/* //carousel */}
    <Box sx={{maxWidth:`100vw !important`,overflow:'hidden'}} className="slider-container">
      <Slider {...settings}>
        <img src={slider1} alt="slider 1" />
        <img src={slider2} alt="slider 2" />
        <img src={slider3} alt="slider 3" />
        <img src={slider4} alt="slider 4" />
        <img src={slider5} alt="slider 5" />
      </Slider>
    </Box>
    <Box sx={{display:'inline-flex',flexGrow:'1'}}>
    <BlogCard/>
    <BlogCard/>
    <BlogCard/>
    </Box>
       </Layout>
    );
};

export default Homepage;