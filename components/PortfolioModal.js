import React from "react";
import Image from "next/image";
import {
    AppBar,
    Box,
    Dialog,
    Grid,
    IconButton,
    Toolbar,
    Typography,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    title: {
        flexGrow: 1,
    },
});

const PortfolioModal = (props) => {
    const classes = useStyles();
    return (
        <div key={props.item.id}>
            <Dialog
                open={props.open}
                onClose={props.onClose}
                aria-labelledby={props.item.title}
                aria-describedby={props.item.description.join("\n")}
            >
                <AppBar position="relative">
                    <Toolbar>
                        <Typography variant="h4" className={classes.title}>
                            {props.item.title}
                        </Typography>
                        <IconButton color="inherit" onClick={props.onClose}>
                            <CancelIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Box p={1}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        spacing={2}
                    >
                        {props.item.detailImages.map((image, index) => (
                            <Grid item key={index}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width="200"
                                    height="434"
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box p={4}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        spacing="2"
                    >
                        {props.item.description.map((d, i) => (
                            <Grid item key={i}>
                                <Typography variant="body1">
                                    {d}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Dialog>
        </div>
    );
};

export default PortfolioModal;
