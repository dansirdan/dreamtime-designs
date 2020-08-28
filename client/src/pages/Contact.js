import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


const Contact = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container maxWidth='lg' style={{ height: "100%", flexGrow: 1 }}>
      <Grid
        direction={matchesMD ? "row" : "column-reverse"}
        container
        spacing={2}>
        <Grid container item md={6} xs={12}>
          <form style={{ width: "100%" }} noValidate autoComplete='off'>
            <TextField
              error={false}
              id='outlined-full-width'
              label='Label'
              placeholder='Placeholder'
              helperText='Full width!'
              margin='normal'
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              variant='outlined'
            />
            <TextField
              error={false}
              id='outlined-full-width'
              label='Label'
              placeholder='Placeholder'
              helperText='Full width!'
              margin='normal'
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              variant='outlined'
            />
            <TextField
              error={false}
              id='outlined-full-width'
              label='Label'
              placeholder='Placeholder'
              helperText='Full width!'
              margin='normal'
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              variant='outlined'
            />
            <FormControl variant='outlined' >
              <InputLabel id='demo-simple-select-outlined-label'>
                Age
              </InputLabel>
              <Select
                labelId='demo-simple-select-outlined-label'
                id='demo-simple-select-outlined'
                value={10}
                onChange={(event) => console.log(event.target.value)}
                label='Age'>
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              error={false}
              id='outlined-full-width'
              label='Label'
              placeholder='Placeholder'
              helperText='Full width!'
              margin='normal'
              fullWidth
              multiline
              InputLabelProps={{
                shrink: true,
              }}
              variant='outlined'
            />
                  <Button
        variant="contained"
        color="primary"
        
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
          </form>
        </Grid>
        <Grid container item md={6} xs={12}>
          <Grid item xs={12}>
            <img 
            style={{width: "100%", maxHeight: 500}} src='images/0.jpg'
            alt='test'/>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
