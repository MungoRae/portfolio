import {
    Box,
    Button,
    Container,
    createMuiTheme,
    Grid,
    Typography,
} from "@material-ui/core";
import React from "react";
import { LinkedIn, Twitter } from "@material-ui/icons";
import { makeStyles, ThemeProvider } from "@material-ui/styles";

const whiteTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#fff",
        },
    },
});

const useStyles = makeStyles((theme) => ({
    header: {
        textTransform: "uppercase",
        marginBottom: theme.spacing(4),
        fontWeight: "bold",
    },
    item: {
        textAlign: "center",
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <Box
            component="footer"
            bgcolor="primary.main"
            color="white"
            pb={8}
            pt={8}
        >
            <Container>
                <Grid container direction="row" justify="center">
                    <Grid item lg={6} className={classes.item}>
                        <Typography variant="h5" className={classes.header}>
                            Location
                        </Typography>
                        <Typography variant="body1">
                            Edinburgh,
                            <br />
                            United Kingdom
                        </Typography>
                    </Grid>
                    <Grid item lg={6} className={classes.item}>
                        <Typography variant="h5" className={classes.header}>
                            Around the web
                        </Typography>
                        <ThemeProvider theme={whiteTheme}>
                            <Button
                                variant="outlined"
                                endIcon={<LinkedIn />}
                                color="primary"
                                className={classes.button}
                            >
                                LinkedIn
                            </Button>
                            <Button
                                variant="outlined"
                                endIcon={<Twitter />}
                                color="primary"
                                className={classes.button}
                            >
                                Twitter
                            </Button>
                        </ThemeProvider>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
