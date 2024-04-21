import { Box, Typography } from '@mui/material';
import React from 'react';
import elastic from '../../images/elastic.jpeg'
import buttons from '../../images/buttons.jpg'
import drawstrings from '../../images/drawstrings.jpeg'
import gumtape from '../../images/gumtape.jpeg'
import twailTape from '../../images/twailTape.jpg'



const Accessories = () => {
    return (
        <Box sx={{padding:'1em'}}>
            <Typography variant='h4'>Introducing the Accessories Department of Supreme Supplies BD:</Typography>
            <Typography variant='p'>Your premier destination for high-quality accessories tailored to elevate your products and enhance your creations. With a focus on innovation, quality, and versatility, we specialize in the production and distribution of a diverse range of accessories including <b> elastic, drawstrings, gumtape, twill tape, and buttons.</b></Typography> <br />
            <Typography variant='p'>As a leading supplier in the industry, we understand the importance of accessories in adding the perfect finishing touch to your products. Whether you're in the fashion, textile, or manufacturing sector, our extensive catalog offers a wide selection of accessories to suit your specific needs and requirements.</Typography>
            <section>
                <Box sx={{display:'inline-flex', justifyContent:"space-around",alignItems:'center',flexDirection:{xs:'column-reverse',md:'row',lg:'row'}}}>
                    <Box sx={{padding:"0 1em"}}>
                        <Typography fontWeight={'bold'} variant='h4'>Elastic:</Typography>
                        <Typography variant='p'>Our elastic products are designed to provide superior stretch and durability, making them ideal for a variety of applications. From waistbands and cuffs to straps and closures, our elastic offerings come in a range of widths, colors, and materials to meet your exact specifications. Whether you're creating activewear,
                         lingerie, or outerwear, our elastic solutions ensure a comfortable and secure fit for your garments.</Typography>
                    </Box>
                    <Box> <img style={{width:'100%',height:'100%'}} src={elastic} alt="elasticImage"/></Box>
                </Box>
                <Box  sx={{display:'inline-flex', justifyContent:"space-around",alignItems:'center',flexDirection:{xs:'column',md:'row',lg:'row'}}}>
                <Box> <img style={{width:'100%',height:'100%'}} src={drawstrings} alt="elasticImage"/></Box>
                    <Box sx={{padding:"0 1em"}}>
                        <Typography fontWeight={'bold'} variant='h4'>Drawstrings:</Typography>
                        <Typography variant='p'>Our elastic products are designed to provide superior stretch and durability, making them ideal for a variety of applications. From waistbands and cuffs to straps and closures, our elastic offerings come in a range of widths, colors, and materials to meet your exact specifications. Whether you're creating activewear,
                         lingerie, or outerwear, our elastic solutions ensure a comfortable and secure fit for your garments.</Typography>
                    </Box>

                </Box>
                <Box sx={{display:'flex', justifyContent:"space-around",alignItems:'center',flexDirection:{xs:'column-reverse',md:'row',lg:'row'}}}>
                    <Box sx={{padding:"0 1em"}}>
                        <Typography fontWeight={'bold'} variant='h4'>Gumtape:</Typography>
                        <Typography variant='p'>Gumtape, also known as adhesive tape or seam tape, is a crucial accessory in garment manufacturing and textile production. Our gumtape products are designed to provide strong, reliable adhesion for seams, hems, and closures, ensuring a clean and professional finish to your garments. With options for heat-activated or pressure-sensitive adhesives, our gumtape solutions offer superior performance and durability.</Typography>
                    </Box>
                    <Box> <img style={{width:'100%',height:'100%'}} src={gumtape} alt="elasticImage"/></Box>
                </Box>
                <Box  sx={{display:'inline-flex', justifyContent:"space-around",alignItems:'center',flexDirection:{xs:'column',md:'row',lg:'row'}}}>
                <Box> <img style={{width:'100%',height:'100%'}} src={twailTape} alt="elasticImage"/></Box>
                    <Box sx={{padding:"0 1em"}}>
                        <Typography fontWeight={'bold'} variant='h4'>Twill Tape:</Typography>
                        <Typography variant='p'>Twill tape is a versatile accessory used in a variety of applications, including garment construction, packaging, and crafting. Our twill tape products are made from high-quality materials and are available in a range of widths, colors, and finishes. Whether you're reinforcing seams, binding edges, or adding decorative accents, our twill tape solutions offer both strength and style to your projects.</Typography>
                    </Box>

                </Box>
                <Box sx={{display:'inline-flex', justifyContent:"space-around",alignItems:'center',flexDirection:{xs:'column-reverse',md:'row',lg:'row'}}}>
                    <Box sx={{padding:"0 1em"}}>
                        <Typography fontWeight={'bold'} variant='h4'>Buttons:</Typography>
                        <Typography variant='p'>Buttons are more than just functional fasteners – they're also a stylish embellishment that can enhance the aesthetic appeal of your products. At Supreme Supplies BD, we offer a wide selection of buttons in various shapes, sizes, and materials, including plastic, metal, and wood. Whether you're looking for classic buttons for formal attire or novelty buttons for children's clothing, our diverse range ensures that you'll find the perfect finishing touch for your designs.</Typography>
                    </Box>
                    <Box> <img style={{width:'100%',}} src={buttons} alt="elasticImage"/></Box>
                </Box>
            </section>
        <Box><Typography variant='p'>In conclusion, the Accessories Department of Supreme Supplies BD is committed to providing high-quality accessories that meet the diverse needs of our customers. Whether you're a fashion designer, textile manufacturer, or crafting enthusiast, our extensive catalog offers a wide range of accessories to enhance your creations. Contact us today to learn more about how we can elevate your products with our premium accessories.</Typography></Box>

        </Box>
    );
};

export default Accessories;