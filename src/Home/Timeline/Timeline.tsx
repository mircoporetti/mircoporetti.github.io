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
                        <Typography variant={"h3"} className={css.workingExperienceTitle} align={"left"}>
                            Working Experience
                        </Typography>
                        <Typography variant={"h6"} className={css.timelineTitle} align={"center"}>Now</Typography>
                        <div className={css.timelineContainer}>
                            <AnimatedTimeline/>
                        </div>
                    </Grid>
                </Grid>
        </>
    );
};

export default Timeline;
