import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import cardImage1 from '../../images/cardImage1.jpg'
// import cardImage2 from '../../images/cardImage2.jpg'
// import cardImage3 from '../../images/cardImage3.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Card.css'
const BlogCard = ()=> {
  return (
    <Card className="animated-card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={cardImage1}
          alt="green iguana"
        />
        <CardContent className="card-content">
          <Typography sx={{color:'#424242',fontWeight:'bold'}} gutterBottom variant="h5" component="div">
            Crop Protection
          </Typography>
          <Typography  gutterBottom component="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae doloribus voluptatibus unde excepturi, eius nesciunt!
          </Typography>
          <Button className='read-more' size="small">
          <span className="read-more-text">Read More</span>
          <span className="read-more-icon"><ArrowForwardIcon/></span> 
      
        </Button>          
        </CardContent>
        
      </CardActionArea>
    </Card>
  );
}
export default BlogCard;