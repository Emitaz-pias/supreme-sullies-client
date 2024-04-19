import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../images/slider1.jpg';
import slider2 from '../../images/slider2.jpg';
import slider3 from '../../images/slider3.jpg';
import slider4 from '../../images/slider4.jpg';
import slider5 from '../../images/slider5.jpg';
import { Box, Button, Grid, Typography } from '@mui/material';
import BlogCard from '../../components/card/Card';
import fimgae1 from '../../images/featured image1.jpeg'
import fimgae2 from '../../images/featured image2.jpg'
import "./Homepage.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LogosGrid from '../../components/logoReel/LogoReels';

const Homepage = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 50,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
     <Box>
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
    <Box>
    <BlogCard/>
    </Box>
      <Box sx={{textAlign:'center',padding:'0.2em'}}>
        <Typography variant='h4'>Featured Highligts</Typography>
      <Grid container columnSpacing={1} spaceing={{ xs:1,md:1,lg:1 }}>
      <Grid item xs={12} md={5} lg={6}>
          <Box className="animated-card" sx={{}}>
          <img className='featuredImage' src={fimgae2} alt="fimage" />
          <Typography variant='h6' fontWeight={'bold'}>Supreme Group 2023 Full Years Result</Typography>
          <Typography component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptatem.</Typography>
          <Button className='read-more' size="small">
          <span className="read-more-text">Read More</span>
          <span className="read-more-icon"><ArrowForwardIcon/></span> 
      
        </Button>    
          </Box>
        </Grid>
        <Grid item xs={12} md={5} lg={6}>
          <Box className="animated-card">
            <img className='featuredImage' src={fimgae1} alt="fimage" />
            <Typography variant='h6' fontWeight={'bold'}>Vision of supreme</Typography>
          <Typography component="p">To empower our customers to achieve their goals by providing them with the superior supplies and support they need to succeed.</Typography>
          <Button className='read-more' size="small">
          <span className="read-more-text">Read More</span>
          <span className="read-more-icon"><ArrowForwardIcon/></span> 
      
        </Button>    
          </Box>
        </Grid>
      </Grid>
      </Box>
      <Box>
        <LogosGrid/>
      </Box>
      </Box>
       
    );
};

export default Homepage;