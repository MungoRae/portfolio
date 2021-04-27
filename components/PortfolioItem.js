import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        width: 300,
    },
    content: {
        height: "120px",
    },
    media: {
        height: 140,
    },
});

export default function PortfolioItem(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={3}>
            <CardActionArea onClick={() => props.onPortfolioItemClicked(props.id)}>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Company Logo"
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {props.summary}
                    </Typography>
                    {/* {params.description.map((d) => (
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {d}
                        </Typography>
                    ))} */}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
