import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Container } from '@material-ui/core';
import useStyles from '../styles';

function HomePage() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} style={{ padding: 0 }} className={classes.container}>
      <Header />
      <Hero />
      <Container maxWidth="lg" className={classes.innerContainer}>
        <Features />
      </Container>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default HomePage;
