import { Box, Typography } from '@mui/material';
import React from 'react';

const AboutUs = () => {
    return (
        <Box sx={{ padding: '1em' }}>
            <Typography sx={{ color: '#424242', fontWeight: "bold" }} variant='h3'>About Us</Typography>
            <Typography variant='h4' >Welcome to Supreme Supplies</Typography>
            <Typography variant='p'>At Supreme, we take pride in being a leading supplier company dedicated to providing exceptional products and services across various sectors. With a diverse portfolio of subsidiaries and an extensive network of distributors, we strive to meet the evolving needs of our clients and customers worldwide.</Typography>
            <Typography variant='h4'>Why Choose Supreme?</Typography>
            <Typography variant='p'>
                Quality Assurance: We uphold the highest standards of quality across all our products and services.
                Customer Satisfaction: We prioritize customer satisfaction and strive to exceed expectations in every interaction.
                Global Reach: With a global network of partners and distributors, we can cater to clients' needs worldwide.
                Innovation: We continuously innovate and adapt to emerging trends and technologies to stay ahead in the market.              
            </Typography>
            <Typography variant='h4'>Get in Touch:</Typography>
            <Typography variant='p'>Ready to experience the Supreme difference? Contact us today to learn more about our products, services, and how we can meet your business needs.
</Typography>

        </Box>
    );
};

export default AboutUs;