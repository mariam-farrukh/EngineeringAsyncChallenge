import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles, alpha } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import mailingImg from "../media/mailinglist.png";

const useStyles = makeStyles({
  container: {
    marginTop: "1rem",
    marginBottom: "1rem",
    border: "#ececec solid 1px",
    backgroundImage: `url(${mailingImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: 400,
    color: "white",
  },
  inputContainer: {
    backgroundColor: alpha("#ececec", 0.75),
    height: 250,
    color: "black",
  },
  inputStyle: {
    width: "200px",
    height: "40px",
    family: "roboto",
  },
  selectStyle: {
    width: "208px",
    height: "40px",
    family: "roboto",
  },
  inputError: {
    color: "red",
    fontSize: "0.8rem",
  },
  buttonStyle: {
    color: "white",
    backgroundColor: "#233dff",
  },
});

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  industry: yup.string().required("Select an industry"),
});

function JoinForm() {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <Grid
      container
      className={classes.container}
      justifyContent="center"
      alignContent="center"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          className={classes.inputContainer}
          container
          item
          direction="row"
          justifyContent="space-evenly"
          alignContent="center"
        >
          <Grid
            container
            item
            xs={4}
            justifyContent="center"
            alignContent="center"
          >
            <Grid>
              <input
                className={classes.inputStyle}
                name="name"
                placeholder="Jane Doe"
                {...register("name")}
              />
              <div
                style={
                  errors?.name?.message
                    ? { paddingBottom: "0.5rem" }
                    : { marginBottom: " 1.3rem" }
                }
                className={classes.inputError}
              >
                {errors.name?.message}
              </div>

              <input
                className={classes.inputStyle}
                name="email"
                placeholder="jane_doe@email.com"
                {...register("email")}
              />
              <div
                style={
                  errors?.email?.message
                    ? { paddingBottom: "0.5rem" }
                    : { marginBottom: " 1.3rem" }
                }
                className={classes.inputError}
              >
                {errors.email?.message}
              </div>
              <select className={classes.selectStyle} {...register("industry")}>
                <option value="Professional Services">
                  Professional Services
                </option>
                <option value="Sports/Fitness">Sports/Fitness</option>
                <option value="E-Sports">E-Sports</option>
              </select>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={4}
            justifyContent="center"
            alignContent="center"
          >
            <Typography align="center" variant="h5">
              Join our mailing to receive notifications about program
              availability and special discounts
            </Typography>
            <Button
              variant="contained"
              className={classes.buttonStyle}
              type="submit"
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}

export default JoinForm;
