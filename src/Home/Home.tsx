import React, {FunctionComponent} from 'react';
import {Card, CardContent, Divider, Grid, IconButton, Typography} from "@material-ui/core";
import css from "./home.module.scss";
import avatar from "./me.jpg";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';

import Skills from "./Skills/Skills";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

interface OwnProps {}

type Props = OwnProps;

const Home: FunctionComponent<Props> = (props) => {

    return (
        <>
            <section className={css.topSection}>
                <div className={css.backgroundImage}/>

                <PersonalInfo/>
                <Skills/>

            </section>
        </>
    );
};

export default Home;
