import React from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@material-ui/core";
import Divider from "../components/Divider";
import { LabelImportant } from "@material-ui/icons";

const Me = () => {
    return (
        <Box
            component="header"
            pt={24}
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
                    <Box pb={4}>
                        <Divider isLight="true" />
                    </Box>
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item>
                            <Typography variant="h5">
                                Mobile Developer
                            </Typography>
                        </Grid>
                        <Grid item>
                            <LabelImportant />
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">
                                Front End Developer
                            </Typography>
                        </Grid>
                        <Grid item>
                            <LabelImportant />
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">
                                Open Source Advocate
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Me;
