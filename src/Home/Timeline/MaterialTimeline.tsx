import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import WorkIcon from '@material-ui/icons/Work';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: 'green',
    },
}));

export default function MaterialTimeline() {
    const classes = useStyles();

    return (
        <Timeline align="alternate">
            <TimelineItem>
                <TimelineOppositeContent>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <WorkIcon color={"primary"}/>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Dos Group SA - Mendrisio, Switzerland
                        </Typography>
                        <Typography>
                            I worked on "Comunemio", a mobile application that aggregates various services for municipalities of the Swiss canton of Ticino, developing microservices using Java and Spring framework. Moreover I implemented the ReactJs Frontend and the backend service of the related back-office platform.
                            I had the opportunity to become familiar with Docker, Kubernetes for orchestrating containers and Jenkins for CI/CD.
                            <br/><br/>
                            I gave my contribution to an IoT system for tracking via Lora devices, using Kotlin and RabbitMq and built a php/Laravel web application for internal use for a Swiss television broadcaster.
                            <br/><br/>
                            Thanks also to an enthusiastic team we are growing together, practicing TDD and Clean Code.
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        2018
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                        <WorkIcon color={"primary"}/>
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Restart38 - Pavia, Italy
                        </Typography>
                        <Typography>
                            I worked on the backend of various web applications for different customers, collaborating directly with front end developers and graphic designers.
                            <br/><br/>
                            Thanks to this experience, I have improved my self-organization skills.
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        2016
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <LaptopMacIcon color={"primary"}/>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            eWitness Srl - Milan, Italy
                        </Typography>
                        <Typography>
                            I implemented solutions, for the import and the secure archiving of documents to support companies in the dematerialization process, using Java programming language.
                            The maintenance of the eWitness digital archiving system was one of my responsabilities.
                            <br/><br/>
                            I developed small functionalities of a web application in which I approached for the first time the MEAN stack.
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail}/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Elmec Informatica - Varese, Italy
                        </Typography>
                        <Typography>
                            Updating, restyling and adding new features to the company e-learning platform, based on Moodle.
                            (Internship for BSc)
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        2015
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="inherit">
                        <SchoolIcon/>
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            University of Insubria - Varese, Italy
                        </Typography>
                        <Typography>Bachelor's Degree in Computer Science and Technology </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
