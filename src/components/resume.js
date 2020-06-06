import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    paddingTop: theme.spacing(10),
  },
  title: {
    flexGrow: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
}));
export default function Resume() {
  const classes = useStyles();

  // const src = "./resume.pdf";
  return (
    <div className={classes.root}>
      <div className={classes.control}>
        <Typography variant="h5" component="h2" align="center">
          Resume
        </Typography>

        {/* <iframe src={src} /> */}
      </div>
    </div>
  );
}

// width="500" height="700"
