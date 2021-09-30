import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const NotFound = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h1" component="h2">
          Opps we did NOT find the page you are looking for !!
          <Link to="/">go Back</Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NotFound;
