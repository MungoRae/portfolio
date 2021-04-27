import React from "react";
import Image from "next/image";
import { Box, createMuiTheme, Grid, Typography } from "@material-ui/core";
import Divider from "../components/Divider";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { makeStyles, ThemeProvider } from "@material-ui/styles";

const textItems = ["Android Expert", "iOS Developer", "Front End Specialist"];

const useStyles = makeStyles((theme) => ({
    textItem: {
        textAlign: "center",
    },
}));

const whiteTextTheme = createMuiTheme({
    palette: {
        text: {
            primary: "#fff",
        },
    },
});

const Me = () => {
    const classes = useStyles();

    return (
        <Box
            component="header"
            pt={24}
            pb={12}
            color="white"
            style={{ backgroundImage: "url('/img/background.jpg')" }}
        >
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
                    <ThemeProvider theme={whiteTextTheme}>
                        <Divider isLight="true" />
                    </ThemeProvider>
                </Box>
                <Grid container justify="center" alignItems="center">
                    {textItems.map((item, index) => (
                        <Grid
                            key={index}
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={2}
                            className={classes.textItem}
                        >
                            <Typography component="span" variant="h5">
                                {item}
                            </Typography>
                            <Box component="span" ml={2}>
                                <CheckCircleOutlineIcon />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Me;
