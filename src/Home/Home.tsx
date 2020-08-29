import React, {FunctionComponent} from 'react';
import {Card, CardContent, Container, Divider, Grid, IconButton, Typography} from "@material-ui/core";
import css from "./home.module.scss";

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

                <Grid container justify={"center"} className={css.aboutMeGrid}>
                    <Grid item xs={10} sm={8} md={7}>
                        <Typography variant={'h3'} className={css.aboutMe}>About me</Typography>
                        <Typography variant={'h6'} className={css.description}>
                            Hello, I'm Mirco!
                            I am an Enthusiastic software developer with a constant desire to grow and learn new things.
                            I like to write readable, testable and maintainable code to build quality software.
                            My focus is to improve my agility day by day, sharing knowledge among members of the team and collaborating to grow together.
                            <br/><br/>
                            And what else...? I love to play guitar and travel with my camera!
                        </Typography>
                    </Grid>
                </Grid>

                <Skills/>

            </section>
        </>
    );
};

export default Home;
