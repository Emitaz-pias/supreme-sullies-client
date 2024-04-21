import React from 'react';
import { Box, Typography } from '@mui/material';
import itPhoto from '../../images/itPhoto.jpg'
import designing from '../../images/designing.jpg'
import digitalMarketing from '../../images/digitalMarketing.jpg'
import webDevelopment from '../../images/webDevelopment.jpg'
import videoEditing from '../../images/videoEditing.jpg'



const IT = () => {
    return (
        <Box sx={{padding:'1em'}}>
        <Typography variant='h3'>It</Typography>
        <Typography variant='h4'>Welcome to the IT Department of Supreme Supplies BD</Typography>
        <Typography variant='p'>Innovation meets excellence in the digital realm. As a leading provider of IT solutions, we pride ourselves on offering a comprehensive suite of services tailored to meet the evolving needs of businesses in the digital age. From digital marketing to web development, video editing, and designing, we are your one-stop destination for all things tech-related.</Typography>
        <section>
        <Box sx={{display:'inline-flex', justifyContent:"space-around",alignItems:'center',flexDirection:{xs:'column-reverse',md:'row',lg:'row'}}}>
                    <Box sx={{padding:"0 1em"}}>
                        <Typography fontWeight={'bold'} variant='h4'>Digital Marketing:</Typography>
                        <Typography variant='p'>In today's digital landscape, having a strong online presence is essential for businesses to thrive. That's where our digital marketing expertise comes into play. Our team of seasoned marketers specializes in crafting tailored strategies to help businesses reach their target audience, increase brand visibility, and drive conversions.</Typography><br />
                        <Typography variant='p'>
                        Whether you're looking to enhance your social media presence, optimize your website for search engines, or launch a targeted advertising campaign, we have the tools and expertise to make it happen. With a data-driven approach and a keen understanding of the latest industry trends, we ensure that your digital marketing efforts yield tangible results and a measurable return on investment.
                        </Typography>
                    </Box>
                    <Box> <img style={{width:'100%',height:'100%'}} src={digitalMarketing} alt="digitalMarketing"/></Box>
        </Box>
        <Box  sx={{display:'inline-flex', justifyContent:"space-around",alignItems:'center',flexDirection:{xs:'column',md:'row',lg:'row'}}}>
                <Box> <img style={{width:'100%',height:'100%'}} src={webDevelopment} alt="webDevelopment"/></Box>
                    <Box sx={{padding:"0 1em"}}>
                        <Typography fontWeight={'bold'} variant='h4'>Web Development:</Typography>
                        <Typography variant='p'>Your website serves as the digital storefront for your business, and first impressions matter. At Supreme Supplies BD, we specialize in creating visually stunning, user-friendly websites that captivate audiences and drive engagement. From sleek corporate websites to robust e-commerce platforms, we have the skills and experience to bring your vision to life.</Typography>
                        <Typography variant='p'>
                        Our team of talented developers leverages the latest technologies and frameworks to build websites that are not only aesthetically pleasing but also highly functional and responsive across all devices. Whether you need a custom-built solution or prefer to work with popular content management systems like WordPress or Shopify, we have the expertise to deliver a website that exceeds your expectations.  
                        </Typography>
                    </Box>

        </Box>
        <Box sx={{display:'inline-flex', justifyContent:"space-around",alignItems:'center',flexDirection:{xs:'column-reverse',md:'row',lg:'row'}}}>
                    <Box sx={{padding:"0 1em"}}>
                        <Typography fontWeight={'bold'} variant='h4'>Video Editing:</Typography>
                        <Typography variant='p'>In today's digital landscape, video content reigns supreme. From promotional videos to product demos and tutorials, video has become a powerful tool for engaging audiences and conveying your brand message. That's where our video editing services come in.</Typography><br />
                        <Typography variant='p'>
                        Our team of skilled videographers and editors works closely with clients to bring their vision to life, from concept to completion. Whether you're looking to create a captivating brand video, a series of instructional tutorials, or engaging social media content, we have the expertise and creativity to produce high-quality videos that resonate with your audience.
                        </Typography>
                    </Box>
                    <Box> <img style={{width:'100%',height:'100%'}} src={videoEditing} alt="digitalMarketing"/></Box>
        </Box>
        <Box  sx={{display:'inline-flex', justifyContent:"space-around",alignItems:'center',flexDirection:{xs:'column',md:'row',lg:'row'}}}>
                <Box> <img style={{width:'100%',height:'100%'}} src={designing} alt="webDevelopment"/></Box>
                    <Box sx={{padding:"0 1em"}}>
                        <Typography fontWeight={'bold'} variant='h4'>Designing:</Typography>
                        <Typography variant='p'>Visual aesthetics play a crucial role in shaping the perception of your brand. That's why our design team is dedicated to creating visually stunning graphics and assets that set your business apart from the competition. From logo design and branding to marketing collateral and packaging, we offer a comprehensive range of design services to meet your needs.</Typography>
                        <Typography variant='p'>
                        Our designers combine creativity with strategic thinking to deliver designs that not only look great but also effectively communicate your brand identity and message. Whether you're launching a new product or revamping your existing brand image, we have the skills and expertise to create designs that leave a lasting impression.  
                        </Typography>
                    </Box>

        </Box>
        <Box sx={{display:'inline-flex', justifyContent:"space-around",alignItems:'center',flexDirection:{xs:'column-reverse',md:'row',lg:'row'}}}>
                    <Box sx={{padding:"0 1em"}}>
                        <Typography variant='p'>
                        In conclusion, the IT department of Supreme Supplies BD is your trusted partner for all your digital needs. Whether you're looking to elevate your online presence, enhance your website, create engaging video content, or develop stunning visual assets, we have the expertise and creativity to bring your vision to life. Contact us today to learn more about how we can help you take your business to the next level in the digital age.
                        </Typography>
                    </Box>
                    <Box> <img style={{width:'100%',height:'100%'}} src={itPhoto} alt="digitalMarketing"/></Box>
        </Box>

        </section>
       </Box>
    );
};

export default IT;