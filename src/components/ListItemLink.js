import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAcrion from "@material-ui/core/ListItemSecondaryAction";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export const ListItemLink = props => {
  let { icon, primary, to } = props;
  primary = primary.replace("Birds-of-prey", "Birds of Prey");

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <Link to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );
  
  return (
    <ListItem button component={renderLink}>
      <ListItemText primary={primary} />
      {icon === "close" ? (
        <ListItemSecondaryAcrion>
          <IconButton edge='end' aria-label='close'>
            <CloseIcon />
          </IconButton>
        </ListItemSecondaryAcrion>
      ) : null}
    </ListItem>
  );
};
