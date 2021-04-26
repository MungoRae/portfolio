import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
    Button,
    Container,
    IconButton,
    MenuItem,
    Menu,
    useScrollTrigger,
} from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        height: 44,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.up("md")]: {
            height: 90,
        },
    },
    scrolledToolbar: {
        height: 44,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        ...theme.typography.h5,
        [theme.breakpoints.up("md")]: {
            ...theme.typography.h4,
        },
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
}));

function ResizeToolbarScroll(props) {
    const classes = useStyles();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    return React.cloneElement(props.children, {
        className: trigger ? classes.scrolledToolbar : classes.toolbar,
    });
}

const PortfolioAppBar = (params) => {
    const classes = useStyles();

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {params.menuItems.map((item) => (
                <MenuItem>
                    <p>{item}</p>
                </MenuItem>
            ))}
        </Menu>
    );

    return (
        <div className={classes.root}>
            <AppBar elevation={3}>
                <Container>
                    <ResizeToolbarScroll>
                        <Toolbar>
                            <Typography variant="h4" className={classes.title}>
                                Refactoring The World
                            </Typography>
                            <div className={classes.sectionDesktop}>
                                {params.menuItems.map((item) => (
                                    <Button color="inherit">
                                        <p>{item}</p>
                                    </Button>
                                ))}
                            </div>
                            <div className={classes.sectionMobile}>
                                <IconButton
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </div>
                        </Toolbar>
                    </ResizeToolbarScroll>
                </Container>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
};

export default PortfolioAppBar;
