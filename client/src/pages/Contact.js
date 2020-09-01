import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import API from "../utils/API";

const Contact = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const [message, setMessage] = useState({
    firstname: "",
    lastname: "",
    reason: "",
    body: "",
  });

  const [firstnameErr, setFirstnameErr] = useState(false);
  const [lastnameErr, setLastnameErr] = useState(false);
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
    if (message.reason === "") {
      setReasonErr(true);
    }
    if (message.body.length <= 0 || message.body.length >= 500) {
      setBodyErr(true);
    }

    if (
      message.firstname.length > 0 &&
      message.lastname.length > 0 &&
      message.reason !== "" &&
      (message.body.length > 0 || message.body.length <= 500)
    ) {
      API.sendEmail({
        name: message.firstname + " " + message.lastname,
        email: "TODO create an email state again UGH",
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
    <Container maxWidth='lg' style={{ height: "100%", flexGrow: 1 }}>
      <Grid
        direction={matchesMD ? "row" : "column-reverse"}
        container
        spacing={2}>
        <Grid container item md={6} xs={12}>
          <form
            id='email-form'
            style={{ width: "100%" }}
            noValidate
            autoComplete='off'
            onSubmit={handleFormSubmit}>
            <Grid direction='row' container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  error={firstnameErr}
                  id='firstname'
                  label='First Name'
                  placeholder='Sara'
                  helperText={
                    firstnameErr ? "Please enter your first name." : ""
                  }
                  margin='normal'
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
                  error={lastnameErr}
                  id='lastname'
                  label='Last name'
                  placeholder='Smith'
                  helperText={lastnameErr ? "Please enter your last name." : ""}
                  margin='normal'
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
                  error={bodyErr}
                  id='body'
                  label='Message'
                  placeholder='Your message goes here...'
                  helperText={
                    bodyErr
                      ? "Please enter a message between 1 and 500 characters."
                      : ""
                  }
                  margin='normal'
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
                  color='primary'
                  endIcon={<Icon>send</Icon>}>
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
          <a href='mailto:daniel.monteton@gmail.com' target='_blank'>
            Dan Test
          </a>
        </Grid>
        <Grid container item md={6} xs={12}>
          <Grid item xs={12}>
            <img
              style={{ width: "100%", maxHeight: 500 }}
              src='images/0.jpg'
              alt='test'
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
