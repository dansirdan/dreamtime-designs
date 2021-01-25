import React from "react";
import List from "@material-ui/core/List";
import { ListItemLink } from "./ListItemLink";
import Divider from "@material-ui/core/Divider";
import currentCollections from "../utils/currect_collections";

export const GalleryNavDetail = () => {
  return (
    <List component='nav' aria-label='gallery nav' style={{ padding: "0px" }}>
      <ListItemLink to='/gallery' primary='Main' />
      {currentCollections.map((collection, index) => (
        <ListItemLink
          // style={{marginLeft: '10px'}}
          key={index}
          to={`/gallery/${collection}`}
          primary={collection.charAt(0).toUpperCase() + collection.slice(1)}
        />
      ))}
    </List>
  );
};

export const SideNavDetail = () => {
  return (
    <div>
      <List component='nav' aria-label='burger menu nav'>
        <ListItemLink to='/' primary='Dreamtime Designs' icon='close' />
        <Divider />
        <ListItemLink to='/gallery' primary='Gallery' />
        <Divider />
        {currentCollections.map((collection, index) => (
          <ListItemLink
            key={index}
            inset
            to={`/gallery/${collection}`}
            primary={collection.charAt(0).toUpperCase() + collection.slice(1)}
          />
        ))}
        <Divider />
        <ListItemLink to='/about' primary='About' />
        <Divider />
        <ListItemLink to='/contact' primary='Contact' />
      </List>
    </div>
  );
};
