import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import SectionHeader from "../components/SectionHeader";

const words = [
    { text: "Docker", size: 4 },
    { text: "Jira", size: 3 },
    { text: "Testing", size: 5 },
    { text: "Machine Learning", size: 1 },
    { text: "Rust", size: 1 },
    { text: "Jenkins", size: 4 },
    { text: "Coroutines", size: 3 },
    { text: "iOS", size: 5 },
    { text: "TypeScript", size: 4 },
    { text: "Android", size: 6 },
    { text: "Linux", size: 4 },
    { text: "Kotlin", size: 6 },
    { text: "MVP", size: 3 },
    { text: "Dagger", size: 4 },
    { text: "C#", size: 3 },
    { text: "Java", size: 6 },
    { text: "Raspberry Pi", size: 4 },
    { text: "Ansible", size: 2 },
    { text: "Python", size: 4 },
    { text: "Objective C", size: 3 },
    { text: "Nginx", size: 1 },
    { text: "Jetpack Compose", size: 3 },
    { text: "ReactJS", size: 5 },
    { text: "Espresso", size: 4 },
    { text: "JavaScript", size: 4 },
    { text: "Git", size: 5 },
    { text: "PHP", size: 4 },
    { text: "Swift", size: 3 },
    { text: "Unity", size: 2 },
    { text: "MVVM", size: 3 },
    { text: "Haskell", size: 1 },
    { text: "Xamarin", size: 2 },
    { text: "RxJava", size: 4 },
];

const sizeToFontSize = (size) => {
    switch (size) {
        case 1:
            return 22;
        case 2:
            return 28;
        case 3:
            return 36;
        case 4:
            return 50;
        case 5:
            return 72;
        case 6:
            return 96;
    }
};
/**
 *
 * @returns Word collage of technologies I have learned
 */
const AlwaysLearning = (props) => {
    return (
        <div id={props.id}>
            <Container>
                <SectionHeader header="Always Learning" />
                <Paper
                    elevation={3}
                    style={{ padding: "16px", marginBottom: "32px" }}
                >
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        {words.map((word, index) => (
                            <Grid key={index} item>
                                <Typography variant="body1">
                                    <Box
                                        fontSize={sizeToFontSize(word.size)}
                                        lineHeight={1}
                                    >
                                        {word.text}
                                    </Box>
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
};

export default AlwaysLearning;
