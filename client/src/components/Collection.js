import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
}));

const Collection = props => {
  const { loading, collections, handleToggleDetail } = props;
  const classes = useStyles();

  return (
    <div>
      <div>COLLECTION</div>
      {loading ? (
        <div className={classes.root}>
          <GridList cellHeight={400} className={classes.gridList} cols={3}>
            {collections.map((tile, index) => (
              <GridListTile key={tile._id} cols={tile.cols || 1}>
                <img
                  style={{ cursor: "pointer" }}
                  src={tile.path}
                  alt={tile.title}
                  onClick={handleToggleDetail}
                  data-modal={"show"}
                  data-index={index}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      ) : (
        <CircularProgress color="blue" />
      )}
    </div>
  );
};

export default Collection;
