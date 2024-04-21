import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import aboutkhayer from '../../images/aboutkhayer.png'
import agrivita from '../../images/agrivita.png'
import bashuPaper from '../../images/bashuPaper.png'
import bashutoile from '../../images/bashutoile.png'
import cathydoll from '../../images/cathydoll.png'
import fasska from '../../images/fasska.png'
import gskLogo from '../../images/gskLogo.png'
import maricoLogo from '../../images/maricoLogo.png'
import misiline from '../../images/misiline.png'
import nestleLogo from '../../images/nestleLogo.png'
import pandg from '../../images/pandg.png'
import reckitt from '../../images/reckitt.png'
import uniliverLogo from '../../images/uniliverLogo.png'
import squaretoile from '../../images/squaretoile.png'
import smcLogo from '../../images/smcLogo.png'
import vitalac from '../../images/vitalac.png'







const logos = [
    aboutkhayer,
    agrivita,
    bashuPaper,
    bashutoile,
    cathydoll,
    fasska,
    gskLogo,
    maricoLogo,
    misiline,
    nestleLogo,
    pandg,
    reckitt,
    uniliverLogo,
    squaretoile,
    smcLogo,
    vitalac,
];

const LogosGrid = () => {
    return (
        <Box sx={{ flexGrow: 1, marginTop: '3em', padding: '1em', justifyContent: 'center', }}>
            <Typography color='#424242' textAlign={'center'} fontWeight={'bold'} variant='h3' marginBottom={'0.5em'}>Our Distributors</Typography>
            <Grid container textAlign={'center'}>
                {logos.map((logo, index) => (
                    <Grid backgroundColor='white' sx={{margin:'0.8em',padding:'1em',borderRadius:"0.8em"}} item xs={4} sm={6} md={2} key={index}>
                        <img src={logo} alt={logo} style={{ height: '80px', width: '60px' }} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default LogosGrid;
