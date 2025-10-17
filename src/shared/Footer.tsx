import React, { FunctionComponent } from 'react';
import { Typography, Box, Grid } from "@material-ui/core";
import css from "./footer.module.css";

interface OwnProps {}

type Props = OwnProps;

const Footer: FunctionComponent<Props> = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box component="footer" className={css.footer}>
            <Grid container justifyContent={"center"}>
                <Grid item xs={11} sm={8} md={7}>
                    <Typography variant="body2" className={css.copyright}>
                        © {currentYear} Mirco Poretti. All rights reserved.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;