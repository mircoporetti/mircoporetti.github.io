import React, {FunctionComponent, useState} from 'react';
import {Avatar, Card, CardContent, Grid, Typography, IconButton} from "@material-ui/core";
import css from "./testimonials.module.css";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

interface Testimonial {
    name: string;
    role: string;
    company: string;
    feedback: string;
    avatar: string;
    imageName: string;
}

interface OwnProps {}

type Props = OwnProps;

const Testimonials: FunctionComponent<Props> = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
    };

    const goToNext = () => {
        setCurrentIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
    };

    const getVisibleCards = () => {
        const total = testimonials.length;
        const prevPrevIndex = currentIndex === 0 ? total - 2 : currentIndex === 1 ? total - 1 : currentIndex - 2;
        const prevIndex = currentIndex === 0 ? total - 1 : currentIndex - 1;
        const nextIndex = currentIndex === total - 1 ? 0 : currentIndex + 1;
        const nextNextIndex = currentIndex === total - 1 ? 1 : currentIndex === total - 2 ? 0 : currentIndex + 2;

        return [
            { testimonial: testimonials[prevPrevIndex], index: prevPrevIndex, position: 'far-left' },
            { testimonial: testimonials[prevIndex], index: prevIndex, position: 'left' },
            { testimonial: testimonials[currentIndex], index: currentIndex, position: 'center' },
            { testimonial: testimonials[nextIndex], index: nextIndex, position: 'right' },
            { testimonial: testimonials[nextNextIndex], index: nextNextIndex, position: 'far-right' }
        ];
    };

    const testimonials: Testimonial[] = [
        {
            name: "Jamie Su",
            role: "Product Manager",
            company: "FRIDAY Insurance",
            feedback: "It was a joy to work with Mirco together, at FRIDAY. As his Product Owner," +
                " I saw him always eager to tackle new challenges, thoughtfully and intelligently. For example," +
                " when it came to BE architecture, Mirco would plan well before executing – even under tight deadlines." +
                " Aside from his dedication, he also always brought kindness and genuine care, to every chat." +
                " I'm proud of what we achieved together, and I recommend him wholeheartedly.",
            avatar: "JS",
            imageName: "jamie"
        },
        {
            name: "Josimar Silva",
            role: "Staff Software Engineer",
            company: "FRIDAY Insurance",
            feedback: "I had the chance to collaborate with Mirco while he was a Senior Software Engineer on a team adjacent to mine." +
                " Although we weren't on the same team, our domains were closely aligned, and I was often involved in reviewing his code" +
                " and discussing architectural decisions." +
                "Mirco is inquisitive, pragmatic, and open to feedback." +
                "He approaches engineering with a strong belief in XP principles —TDD, continuous delivery, " +
                "and full-stack ownership— but always tempers theory with practical judgment. " +
                "He doesn't let dogma get in the way of working solutions." +
                "He has a strong eye for code quality and continually invests in sharpening his technical skills. " +
                "His curiosity and willingness to explore new technologies—both professionally and in side projects—reflect" +
                " a genuine commitment to learning and continuous improvement." +
                "It was always a constructive experience working with him, and I appreciated his thoughtful approach to problem-solving" +
                " and collaboration.",
            avatar: "JS",
            imageName: "josimar"
        },
        {
            name: "Brandon C. Roberts",
            role: "Senior Software Engineer",
            company: "FRIDAY Insurance",
            feedback: "Mirco is a great teammate and software engineer. I worked on the same team as Mirco for two years," +
                " and was impressed with his attitude, that he was always ready to. Additionally, " +
                "I was impressed with the way he treats his teammates, always with kindness and respect." +
                "He also pushes himself to become knowledgable with the full technology stack, such as Backend/ Frontend/ Dev Ops.",
            avatar: "BR",
            imageName: "brandon"
        },
        {
            name: "Mauro Cherchi",
            role: "Senior Software Engineer",
            company: "FRIDAY Insurance",
            feedback: "Mirco is a highly skilled and professional Software Engineer. He is very passionate about clean code" +
                " and software architecture and he cares a lot about quality and agility." +
                "Accountability and ownership are some of his core strengths together with politeness and openness to communication" +
                " and teamwork." +
                "He is always prepared to lead, while consistently keeping the door open for discussion and collaboration." +
                "He is a reliable team player you can always count on.",
            avatar: "MC",
            imageName: "mauro"
        },
        {
            name: "Hector Zea",
            role: "Frontend Software Engineer",
            company: "FRIDAY Insurance",
            feedback: "I had the privilege of working with Mirco as a backend teammate across multiple projects, " +
                "and it was truly one of the best professional experiences I've had." +
                "Mirco is highly skilled in backend development while also possessing a solid understanding of frontend dynamics," +
                " making him a versatile full-stack contributor. He excels in teamwork, actively listens," +
                " and provides insightful feedback to ensure high-quality software delivery." +
                "Whenever I had questions or ideas for improving frontend-backend integrations, Mirco was always the first to offer thoughtful perspectives." +
                " His deep backend expertise allowed him to analyze challenges holistically, " +
                "considering both scope and limitations—while consistently proposing effective solutions." +
                "Beyond his technical strengths, Mirco is incredibly responsible, focused, and receptive—all while maintaining a great sense of humor." +
                " Without a doubt, he is an exceptional team player.",
            avatar: "HZ",
            imageName: "hector"
        },
        {
            name: "Berat Rahmani",
            role: "Software Engineer",
            company: "eWitness",
            feedback: "I worked with Mirco on several projects and he had proved to be competent in every phase. He has " +
                "always shown his interest in learning new development technologies and he is always willing to improve his clean coding skills.",
            avatar: "BR",
            imageName: "berat"
        }
    ];

    const visibleCards = getVisibleCards();

    return (
        <>
            <Grid container justifyContent={"center"} className={css.testimonialsGrid} alignItems={"center"}>
                <Grid item className={css.navButtonContainer}>
                    <IconButton className={css.navButton} onClick={goToPrevious} size="small">
                        <ChevronLeftIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={10} sm={8} md={7}>
                    <Typography variant={"h3"} className={css.testimonialsTitle} align={"right"}>
                        What People Say
                    </Typography>
                    <div className={css.carouselContainer}>
                        <div className={css.carouselTrack}>
                            {visibleCards.map(({ testimonial, index, position }) => {
                                const positionClass = position === 'far-left' ? css.cardFarLeft :
                                                     position === 'left' ? css.cardLeft :
                                                     position === 'right' ? css.cardRight :
                                                     position === 'far-right' ? css.cardFarRight :
                                                     css.cardCenter;
                                return (
                                    <div className={`${css.carouselCard} ${positionClass}`} key={index}>
                                        <Card className={css.testimonialCard}>
                                            <CardContent>
                                                <div className={css.quoteIconWrapper}>
                                                    <FormatQuoteIcon className={css.quoteIcon} />
                                                </div>
                                                <div className={css.feedbackContainer}>
                                                    <Typography variant={"body1"} className={css.feedback}>
                                                        {testimonial.feedback}
                                                    </Typography>
                                                </div>
                                                <div className={css.authorSection}>
                                                    <Avatar
                                                        className={css.avatar}
                                                        src={`/images/testimonials/${testimonial.imageName}.jpg`}
                                                        alt={testimonial.name}
                                                    >
                                                        {testimonial.avatar}
                                                    </Avatar>
                                                    <div className={css.authorInfo}>
                                                        <Typography variant={"h6"} className={css.name}>
                                                            {testimonial.name}
                                                        </Typography>
                                                        <Typography variant={"body2"} className={css.role}>
                                                            {testimonial.role}
                                                        </Typography>
                                                        <Typography variant={"body2"} className={css.company}>
                                                            {testimonial.company}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Grid>
                <Grid item className={css.navButtonContainer}>
                    <IconButton className={css.navButton} onClick={goToNext} size="small">
                        <ChevronRightIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </>
    );
};

export default Testimonials;