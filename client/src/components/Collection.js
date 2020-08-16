import React , { useEffect, useState, createContext, } from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import API from "../utils/API";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: "100%",
      height: "100%",
    },
  }));

const Collection = ({match}) => {
    const classes = useStyles();

    const [currentCollection, setCurrentCollection] = useState("");
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        API.getAll()
        .then(res => {
            console.log(res.data)
            let queryCollection = res.data.filter(art => art.medium === match.params.collection)
            setCollection(queryCollection);
            setCurrentCollection(match.params.collection)
        })
      }, [match.params.collection]);

    return (
            <div>
            COLLECTION: {collection ? currentCollection : "loading"}
            <div className={classes.root}>
      <GridList cellHeight={400} className={classes.gridList} cols={3}>
        {collection.map((tile) => (
          <GridListTile key={tile._id} cols={tile.cols || 1}>
            <img src={tile.path} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
            </div>
    )
};

export default Collection;