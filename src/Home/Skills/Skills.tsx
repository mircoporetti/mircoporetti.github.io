import React, { FunctionComponent } from 'react';
import {Card, CardContent, Container, Divider, Grid, Typography} from "@material-ui/core";
import css from "./skills.module.scss";
import SkillBar from "react-skillbars";

interface OwnProps {}

type Props = OwnProps;

const Skills: FunctionComponent<Props> = (props) => {

    const languages = [
        {type: "Java", level: 95},
        {type: "Sql", level: 90},
        {type: "Php", level: 70},
        {type: "Kotlin", level: 65},
        {type: "Javascript", level: 50},
        {type: "Typescript", level: 50},
        {type: "Elixir", level: 5},
    ];
    const frameworks = [
        {type: "Spring", level: 90},
        {type: "Laravel", level: 65},
        {type: "ReactJs", level: 50},
        {type: "AngularJs", level: 10}
    ];

    const others = [
        {type: "TDD", level: 65},
        {type: "Docker", level: 50},
        {type: "Kubernetes", level: 50}
    ];

    const colors = {
        bar: '#800000',
        title: {
            text: '#134f5c',
            background: 'white'
        }
    }

    return (
        <>
            <Container maxWidth={false}>
                <Grid container justify={"center"} className={css.skillsGrid} spacing={4}>
                    <Grid item xs={10} sm={8} md={4}>
                        <Card>
                            <CardContent>
                                <Grid container justify={"center"} spacing={2}>
                                    <Grid item xs={12} sm={7} md={8}>
                                        <Typography variant={"h6"} className={css.skillsTitle} align={"center"}>Programming Languages</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={7} md={10}>
                                        <SkillBar animationDelay={0} skills={languages} colors={colors}/>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={10} sm={8} md={4}>
                        <Card>
                            <CardContent>
                                <Grid container justify={"center"} spacing={2}>
                                    <Grid item xs={12} sm={7} md={8}>
                                        <Typography variant={"h6"} className={css.skillsTitle} align={"center"}>Frameworks and Libraries</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={7} md={8}>
                                        <SkillBar animationDelay={0} skills={frameworks} colors={colors}/>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={10} sm={8} md={4}>
                        <Card>
                            <CardContent>
                                <Grid container justify={"center"} spacing={2}>
                                    <Grid item xs={12} sm={7} md={8}>
                                        <Typography variant={"h6"} className={css.skillsTitle} align={"center"}>Other stuff</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={7} md={8}>
                                        <SkillBar animationDelay={0} skills={others} colors={colors}/>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Skills;
