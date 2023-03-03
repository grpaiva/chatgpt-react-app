import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9 aspect ratio
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const featureList = [
  {
    title: 'Easy to Use',
    description:
      'Our application is designed to be user-friendly, even for those who are not tech-savvy. With a simple and intuitive interface, you can easily navigate and use all of the features our app has to offer.',
    image: 'https://picsum.photos/id/118/536/354',
  },
  {
    title: 'Secure and Private',
    description:
      'We take your privacy seriously. Our app is built with the latest security protocols to ensure that your data is always protected. You can trust us to keep your information safe and secure.',
    image: 'https://picsum.photos/id/1015/536/354',
  },
  {
    title: '24/7 Support',
    description:
      'We are always here to help you. Our team of support specialists is available 24/7 to answer any questions or concerns you may have. Whether it’s a simple question or a complex issue, we are here to assist you.',
    image: 'https://picsum.photos/id/1062/536/354',
  },
];

export default function Features() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {featureList.map((feature, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={feature.image}
                title={feature.title}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {feature.title}
                </Typography>
                <Typography>{feature.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
