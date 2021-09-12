import React from "react";
import { Grid } from "@material-ui/core";
import CompanyBanner from "./CompanyBanner";
import CurrentCoaches from "./CurrentCoaches";
import JoinForm from "./JoinForm";
import ContactInfo from "./ContactInfo";

function CoachingPage() {
  return (
    <Grid>
      <CompanyBanner />
      <CurrentCoaches />
      <JoinForm />
      <ContactInfo />
    </Grid>
  );
}

export default CoachingPage;
