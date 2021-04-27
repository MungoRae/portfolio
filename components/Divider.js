import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    divider: {
        height: "0.25rem",
        width: "8rem",
    },
}));

const Divider = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
        >
            <Grid item>
                <Box className={classes.divider} bgcolor={"text.primary"} />
            </Grid>
            <Grid item>
                <Typography variant="h5">
                    <FontAwesomeIcon icon={faStar} />
                </Typography>
            </Grid>
            <Grid item>
                <Box className={classes.divider} bgcolor={"text.primary"} />
            </Grid>
        </Grid>
    );
};

export default Divider;
