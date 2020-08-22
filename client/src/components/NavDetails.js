import React from "react";
import List from "@material-ui/core/List";
import { ListItemLink } from "./ListItemLink";
import Divider from "@material-ui/core/Divider";
import currentCollections from "../utils/currect_collections";

// This can be cleaned up and made a little shorter
// i.e. collections.map();
export const GalleryNavDetail = () => {
  return (
    <div>
      <List component='nav' aria-label='gallery nav'>
        <ListItemLink to='/gallery' primary='Main' />
        {currentCollections.map((collection, index) => (
          <ListItemLink key={index}to={`/gallery/${collection}`} primary={collection.charAt(0).toUpperCase() + collection.slice(1)} />
        ))}
      </List>
    </div>
  );
};

export const SideNavDetail = () => {
  return (
    <div>
      <List component='nav' aria-label='burger menu nav'>
        <ListItemLink to='/' primary='Dreamtime Designs' icon='close'/>
        <Divider />
        <ListItemLink to='/gallery' primary='Gallery' />
        <Divider />
        {currentCollections.map((collection, index) => (
          <ListItemLink key={index}to={`/gallery/${collection}`} primary={collection.charAt(0).toUpperCase() + collection.slice(1)} />
        ))}
        <Divider />
        <ListItemLink to='/about' primary='About' />
        <Divider />
        <ListItemLink to='/contact' primary='Contact' />
      </List>
    </div>
  );
};
