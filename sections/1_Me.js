import React from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@material-ui/core";
import Divider from "../components/Divider";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { makeStyles } from "@material-ui/styles";

const textItems = ["Android Expert", "iOS Developer", "Front End Specialist"];

const useStyles = makeStyles((theme) => ({
    textItem: {
        textAlign: "center",
    },
}));

const Me = () => {
    const classes = useStyles();

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
                        {textItems.map((item) => (
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={2}
                                className={classes.textItem}
                            >
                                <Typography component="span" variant="h5">{item}</Typography>
                                <Box component="span" ml={2}>
                                    <CheckCircleOutlineIcon />
                                </Box>
                                {/* <Grid
                                    container
                                    direction="row"
                                    alignItems="center"
                                    justify="center"
                                >
                                    <Grid item>
                                        <Typography variant="h5">
                                            {item}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Box ml={2}>
                                            <CheckCircleOutlineIcon />
                                        </Box>
                                    </Grid>
                                </Grid> */}
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Me;
