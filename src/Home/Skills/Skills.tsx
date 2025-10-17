import React, {FunctionComponent} from 'react';
import {Avatar, Card, CardContent, Chip, Grid} from "@material-ui/core";
import css from "./skills.module.css";

interface OwnProps {}

type Props = OwnProps;

const Skills: FunctionComponent<Props> = (props) => {

    return (
        <>
            <Grid container justifyContent={"center"} className={css.skillsGrid} spacing={2}>
                    <Grid item xs={11} sm={8} md={7}>
                        <Card>
                            <CardContent>
                                <Grid container justifyContent={"center"} spacing={1}>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined"  avatar={<Avatar>J</Avatar>} label="Java" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined"  avatar={<Avatar>K</Avatar>} label="Kotlin" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined"  avatar={<Avatar>S</Avatar>} label="Spring" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined"  avatar={<Avatar>M</Avatar>} label="Micronaut" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined" avatar={<Avatar>T</Avatar>} label="Typescript" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined"  avatar={<Avatar>R</Avatar>} label="ReactJs" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined"  avatar={<Avatar>T</Avatar>} label="TDD" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined"  avatar={<Avatar>K</Avatar>} label="Kubernetes"/>
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined"  avatar={<Avatar>D</Avatar>} label="Docker" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined" avatar={<Avatar>S</Avatar>} label="Sql" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined" avatar={<Avatar>P</Avatar>} label="Php" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined" avatar={<Avatar>L</Avatar>} label="Laravel" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined" avatar={<Avatar>T</Avatar>} label="Terraform" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined" avatar={<Avatar>G</Avatar>} label="Gitlab CI/CD" />
                                    </Grid>
                                    <Grid item sm={4} md={3} lg={2}>
                                        <Chip className={css.coloredBorder} variant="outlined" avatar={<Avatar>H</Avatar>} label="Helm" />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
        </>
    );
};

export default Skills;
