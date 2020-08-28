import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme =>( {
  card: {
    maxWidth: "100%",
  },
  header: {
    textDecoration: "none",
    fontSize: "1.5rem",
    padding: theme.spacing(2),
    textAlign: "left",
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "2rem",
    // },
    color: theme.palette.text.secondary,
  },
}));

export default function ImgMediaCard({collection}) {
  const classes = useStyles();
  const history = useHistory();
  let procCollection = collection.charAt(0).toUpperCase() + collection.slice(1);


  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => history.push(`/gallery/${collection}`)}>
        <CardMedia
          component="img"
          alt={procCollection}
          height="250"
          image="/images/0.jpg"
          title={procCollection}
        />
        <CardContent>
          <Typography className={classes.header} gutterBottom variant="h2" component="h4">
            {procCollection}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}