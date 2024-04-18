import React from 'react';
import { Container, Grid, Typography, Link, Button, Divider, Box } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{marginTop:'10vh',paddingTop:'5vh',backgroundColor: '#333', color: '#fff'}}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
              {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <div style={{ display: 'flex',alignItems:'center',flexDirection: 'column',}}>
              <Typography variant="h6">Quick Links</Typography>
              <Link sx={{textDecoration:'none'}} href="#" color="inherit">Innovention andagriculture</Link>
              <Link sx={{textDecoration:'none'}} href="#" color="inherit">Protecting Crops</Link>
              <Link sx={{textDecoration:'none'}} href="#" color="inherit">Seeds</Link>
              <Link sx={{textDecoration:'none'}} href="#" color="inherit">Sustainability</Link>
              <Link sx={{textDecoration:'none'}}href="#" color="inherit">Company</Link>
              <Link sx={{textDecoration:'none'}}href="#" color="inherit">Carrers</Link>
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
          <Grid item xs={12} sm={4}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant="h6">Securing better food for the future</Typography>
              <Link href="#" color="inherit">Esg Reports</Link>
            </div>
          </Grid>
        </Grid>
        {/* Bar */}
      </Container>
      <Box sx={{backgroundColor: 'black',width:'100%'}}>
        <Divider style={{ margin: '16px 0' }} />

<Typography variant="body2" align="center">
  Footer
  <Link href="#" color="inherit" style={{ margin: '0 8px' }}>Terms and Conditions</Link>
  <Link href="#" color="inherit" style={{ margin: '0 8px' }}>Accessibility</Link>
  <Link href="#" color="inherit" style={{ margin: '0 8px' }}>Privacy</Link>
  <Link href="#" color="inherit" style={{ margin: '0 8px' }}>Cookie Policy</Link>
  <Link href="#" color="inherit" style={{ margin: '0 8px' }}>Cookie settings</Link>
  <Link href="#" color="inherit" style={{ margin: '0 8px' }}>Security video surveillance</Link>
  <Link href="#" color="inherit" style={{ margin: '0 8px' }}>Site Map</Link>
  <Link href="#" color="inherit" style={{ margin: '0 8px' }}>Home office</Link>
  <br />
  Copyright © 2024 bro
</Typography>
        </Box>
        
      
    </footer>
  );
};

export default Footer;
