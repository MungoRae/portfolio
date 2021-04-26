import { Box, Button, Container, Grid, TextField } from "@material-ui/core";
import React from "react";
import SectionHeader from "../components/SectionHeader";
import SendIcon from '@material-ui/icons/Send'

const ContactUs = () => {
    return (
        <Box component="section" pb={8}>
            <Container maxWidth="sm">
                <SectionHeader header="Contact Me" />
                <form id="contactForm" name="sentMessage" noValidate>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <TextField
                                id="name"
                                label="Name"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="email"
                                label="Email Address"
                                type="email"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="message"
                                label="Message"
                                multiline
                                variant="outlined"
                                fullWidth
                                size="medium"
                                rows={4}
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                endIcon={<SendIcon />}
                            >
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </Box>
    );
};

export default ContactUs;
