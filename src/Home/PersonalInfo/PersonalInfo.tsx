import React, {FunctionComponent} from 'react';
import css from "./personalInfo.module.css";
import {Card, CardContent, Divider, Grid, IconButton, Typography} from "@material-ui/core";
import avatar from "../me.jpg";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import StorageIcon from '@material-ui/icons/Storage';
interface OwnProps {}

type Props = OwnProps;

const PersonalInfo: FunctionComponent<Props> = (props) => {

    return (
        <>
            <Grid container justify={"center"} className={css.meGrid}>
                <Grid item xs={11} sm={8} md={7}>
                    <Card>
                        <CardContent>
                            <Grid container justify={"center"} spacing={2}>
                                <Grid item xs={12} sm={7} md={5} className={css.avatarWrapper}>
                                    <img src={avatar} alt="Logo" className={css.avatar} />
                                </Grid>
                                <Grid item xs={12} sm={7} md={7} className={css.personalInfoWrapper}>
                                    <Typography variant={"h6"} className={css.hello}>Hi! I am</Typography>
                                    <Typography variant={"h3"} className={css.nameSurname}>Mirco Poretti</Typography>
                                    <Typography variant={"h4"} className={css.profession}>Software Developer</Typography>
                                    <Divider variant={"middle"}/>
                                    <section className={css.basicInfoSection}>
                                        <Grid container justify={"center"} >
                                            <Grid item xs={1} sm={1} md={1}>
                                                <CalendarTodayIcon />
                                            </Grid>
                                            <Grid item xs={9} sm={7} md={7}>
                                                <Typography variant={"h6"} className={css.basicInfo}>17th July, 1990</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container justify={"center"} >
                                            <Grid item xs={1} sm={1} md={1}>
                                                <HomeWorkIcon />
                                            </Grid>
                                            <Grid item xs={9} sm={7} md={7}>
                                                <Typography variant={"h6"} className={css.basicInfo}>Varese - ITALY</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container justify={"center"} >
                                            <Grid item xs={1} sm={1} md={1}>
                                                <MailIcon />
                                            </Grid>
                                            <Grid item xs={9} sm={7} md={7}>
                                                <Typography variant={"h6"} className={css.basicInfo}>mircoporetti@gmail.com</Typography>
                                            </Grid>
                                        </Grid>
                                    </section>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent className={css.socialSection}>
                            <Grid container justify={"center"} className={css.socialContainer}>
                                <Grid item sm={2}>
                                    <IconButton
                                        href={"https://www.linkedin.com/in/mirco-poretti-197282b4"}
                                        target={"_blank"}
                                    >
                                        <LinkedInIcon className={css.socialIcon}/>
                                    </IconButton>
                                </Grid>
                                <Grid item sm={2}>
                                    <IconButton
                                        href={"https://stackoverflow.com/users/story/3748710"}
                                        target={"_blank"}
                                    >
                                        <StorageIcon className={css.socialIcon}/>
                                    </IconButton>
                                </Grid>
                                <Grid item sm={2}>
                                    <IconButton
                                        href={"https://github.com/mircoporetti"}
                                        target={"_blank"}
                                    >
                                        <GitHubIcon className={css.socialIcon}/>
                                    </IconButton>
                                </Grid>
                                <Grid item sm={2}>
                                    <IconButton
                                        href={"https://www.instagram.com/mircoporetti"}
                                        target={"_blank"}
                                    >
                                        <InstagramIcon className={css.socialIcon}/>
                                    </IconButton>
                                </Grid>
                                <Grid item sm={2}>
                                    <IconButton
                                        href={"https://www.facebook.com/mirco.poretti"}
                                        target={"_blank"}
                                    >
                                        <FacebookIcon className={css.socialIcon}/>
                                    </IconButton>
                                </Grid>
                                <Grid item sm={2}>
                                    <IconButton
                                        href={"https://www.youtube.com/channel/UCABfwPjAHHIM35Q1eECSK5g"}
                                        target={"_blank"}
                                    >
                                        <YouTubeIcon className={css.socialIcon}/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default PersonalInfo;
