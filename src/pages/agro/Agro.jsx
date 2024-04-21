import React from 'react';
import { Box, Typography } from '@mui/material';
import fisheries from '../../images/fisheries.webp'
import fishes from '../../images/fishes.jpg'
import fishFood from '../../images/fishFood.jpg'
import seeds from '../../images/seeds.jpg'



const Agro = () => {
    return (
       <Box sx={{padding:'1em'}}>
        <Typography variant='h3'>Agro</Typography>
        <Typography variant='p'>We are dedicated to nurturing agricultural communities and fostering sustainable practices for a brighter future. Our commitment to excellence in agriculture encompasses two vital components: fisheries and seed importation and distribution.</Typography>
        <section>
        <Box sx={{display:'inline-flex', justifyContent:"space-around",alignItems:'center',flexDirection:{xs:'column-reverse',md:'row',lg:'row'}}}>
                    <Box sx={{padding:"0 1em"}}>
                        <Typography fontWeight={'bold'} variant='h4'>Fisheries:</Typography>
                        <Typography variant='p'>In our fisheries sector, we recognize the critical role aquaculture plays in meeting the world's growing demand for seafood while ensuring the responsible stewardship of our aquatic resources. At Supreme Supplies BD, we partner with fisheries experts and aquaculturists to provide a comprehensive range of products and services tailored to the unique needs of this dynamic industry.</Typography> <br />
                        <Typography variant='p'>Our portfolio includes a diverse selection of high-quality fish feeds, supplements, and equipment designed to optimize fish health and maximize yields. Whether you're raising freshwater species like tilapia and carp or cultivating marine favorites such as shrimp and prawns, we offer specialized solutions to support your aquaculture endeavors.</Typography>
                    </Box>
                    <Box> <img style={{width:'100%',height:'100%'}} src={fisheries} alt="elasticImage"/></Box>
        </Box>
        <Box  sx={{display:'inline-flex', justifyContent:"space-around",alignItems:'center',flexDirection:{xs:'column',md:'row',lg:'row'}}}>
                <Box> <img style={{width:'100%',height:'100%'}} src={fishFood} alt="fishFood"/></Box>
                    <Box sx={{padding:"0 1em"}}>
                        <Typography fontWeight={'bold'} variant='h4'>Fish Food:</Typography>
                        <Typography variant='p'>Moreover, we understand the importance of sustainability in fisheries management. That's why we work closely with our suppliers to promote environmentally friendly practices and responsible sourcing methods. By prioritizing sustainability, we aim to ensure the long-term viability of the fisheries sector while preserving the delicate balance of aquatic ecosystems.</Typography>
                    </Box>

        </Box>
        <Box sx={{display:'inline-flex', justifyContent:"space-around",alignItems:'center',flexDirection:{xs:'column-reverse',md:'row',lg:'row'}}}>
                    <Box sx={{padding:"0 1em"}}>
                        <Typography fontWeight={'bold'} variant='h4'>Seeds:</Typography>
                        <Typography variant='p'>IIn addition to fisheries, our Agro division specializes in the importation and distribution of high-quality seeds for a wide range of crops. We recognize that the foundation of successful agriculture begins with superior quality seeds, which is why we partner with leading seed producers from around the globe to bring you the finest varieties available.</Typography> <br />
                        <Typography variant='p'>From staple crops like rice, wheat, and maize to specialty crops such as vegetables, fruits, and herbs, our extensive seed catalog caters to the diverse needs of farmers and growers across the region. We understand that each crop has unique requirements, which is why we offer a curated selection of seeds chosen for their adaptability, disease resistance, and yield potential.</Typography><br />
                        <Typography variant='p'>Our commitment to excellence doesn't end with the delivery of seeds. We provide comprehensive support services to our customers, including technical guidance, agronomic advice, and ongoing assistance throughout the crop cycle. Whether you're a small-scale farmer or a large commercial operation, our team of agricultural experts is here to help you achieve success in your farming endeavors.</Typography><br />
                        <Typography variant='p'>Furthermore, we prioritize efficiency and reliability in our distribution network to ensure that seeds reach our customers in a timely manner, regardless of their location. With strategically located warehouses and a fleet of dedicated vehicles, we streamline the distribution process to minimize delays and optimize productivity for our valued clients.</Typography>
                    </Box>
                    <Box> <img style={{width:'100%',height:'100%'}} src={seeds} alt="seeds"/></Box>
        </Box>
        </section>
        <Typography variant='p'>In conclusion, the Agro division of Supreme Supplies BD is more than just a supplier of agricultural products – we are a trusted partner committed to the success and sustainability of the agriculture industry. Whether you're a fish farmer seeking to maximize yields or a crop producer looking for top-quality seeds, we invite you to experience the difference with Supreme Supplies BD. Together, let's cultivate a brighter future for agriculture.</Typography>
       </Box>
    );
};

export default Agro;