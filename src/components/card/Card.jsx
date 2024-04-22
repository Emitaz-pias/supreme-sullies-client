import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box,CardActionArea } from '@mui/material';
import accessories from '../../images/aboutUs.jpg'
import aboutUsImage from '../../images/aboutUsImage.jpg'
import agro from '../../images/agroImage.jpg'
import ITImage from '../../images/itImage.jpg'
import garments from '../../images/garmentsImage.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Card.css'
import { Link } from 'react-router-dom';
const BlogCard = ()=> {
  const items = [
    {
      picture: aboutUsImage,
      title: 'About Us',
      link:'/about-us',
      description: 'At Supreme, we take pride in being a leading supplier company dedicated to providing exceptional products and...',
    },
    {
      picture:accessories,
      title: 'Accessories',
      link:'/accessories',
      description: 'We specialize in the supply of high-quality accessories including elastic, drawstrings...',
    },
    {
      picture: agro,
      title: 'Agro',
      link:'/agro',
      description: 'Our agro division focuses on importing and distributing premium seeds, livestock,...',
    },
    {
      picture: ITImage,
      title: 'IT',
      link:'/IT',
      description: 'Supreme IT offers cutting-edge technology solutions and services tailored to the needs of businesses...',
    },
    {
      picture:garments,
      title: 'Garments',
      link:'/garments',
      description: 'As a leading buying house, our garments division sources and supplies a diverse range of apparel and fashion products...',
    },
  ];
  
  return (
    <Box sx={{display:'inline-flex',flexWrap:'wrap',justifyContent:'center',marginTop:'1em',}}>
      {items.map((item, index) => (
  <Card  key={index} className="animated-card" sx={{ 
    maxWidth: 345,
    margin: {
      md: '1em',
    }
  }}>
    <CardActionArea>
      <CardMedia
        component="img"
        image={item.picture}  
        alt={item.title}     
      />
      <CardContent className="card-content">
        <Typography sx={{ color: '#000', fontWeight: 'bold',fontFamily:'Roboto',textTransform:'uppercase' }} gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom component="p">
          {item.description}
        </Typography>
        <Link style={{textDecoration:"none",color:'black'}} to ={item.link}>
        <Box className='read-more' size="small">
          <span className="read-more-text">Read More</span>
          <span className="read-more-icon"><ArrowForwardIcon/></span>
        </Box>
        </Link>
       
      </CardContent>
    </CardActionArea>
  </Card>
))}


    </Box>
   
  );
}
export default BlogCard;