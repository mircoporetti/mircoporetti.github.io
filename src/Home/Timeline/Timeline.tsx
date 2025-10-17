import React, {FunctionComponent} from 'react';
import {Grid, Typography} from "@material-ui/core";
import css from "./timeline.module.css";
import AnimatedTimeline from "./AnimatedTimeline";

interface OwnProps {}

type Props = OwnProps;

const Timeline: FunctionComponent<Props> = () => {

    return (
        <>
            <Grid container justifyContent={"center"} className={css.timelineGrid} spacing={2}>
                    <Grid item xs={11} sm={8} md={7}>
                        <Grid container justifyContent={"center"} spacing={2}>
                            <Grid item xs={12} sm={7} md={10}>
                                <Typography variant={"h6"} className={css.timelineTitle} align={"center"}>Now</Typography>
                            </Grid>
                            <Grid item xs={12} sm={10} md={10}>
                                <AnimatedTimeline/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
        </>
    );
};

export default Timeline;
