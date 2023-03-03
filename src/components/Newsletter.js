import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },
  textField: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(4),
    },
  },
}));

function Newsletter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container style={{ paddingTop: '50px', paddingBottom: '50px', color: 'white' }}>
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              Sign up for our newsletter
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales sit amet ipsum euismod
              malesuada.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <form className={classes.form}>
              <TextField
                id="email"
                label="Your email address"
                variant="outlined"
                size="small"
                className={classes.textField}InputLabelProps={{
                  style: {
                    color: 'white'
                  }
                }}
                InputProps={{
                  style: {
                    color: 'white',
                    borderColor: 'white'
                  }
                }}
              />
              <Button variant="contained" color="primary">
                Subscribe
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Newsletter;
