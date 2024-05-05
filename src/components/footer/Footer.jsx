import React from 'react';
import { Container, Grid, Typography, Button, Divider, Box } from '@mui/material';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer style={{marginTop:'10vh',paddingTop:'5vh',backgroundColor: '#333', color: '#fff'}}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
              {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <div style={{ display: 'flex',alignItems:'center',flexDirection: 'column',}}>
              <Typography variant="h6">Quick Links</Typography>
              <Link style={{textDecoration:'none',color:'white'}} to="/accessories">Accessories</Link>
              <Link style={{textDecoration:'none',color:'white'}} to="/about-us">About Us</Link>
              <Link style={{textDecoration:'none',color:'white'}} to="/agro">Agro</Link>
              <Link style={{textDecoration:'none',color:'white'}} to="/IT">IT</Link>
              <Link style={{textDecoration:'none',color:'white'}}to="/garments">Garments</Link>
            </div>
          </Grid>

          {/* Stay in Touch */}
          <Grid item xs={12} sm={4}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6">Stay in Touch</Typography>
              <Typography>Subscribe to our media alerts and receive notifications by email every time we issue a media release.</Typography>
              <Button>Sign Up For alerts</Button>
              
            </div>
          </Grid>

        
          {/* ESG Reports */}
          {/* <Grid item xs={12} sm={4}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant="h6">Securing better food for the future</Typography>
              <Link href="#" color="inherit">Esg Reports</Link>
            </div>
          </Grid> */}
        </Grid>
        {/* Bar */}
      </Container>
      <Box sx={{backgroundColor: 'black',width:'100%'}}>
        <Divider style={{ margin: '16px 0' }} />

<Typography variant="body2" align="center">
  <Link to='/' style={{ margin: '0 8px',color:'white' }}>Terms and Conditions</Link>
  <Link to='/' style={{ margin: '0 8px',color:'white' }}>Accessibility</Link>
  <Link to='/' style={{ margin: '0 8px',color:'white' }}>Privacy</Link>
  <Link to='/' style={{ margin: '0 8px',color:'white' }}>Cookie Policy</Link>
  <Link to='/' style={{ margin: '0 8px',color:'white'}}>Cookie settings</Link>
  <Link to='/' style={{ margin: '0 8px',color:'white' }}>Security video surveillance</Link>
  <Link to='/' style={{ margin: '0 8px',color:'white'}}>Site Map</Link>
  <Link to='/' style={{ margin: '0 8px',color:'white'}}>Home office</Link>
  <br />
  Copyright © 2024
</Typography>
        </Box>
    </footer>
  );
};

export default Footer;
