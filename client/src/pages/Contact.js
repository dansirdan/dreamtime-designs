import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import API from "../utils/API";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  header: {
    textDecoration: "none",
    fontSize: "2rem",
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

const Contact = () => {
  const theme = useTheme();
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const [message, setMessage] = useState({
    firstname: "",
    lastname: "",
    email: "",
    reason: "",
    body: "",
  });

  const [firstnameErr, setFirstnameErr] = useState(false);
  const [lastnameErr, setLastnameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [reasonErr, setReasonErr] = useState(false);
  const [bodyErr, setBodyErr] = useState(false);

  const handleInputChange = event => {
    setMessage({
      ...message,
      [event.target.id]: event.target.value,
    });

    switch (event.target.id) {
      case "firstname":
        setFirstnameErr(false);
        break;
      case "lastname":
        setLastnameErr(false);
        break;
      case "email":
        setEmailErr(false);
        break;
      case "reason":
        setReasonErr(false);
        break;
      case "body":
        setBodyErr(false);
        break;

      default:
        break;
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    if (message.firstname.length <= 0) {
      setFirstnameErr(true);
    }
    if (message.lastname.length <= 0) {
      setLastnameErr(true);
    }
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        message.email
      )
    ) {
      setEmailErr(true);
    }
    if (message.reason === "") {
      setReasonErr(true);
    }
    if (message.body.length <= 0 || message.body.length >= 500) {
      setBodyErr(true);
    }

    if (
      message.firstname.length > 0 &&
      message.lastname.length > 0 &&
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        message.email
      ) &&
      message.reason !== "" &&
      (message.body.length > 0 || message.body.length <= 500)
    ) {
      API.sendEmail({
        name: message.firstname + " " + message.lastname,
        email: message.email,
        reason: message.reason,
        message: message.body,
      }).then(res => {
        if (res.data.msg === "success") {
          alert("Message Sent.");
          resetForm();
        } else if (res.data.msg === "fail") {
          alert("Message failed to send.");
        }
      });
    }
  };

  const resetForm = () => {
    document.getElementById("email-form").reset();
  };

  return (
    <Container
      maxWidth='xl'
      style={{ height: "100%", flexGrow: 1, padding: 20 }}>
      <Fade in={true}>
        <Grid
          direction={matchesMD ? "row" : "column-reverse"}
          container
          spacing={4}>
          <Grid
            container
            alignItems='center'
            justify='center'
            item
            md={6}
            xs={12}
            >
            <form
              id='email-form'
              style={{ width: "80%" }}
              noValidate
              autoComplete='off'
              onSubmit={handleFormSubmit}>
              <Grid direction='row' container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    variant='h2'
                    component='h3'
                    className={classes.header}>
                    Contact Form
                  </Typography>
                  <Divider />
                  <br />
                  <Typography variant='body1'>
                    Melony Mont-Eton is available for commissions, sales, and
                    general inquries on her artwork. Please fill out the form
                    below and be sure to select the reason for your inquiry.
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin='dense'
                    size='small'
                    error={firstnameErr}
                    id='firstname'
                    label='First Name'
                    placeholder='Sara'
                    helperText={
                      firstnameErr ? "Please enter your first name." : " "
                    }
                    fullWidth
                    onChange={handleInputChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin='dense'
                    size='small'
                    error={lastnameErr}
                    id='lastname'
                    label='Last name'
                    placeholder='Smith'
                    helperText={
                      lastnameErr ? "Please enter your last name." : " "
                    }
                    fullWidth
                    onChange={handleInputChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin='dense'
                    size='small'
                    error={emailErr}
                    id='email'
                    label='Email'
                    placeholder='sara.smith@gmail.com'
                    helperText={emailErr ? "Please enter a valid email." : " "}
                    fullWidth
                    onChange={handleInputChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl variant='outlined' error={reasonErr}>
                    <InputLabel htmlFor='reason'>Reason for Inquiry</InputLabel>
                    <Select
                      native
                      label='Reason for Inquiry'
                      value={message.reason}
                      onChange={handleInputChange}
                      inputProps={{
                        name: "reason-selector",
                        id: "reason",
                      }}>
                      <option aria-label='None' value='' />
                      <option value={"Portrait Commission"}>
                        Portrait Commission
                      </option>
                      <option value={"Purchase Inquiry"}>
                        For Purchase Inquiry
                      </option>
                      <option value={"Other"}>Other</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    rows={5}
                    margin='dense'
                    size='small'
                    error={bodyErr}
                    id='body'
                    label='Message'
                    placeholder='Your message goes here...'
                    helperText={
                      bodyErr
                        ? "Please enter a message between 1 and 500 characters."
                        : " "
                    }
                    fullWidth
                    onChange={handleInputChange}
                    multiline
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant='outlined'
                  />
                </Grid>
                <Grid container item justify='flex-end' alignItems='flex-end'>
                  <Button
                    type='submit'
                    variant='contained'
                    color='default'
                    endIcon={<Icon>send</Icon>}>
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid
            container
            alignItems='center'
            justify='center'
            item
            md={6}
            xs={12}
            style={{ flexGrow: 1 }}>
            <Grid item xs={12}>
              <Card
                square={true}
                elevation={0}
                style={{ maxWidth: "60%", margin: "auto" }}>
                <CardMedia
                  style={{ height: matchesMD ? "40vh" : "30vh" }}
                  image='images/0.jpg'
                  title='Stand In'
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
