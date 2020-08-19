import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import CollectionContext from "../utils/CollectionContext";

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

const Collection = ({ match }) => {
  const classes = useStyles();
  const history = useHistory();
  const { collection, collections, /*handleChangeCollection */ } = useContext(
    CollectionContext
  );

  const handleOnClick = (_id, index) => {
    history.push(`${match.url}/${collection}/${_id}`);
  };

  return (
    <div>
      COLLECTION: {collection}
      {collections.length > 0 ? (
        <div className={classes.root}>
          <GridList cellHeight={400} className={classes.gridList} cols={3}>
            {collections.map((tile, index) => (
              <GridListTile
                component='button'
                onClick={() => handleOnClick(tile._id, index)}
                key={tile._id}
                cols={tile.cols || 1}>
                <img src={tile.path} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default Collection;
