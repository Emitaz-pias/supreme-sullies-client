import { Box, Typography } from '@mui/material';
import React from 'react';

const NotFound = () => {
    return (
        <Box>
            <Typography variant='h1' color='red'>
                Oppps..404 page not found {':('}
            </Typography>
        </Box>
    );
};

export default NotFound;