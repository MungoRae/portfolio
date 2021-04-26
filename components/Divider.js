import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Box, Grid } from "@material-ui/core";

const Divider = (params) => {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="mb-6"
        >
            <Box maxWidth="11rem" height="0.25rem" width="100%" bgcolor={params.isLight ? 'white' : 'text.primary'} mr={2} />
            <Box fontSize={32}>
                <FontAwesomeIcon icon={faStar} />
            </Box>
            <Box maxWidth="11rem" height="0.25rem" width="100%" bgcolor={params.isLight ? 'white' : 'text.primary'} ml={2} />
        </Grid>
    );
};

export default Divider;
