import { Box, Typography } from "@material-ui/core";
import React from "react";
import Divider from "./Divider";

const SectionHeader = (params) => {
    return (
        <Box pt={8} pb={4}>
            <Typography variant="h3" align="center">
                <Box fontWeight="fontWeightBold">{params.header}</Box>
            </Typography>
            <Divider isLight={params.isLight} />
        </Box>
    );
};

export default SectionHeader;
