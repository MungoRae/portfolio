import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    divider: {
        height: "0.25rem",
        width: "8rem",
    },
});

const Divider = (params) => {
    const classes = useStyles();

    return (
        <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
            <Grid item>
                <Box component="div"
                    className={classes.divider}
                    bgcolor={params.isLight ? "white" : "text.primary"}
                />
            </Grid>
            <Grid item>
                <Box fontSize={32}>
                    <FontAwesomeIcon icon={faStar} />
                </Box>
            </Grid>
            <Grid item>
                <Box
                    className={classes.divider}
                    bgcolor={params.isLight ? "white" : "text.primary"}
                />
            </Grid>
        </Grid>
    );
};

export default Divider;
