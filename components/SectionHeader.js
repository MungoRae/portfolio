import { Box, Typography } from "@material-ui/core";
import React from "react";
import Divider from "./Divider";

const SectionHeader = (props) => {
    return (
        <Box pt={8} pb={4}>
            <Typography variant="h4" align="center">
                <Box fontWeight="fontWeightBold">{props.header}</Box>
            </Typography>
            <Divider isLight={props.isLight} />
        </Box>
    );
};

export default SectionHeader;
