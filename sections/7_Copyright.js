import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';

const Copyright = () => {
    return (
        <Box bgcolor="primary.dark" color="white" pt={2} pb={2}>
            <Container>
                <Typography align="center">Copyright &copy; mungorae.me.uk {new Date().getFullYear()}</Typography>
            </Container>
        </Box>
    );
};

export default Copyright;