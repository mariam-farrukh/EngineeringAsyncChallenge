import React from "react";
import { Box, Card, Grid, Typography } from "@material-ui/core";
import { makeStyles, alpha } from "@material-ui/core/styles";
import hero from "../media/hero.png";
import BL_Logo from "../media/BL_LogoBasic.png";

const useStyles = makeStyles({
  logoStyle: {
    height: "6rem",
    width: "6rem",
  },
  headerBackground: {
    backgroundImage: `url(${hero})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: 550,
    color: "white",
  },
  imageColor: {
    backgroundColor: alpha("#233dff", 0.5),
    height: 550,
  },
});

function CompanyBanner() {
  const classes = useStyles();
  return (
    <Grid>
      <Card className={classes.headerBackground}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignContent="center"
          className={classes.imageColor}
        >
          <Grid>
            <img
              className={classes.logoStyle}
              src={BL_Logo}
              alt={"BetterLesson Logo"}
            />
          </Grid>
          <Typography variant="h2" component="h2">
            <Box fontWeight="bold">{"BetterLesson"}</Box>
          </Typography>
          <Typography variant="h2" component="h2">
            <Box fontWeight="bold">{"Professional Coaching"}</Box>
          </Typography>
          <Typography variant="h6" component="h6">
            {"PROFESSIONAL COACH SEMINARS & MENTORSHIP"}
          </Typography>
        </Grid>
      </Card>
    </Grid>
  );
}

export default CompanyBanner;
