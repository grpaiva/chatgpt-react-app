import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    position: "relative",
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
      opacity: 0.05,
    },
  },
  heroContent: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    "& h1": {
      color: "#fff",
      marginBottom: theme.spacing(2),
    },
    "& p": {
      color: "#fff",
      marginBottom: theme.spacing(4),
    },
  },
  ctaButton: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  },
  stars: {
    position: "absolute",
    top: "-50%",
    left: "-50%",
    right: "-50%",
    bottom: "-50%",
    margin: "auto",
    width: "200%",
    height: "200%",
    backgroundColor: "transparent",
    borderRadius: "50%",
    boxShadow: `0 0 ${theme.spacing(1)}px #fff, 0 0 ${theme.spacing(2)}px #fff, 0 0 ${theme.spacing(3)}px #fff, 0 0 ${theme.spacing(4)}px ${theme.palette.primary.main}`,
    animation: "$rotateStars 10s linear infinite",
  },
  "@keyframes rotateStars": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContainer}>
      <div className={classes.stars}></div>
      <Container maxWidth="md" className={classes.heroContent}>
        <Typography variant="h1" component="h1">
          Welcome to our website
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </Typography>
        <Button
          variant="contained"
          size="large"
          className={classes.ctaButton}
        >
          Join our newsletter
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
