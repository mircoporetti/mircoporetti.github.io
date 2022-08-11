import React, {FunctionComponent} from 'react';
import {Avatar, Card, CardContent, Chip, Container, Grid} from "@material-ui/core";
import css from "./skills.module.css";

interface OwnProps {}

type Props = OwnProps;

const Skills: FunctionComponent<Props> = (props) => {

    return (
        <>
            <Container maxWidth={false}>
                <Grid container justify={"center"} className={css.skillsGrid} spacing={2}>
                    <Grid item xs={11} sm={8} md={7}>
                        <Card>
                            <CardContent>
                                <Grid container justify={"center"} spacing={1}>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined"  avatar={<Avatar>J</Avatar>} label="Java" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined"  avatar={<Avatar>S</Avatar>} label="Spring" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined"  avatar={<Avatar>S</Avatar>} label="Micronaut" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined" avatar={<Avatar>M</Avatar>} label="Typescript" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined"  avatar={<Avatar>M</Avatar>} label="ReactJs" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined"  avatar={<Avatar>T</Avatar>} label="TDD" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined"  avatar={<Avatar>K</Avatar>} label="Kubernetes"/>
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined"  avatar={<Avatar>M</Avatar>} label="Docker" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined"  avatar={<Avatar>M</Avatar>} label="Kotlin" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined" avatar={<Avatar>M</Avatar>} label="Sql" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined" avatar={<Avatar>M</Avatar>} label="Php" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined" avatar={<Avatar>M</Avatar>} label="Laravel" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined" avatar={<Avatar>M</Avatar>} label="Terraform" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined" avatar={<Avatar>M</Avatar>} label="Gitlab CI/CD" />
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
