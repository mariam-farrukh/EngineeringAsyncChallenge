import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

function ContactInfo() {
  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignContent="space-around"
      style={{ paddingBottom: "2rem", paddingTop: "1rem" }}
    >
      <Grid item>
        <Typography component="div">
          <Box fontSize={14} fontFamily="roboto">
            EMAIL ADDRESS
          </Box>
        </Typography>
        <Typography component="div">
          <Box fontSize={12} fontFamily="roboto">
            hello@reallygreatsite.com
          </Box>
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="div">
          <Box fontSize={14} fontFamily="roboto">
            MAILING ADDRESS
          </Box>
        </Typography>
        <Typography component="div">
          <Box fontSize={12} fontFamily="roboto">
            123 Anywhere St. Any City, ST 12345
          </Box>
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="div">
          <Box fontSize={14} fontFamily="roboto">
            PHONE NUMBER
          </Box>
        </Typography>
        <Typography component="div">
          <Box fontSize={12} fontFamily="roboto">
            (123) 456-7890
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ContactInfo;
