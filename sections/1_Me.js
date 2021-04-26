import React from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@material-ui/core";
import Divider from "../components/Divider";

const Me = () => {
    return (
        <Box
            component="header"
            pt={12}
            pb={12}
            style={{ backgroundImage: "url('/img/background.jpg')" }}
        >
            <Box color="white">
                <Grid container direction="column" alignItems="center">
                    <Box mb={8}>
                        <Image
                            src="/img/profile.png"
                            alt="Profile picture of Alex Macrae"
                            width="240"
                            height="240"
                        />
                    </Box>
                    <Typography variant="h2">
                        <Box fontWeight="fontWeightMedium">Alex Macrae</Box>
                    </Typography>
                    <Divider isLight="true" />
                    <Typography variant="h5">
                        Android Developer - iOS Developer - Linux Lover
                    </Typography>
                </Grid>
            </Box>
        </Box>
    );
};

export default Me;
