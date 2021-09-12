import React from "react";
import {
  Box,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import coachingImg from "../media/coaching.png";

const useStyles = makeStyles({
  imgStyle: {
    width: "100%",
    height: "auto",
  },
  container: {
    marginTop: "1rem",
    marginBottom: "1rem",
    border: "#ececec solid 1px",
    color: "#233dff",
  },
  coachesContainer: {
    backgroundColor: "#f9f9f9",
  },
});

const availableCoach = (name, available, industry) => {
  return (
    <TableRow key={name}>
      <TableCell>{name}</TableCell>
      <TableCell align="center">{available}</TableCell>
      <TableCell>{industry}</TableCell>
    </TableRow>
  );
};

// not how dates would be stored if came from data, but works for now
const currentCoachesData = [
  {
    coachName: "Jessica D.",
    availableDate: "11/6/22",
    coachIndustry: "Professional Services",
  },
  {
    coachName: "David F.",
    availableDate: "8/5/21",
    coachIndustry: "Sports/Fitness",
  },
  {
    coachName: "Keir Y.",
    availableDate: "4/12/22",
    coachIndustry: "E-Sports",
  },
];

function CurrentCoaches() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid container item xs={12} sm={6}>
        <img
          className={classes.imgStyle}
          src={coachingImg}
          alt={"Online coaching"}
        />
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={6}
        direction="column"
        justifyContent="center"
        alignContent="center"
        className={classes.coachesContainer}
      >
        <Grid>
          <Typography variant="h3">
            <Box fontWeight="bold" mb={2}>
              Current Coaches
            </Box>
          </Typography>
        </Grid>
        <Grid>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Box fontWeight="bold">Coach Name</Box>
                </TableCell>
                <TableCell>
                  <Box fontWeight="bold">Available Starting</Box>
                </TableCell>
                <TableCell>
                  <Box fontWeight="bold">Industry</Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentCoachesData &&
                currentCoachesData.map((coach) => {
                  return availableCoach(
                    coach.coachName,
                    coach.availableDate,
                    coach.coachIndustry
                  );
                })}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CurrentCoaches;
