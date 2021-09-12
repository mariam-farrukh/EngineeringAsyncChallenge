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

// We have an exciting new opportunity to expand our coaching
// services to additional industries beyond K-12 education.
// To prepare for this new service offering,
// we need you to quickly build a new web page for them with
// the following requirements:

// [X] Company name title

// [x] A table that previews initial coaching experts that will
// be available at launch. Please create this table using a
// solution other than HTML table tags. A good solution is
// easily styled and resuable within the application.

// [x] Company logo as icon in browser tab

// [] Contact us web form that captures contact information for
// interested users

// [] Basic validation of web form before submission

// [] Dump all the information from the form submission to browser console

// [x] Coaching experts table:
