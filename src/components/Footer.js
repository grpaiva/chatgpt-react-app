import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  text: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
  },
  link: {
    color: theme.palette.common.white,
    marginLeft: theme.spacing(2),
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.text}>
              About Us
            </Typography>
            <Typography variant="body1" className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis libero varius, ornare enim id,
              aliquam ipsum. Sed posuere ex a mauris vestibulum, in eleifend ex facilisis.
            </Typography>
            <Typography variant="body1" className={classes.text}>
              &copy; {new Date().getFullYear()} My Portfolio
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.text}>
              Contact Us
            </Typography>
            <Typography variant="body1" className={classes.text}>
              Email: <Link href="mailto:contact@myportfolio.com" className={classes.link}>
                contact@myportfolio.com
              </Link>
            </Typography>
            <Typography variant="body1" className={classes.text}>
              Phone: <Link href="tel:+123456789" className={classes.link}>
                +123456789
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
