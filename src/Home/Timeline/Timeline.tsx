import React, {FunctionComponent} from 'react';
import {Card, CardContent, Container, Grid, Typography} from "@material-ui/core";
import css from "./timeline.module.css";
import MaterialTimeline from "./MaterialTimeline";

interface OwnProps {}

type Props = OwnProps;

const Timeline: FunctionComponent<Props> = (props) => {

    return (
        <>
            <Container maxWidth={false}>
                <Grid container justify={"center"}>
                    <Grid item xs={11} sm={11} md={11}>
                        <Grid container justify={"center"} className={css.timelineGrid} spacing={2}>
                            <Grid item xs={11} sm={11} lg={10} xl={4}>
                                <Grid container justify={"center"} spacing={2}>
                                    <Grid item xs={12} sm={7} md={10}>
                                        <Typography variant={"h6"} className={css.timelineTitle} align={"center"}>Now</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={10} md={10}>
                                        <MaterialTimeline/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Timeline;
