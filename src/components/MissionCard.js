import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ height: "auto" }}>
      <CardMedia
        style={{ margin: "20%" }}
        className={classes.media}
        image={props.productImage}
        title="image"
      />

      <CardContent
        style={{ color: "blue", fontFamily: "system-ui", fontSize: "large" }}
      >
        {props.missionName} {props.flightNumber}
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="h2">
          Mission Ids : {props.missionId}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h2">
          Launch Year : {props.lauchYear}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h2">
          Successful Launch : {props.successfulLaunch}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h2">
          Successful Landing : {props.successfulLanding}
        </Typography>
      </CardContent>
    </Card>
  );
}
