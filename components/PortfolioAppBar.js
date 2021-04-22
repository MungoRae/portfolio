import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        minHeight: 110,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const PortfolioAppBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <div className="container mx-auto">
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h4" className={classes.title}>
                            Refactoring The World
                        </Typography>
                        <Button color="inherit">About</Button>
                        <Button color="inherit">Portfolio</Button>
                        <Button color="inherit">Contact</Button>
                    </Toolbar>
                </div>
            </AppBar>
        </div>
    );
};

export default PortfolioAppBar;
