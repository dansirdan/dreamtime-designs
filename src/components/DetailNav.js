import React from "react";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const DetailNav = ({ detail, handleChangeDetail }) => {
let titleStr = " "
  // detail.medium.length > 0 ? `${detail.medium[0].replace("Birds-of-prey", "Birds of Prey")}, ${detail.medium[1].replace("Birds-of-prey", "Birds of Prey")}` : detail.medium[0]
  detail.medium.forEach((medium, ind)=> {
    titleStr += (ind > 0 ? ", ": "") + medium.replace("birds-of-prey", "Birds of Prey");
  })

  return (
    <Grid container>
      <Grid item container direction='column' justify='flex-start' xs={12}>
      <Typography variant='overline' >"{detail.title}"</Typography>
      <Typography variant='overline'>{titleStr}</Typography>
      <Typography variant='overline'>{detail.size}</Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        direction='row'
        alignItems='center'
        justify='center'>
        <IconButton
          edge='start'
          onClick={handleChangeDetail}
          data-value={"next"}
          color='inherit'
          size='medium'
          aria-label='close'>
          <NavigateBefore fontSize='large' />
        </IconButton>
        <Typography variant='overline' style={{fontSize: "1rem"}}>Previous / Next</Typography>
        <IconButton
          edge='end'
          onClick={handleChangeDetail}
          data-value={"prev"}
          color='inherit'
          size='medium'
          aria-label='close'>
          <NavigateNext fontSize='large' />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default DetailNav;
