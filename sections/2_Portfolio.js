import { Container, Grid } from "@material-ui/core";
import React from "react";
import PortfolioItem from "../components/PortfolioItem";
import SectionHeader from "../components/SectionHeader";


const Portfolio = (props) => {
    return (
        <section id={props.id}>
            <Container>
                <SectionHeader header="Portfolio" />

                <Grid container direction="row" justify="center" spacing={2}>
                    {props.items.map((item, index) => (
                        <Grid key={index} item>
                            <PortfolioItem {...item} onPortfolioItemClicked={(id) => props.onPortfolioItemClicked(id)}></PortfolioItem>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default Portfolio;
