import React, {FunctionComponent} from 'react';
import {Avatar, Card, CardContent, Chip, Container, Grid} from "@material-ui/core";
import css from "./skills.module.css";

interface OwnProps {}

type Props = OwnProps;

const Skills: FunctionComponent<Props> = (props) => {

    return (
        <>
            <Container maxWidth={false}>
                <Grid container justify={"center"}>
                    <Grid item xs={11} sm={8} md={9}>
                        <Grid container justify={"center"} className={css.skillsGrid} spacing={2}>
                            <Grid item xs={11} sm={11} lg={10} xl={10}>
                                <Card>
                                    <CardContent>
                                        <Grid container justify={"center"} spacing={1}>
                                            <Grid item sm={2}>
                                                <Chip avatar={<Avatar>J</Avatar>} label="Java" />
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Chip avatar={<Avatar>S</Avatar>} label="Spring" />
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Chip avatar={<Avatar>M</Avatar>} label="Typescript" />
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Chip avatar={<Avatar>M</Avatar>} label="ReactJs" />
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Chip avatar={<Avatar>T</Avatar>} label="TDD" />
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Chip avatar={<Avatar>K</Avatar>} label="Kubernetes"/>
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Chip avatar={<Avatar>M</Avatar>} label="Docker" />
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Chip avatar={<Avatar>M</Avatar>} label="Kotlin" />
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Chip avatar={<Avatar>M</Avatar>} label="Sql" />
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Chip avatar={<Avatar>M</Avatar>} label="Php" />
                                            </Grid>
                                            <Grid item sm={2}>
                                                <Chip avatar={<Avatar>M</Avatar>} label="Laravel" />
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Skills;
