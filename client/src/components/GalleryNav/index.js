import React from "react";
import List from "@material-ui/core/List";
import { ListItemLink } from "../ListItemLink";
import Divider from "@material-ui/core/Divider";

export const GalleryNav = () => {
  return (
    <div>
      <List component='nav' aria-label='gallery nav'>
        <ListItemLink to='/gallery' primary='Main' />
        <ListItemLink to='/gallery/cards' primary='Cards' />
        <ListItemLink to='/gallery/watercolor' primary='Watercolor' />
        <ListItemLink to='/gallery/pastels' primary='Pastels' />
        <ListItemLink to='/gallery/portraits' primary='Portraits' />
      </List>
    </div>
  );
};

export const SideNavDetail = () => {
  return (
    <div>
      <List component='nav' aria-label='burger menu nav'>
        <ListItemLink to='/gallery' primary='Gallery' />
        <Divider />
        <ListItemLink to='/gallery/cards' primary='Cards' />
        <ListItemLink to='/gallery/watercolor' primary='Watercolor' />
        <ListItemLink to='/gallery/pastels' primary='Pastels' />
        <ListItemLink to='/gallery/portraits' primary='Portraits' />
        <Divider />
        <ListItemLink to='/about' primary='About' />
        <Divider />
        <ListItemLink to='/contact' primary='Contact' />
      </List>
    </div>
  );
};
