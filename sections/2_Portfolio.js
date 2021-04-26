import { Container, Grid } from "@material-ui/core";
import React from "react";
import PortfolioItem from "../components/PortfolioItem";
import SectionHeader from "../components/SectionHeader";

// Android
// iOS
// ReactJS
// Linux
// Docker
const items = [
    {
        id: 0,
        title: "Clydesdale Bank",
        description: "",
        image: "/img/portfolio/clydesdale.png",
    },
    {
        id: 1,
        title: "Healthcare",
        description: "",
        image: "/img/portfolio/floodlight.png",
    },
    {
        id: 2,
        title: "Debenhams",
        description: "",
        image: "/img/portfolio/debenhams.jpg",
    },
    {
        id: 3,
        title: "Mothercare",
        description: "",
        image: "/img/portfolio/mothercare.jpg",
    },
    {
        id: 4,
        title: "Desana",
        description: "",
        image: "/img/portfolio/desanalogo.png",
    },
    {
        id: 5,
        title: "Welcome to Scotland",
        description: "",
        image: "/img/portfolio/wts.png",
    },
];

const Portfolio = () => {
    return (
        <section>
            <Container>
                <SectionHeader header="Portfolio" />

                <Grid container direction="row" justify="center" spacing={2}>
                    {items.map((item, index) => (
                        <Grid key={index} item>
                            <PortfolioItem {...item}>

                            </PortfolioItem>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default Portfolio;
