import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Toolbar, AppBar, Grid, Button, Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import About from "./about";
import Resume from "../resume.pdf";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    alignItems: "flex-center",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="primary" position="sticky">
        <Toolbar className={classes.toolbar}>
          {[
            ["About", ""],
            ["Resumé", Resume],
            ["Research", ""],
            ["Projects", ""],
          ].map((value) => (
            <Button color="inherit" href={value[1]} key={value[0]}>
              {value[0]}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}
