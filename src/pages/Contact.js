import React from "react";
import Grid from "@material-ui/core/Grid";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  header: {
    textDecoration: "none",
    fontSize: "1rem",
    textAlign: "left",
    color: theme.palette.text.primary,
  },
}));

const EmailLink = () => {
  return (
    <a href="mailto:mmonteton@hotmail.com?subject=Art Inquiry - Dream Time Designs">
      mmonteton@hotmail.com
    </a>
  );
}

const Contact = () => {
  const theme = useTheme();
  const classes = useStyles();
  const matchesMDAndLower = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSMAndLower = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Container
      maxWidth='xl'
      style={{ height: "100%", flexGrow: 1, padding: 20 }}>
      <Fade in={true}>
        <Grid
          direction={matchesMDAndLower ? "column-reverse" : "row"}
          container
          spacing={4}>
          <Grid
            container
            alignItems='center'
            justify='center'
            item
            lg={4}
            xs={12}>
            <div id='email-form'
              style={{ width: "100%", backgroundColor: "white", padding: 20 }}>
              <Grid direction='row' container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant='overline' className={classes.header}>
                    Contact Information
                  </Typography>
                  <Divider />
                  <br />
                  <Typography variant='body1'>
                    I am available for commissions, sales, and
                    general inquries on my artwork. For all inquries please
                    email me at <EmailLink/>. If I do not respond please follow up as the email could have gone to junk mail.
                  </Typography>
                  <br />
                  <Divider />
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid
            container
            alignItems='center'
            justify='center'
            item
            lg={8}
            xs={12}
            style={{ flexGrow: 1 }}>
            <Grid item xs={12}>
              <Card
                square={true}
                elevation={0}
                style={{ maxWidth: matchesMDAndLower ? "80vh" : "100%", margin: "auto" }}>
                <CardMedia
                  style={{ height: matchesSMAndLower ? "30vh" : matchesMDAndLower ? "50vh" : "60vh" }}
                  image='images/category-cards/birds-of-prey.png'
                  title='Falcon watercolor'
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </Container>
  );
};

export default Contact;
