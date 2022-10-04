import React, {FunctionComponent} from 'react';
import {Grid, Typography} from "@material-ui/core";
import css from "./home.module.css";
import Timeline from "./Timeline/Timeline";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Skills from "./Skills/Skills";

interface OwnProps {}

type Props = OwnProps;

const Home: FunctionComponent<Props> = (props) => {

    return (
        <>
            <section className={css.topSection}>
                <div className={css.backgroundImage}/>

                <PersonalInfo/>

                <Grid container justifyContent={"center"} className={css.aboutMeGrid}>
                    <Grid item xs={10} sm={8} md={7}>
                        <Typography variant={'h3'} className={css.aboutMe}>About me</Typography>
                        <Typography variant={'h6'} className={css.description}>
                            Hello, I'm Mirco!
                            Enthusiastic software developer with a constant desire to grow and learn new things.
                            I like to write readable, testable and maintainable code to build quality software.
                            <br/>
                            I believe in effective communication and clean code.
                            <br/><br/>
                            And what else...? I love to play guitar and travel with my camera!
                        </Typography>
                    </Grid>
                </Grid>

                <Skills/>
                <Timeline/>

            </section>
        </>
    );
};

export default Home;
