import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import SectionHeader from "../components/SectionHeader";

const About = () => {
    return (
        <section>
            <Box bgcolor="secondary.main" color="white" pb={6}>
                <Container>
                    <SectionHeader isLight header="About" />
                    <Grid container direction="row" justify="center" spacing={2}>
                        <Grid item xs={3}>
                            <Typography variant="body1">
                                I am an enthusiastic mobile developer with 4
                                years of experience. I build enterprise and
                                consumer apps for Android and iOS, always making
                                sure that the apps are robust, well written, and
                                easy to maintain.
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="body1">
                                Mobile devices are the sum total of consumer
                                technology today with the ability to locate and
                                direct the user, keep in constant contact,
                                provide an amazing social experience and
                                interact in a way only thought possible in
                                sci-fi before now.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </section>
    );
};

export default About;
