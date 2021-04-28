import {
    Box,
    Button,
    CircularProgress,
    Container,
    FormHelperText,
    Grid,
    TextField,
    Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import SendIcon from "@material-ui/icons/Send";
import emailjs from "emailjs-com";
import isEmail from 'validator/lib/isEmail';

const ContactUs = (props) => {
    const [name, setName] = useState("");
    const [replyTo, setReplyTo] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [emailHelperText, setEmailHelperText] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");
        setSuccess("");

        const data = {
            name: name,
            message: message,
            reply_to: replyTo,
        }
        emailjs
            .send(
                "service_9z72odi",
                "template_cm956wn",
                data,
                "user_ByRGUCKTStVUgJxWsjhS6"
            )
            .then(
                () => {
                    setName("");
                    setReplyTo("");
                    setMessage("");
                    setLoading(false);
                    setSuccess("Message sent successfully");
                },
                () => {
                    setLoading(false);
                    setError(
                        "Sorry, this message has failed to send. Please use the social buttons below to contact me."
                    );
                }
            );
    };

    const onEmailBlur = (e) => {
        const email = e.target.value;
        const isValid = isEmail(email);
        if (!isValid) {
            setEmailHelperText("Your email isn't recognized as valid. Please recheck.");
        } else {
            setEmailHelperText("");
        }
    }
    return (
        <Box id={props.id} component="section" pb={8}>
            <Container maxWidth="sm">
                <SectionHeader header="Contact Me" />
                <form id="contactForm" name="sentMessage" noValidate>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <TextField
                                id="name"
                                label="Name"
                                variant="outlined"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="email"
                                label="Email Address"
                                type="email"
                                variant="outlined"
                                value={replyTo}
                                onChange={(e) => setReplyTo(e.target.value)}
                                onBlur={onEmailBlur}
                                error={emailHelperText ? true : false}
                                helperText={emailHelperText}
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
                                rows={10}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </Grid>
                        <Grid item>
                            <FormHelperText error={true}>
                                {error}
                            </FormHelperText>
                        </Grid>

                        <Grid item>
                            <FormHelperText error={false}>
                                {success}
                            </FormHelperText>
                        </Grid>
                        <Grid item>
                            <div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    disabled={loading}
                                    endIcon={<SendIcon />}
                                    onClick={sendEmail}
                                >
                                    {loading ? (
                                        <CircularProgress size={24} />
                                    ) : (
                                        "Send"
                                    )}
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </Box>
    );
};

export default ContactUs;
