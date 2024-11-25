import React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import {ListItemIcon} from "@material-ui/core";

export default function AnimatedTimeline() {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{borderTop: "3px solid #33ACEB"}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2021 - present"
                iconStyle={{ background: '#33ACEB', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">FRIDAY Insurance</h3>
                <h4 className="vertical-timeline-element-subtitle">Berlin, Germany</h4>
                <p>
                    Implementation of self-service features related to MyFriday and enhancing existing product functionalities in close collaboration with other teams and stakeholders, with a focus on ensuring customer satisfaction for Friday users.
                    <br/><br/>
                    Participating in software development, architectural decisions, cross-team discussions, and infrastructure management and monitoring.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{borderTop: "3px solid #33ACEB"}}
                date="2019 - 2021"
                iconStyle={{ background: '#33ACEB', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Dos Group SA</h3>
                <h4 className="vertical-timeline-element-subtitle">Mendrisio, Switzerland</h4>
                <p>
                    I worked on "Comunemio", a mobile application that aggregates various services for municipalities of the Swiss canton of Ticino, developing microservices using Java and Spring framework. Moreover I implemented the ReactJs Frontend and the backend service of the related back-office platform.
                    I had the opportunity to become familiar with Docker, Kubernetes for orchestrating containers and Jenkins for CI/CD.
                    <br/><br/>
                    I gave my contribution to an IoT system for tracking via Lora devices using Kotlin and RabbitMq, to an application used by Swiss casinos for managing player's responsible gaming limits and built a php/Laravel web application for internal use for a Swiss television broadcaster.
                    <br/><br/>
                    Thanks also to an enthusiastic team we are growing together, practicing TDD and Clean Code.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{borderTop: "3px solid #33ACEB"}}
                date="2018 - 2019"
                iconStyle={{ background: '#33ACEB', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Restart38</h3>
                <h4 className="vertical-timeline-element-subtitle">Pavia, Italy</h4>
                <p>
                    I worked on the backend of various web applications for different customers, collaborating directly with front end developers and graphic designers.
                    <br/><br/>
                    Thanks to this experience, I have improved my self-organization skills.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{borderTop: "3px solid #33ACEB"}}
                date="2016 - 2018"
                iconStyle={{ background: '#33ACEB', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">eWitness Srl</h3>
                <h4 className="vertical-timeline-element-subtitle">Milan, Italy</h4>
                <p>
                    I implemented solutions, for the import and the secure archiving of documents to support companies in the dematerialization process, using Java programming language.
                    The maintenance of the eWitness digital archiving system was one of my responsabilities.
                    <br/><br/>
                    I developed small functionalities of a web application in which I approached for the first time the MEAN stack.                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{borderTop: "3px solid #768CC2"}}
                date="BSc Internship"
                iconStyle={{ background: '#768CC2', color: '#fff' }}
                icon={<HomeWorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Elmec Informatica</h3>
                <h4 className="vertical-timeline-element-subtitle">Varese, Italy</h4>
                <p>
                    Updating, restyling and adding new features to the company e-learning platform, based on Moodle.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{borderTop: "3px solid #8F2710"}}
                date="2012 - 2015"
                iconStyle={{ background: '#8F2710', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">University of Insubria</h3>
                <h4 className="vertical-timeline-element-subtitle">Varese, Italy</h4>
                <p>
                    Bachelor's Degree in Computer Science and Technology
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: '#134f5c', color: '#fff' }}
                icon={<ListItemIcon/>}
            />
        </VerticalTimeline>
    );
}
