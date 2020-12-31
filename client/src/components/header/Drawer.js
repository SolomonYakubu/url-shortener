import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { AccountCircle, Edit, People } from "@material-ui/icons";

const styles = (theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

function DrawerComponent(props) {
  const [state, setState] = useState(false);
  const history = useHistory();
  const { classes } = props;
  const linkPush = useCallback(
    (val) => {
      history.push(`/${val}`);
    },
    [history]
  );
  const execute = (text) => {
    switch (text) {
      case "Profile":
        history.push(`/profile`);

        break;
      case "Edit Links":
        alert("Edit links");

        break;
      default:
        alert("About us");
        break;
    }
  };

  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawerHandler}
      onKeyDown={props.toggleDrawerHandler}
    >
      <List>
        {["Profile", "Edit Links", "About Us"].map((text, index) => (
          <ListItem button key={text} onClick={() => execute(text)}>
            <ListItemIcon>
              {text !== "Profile" ? (
                text === "About Us" ? (
                  <People />
                ) : (
                  <Edit />
                )
              ) : (
                <AccountCircle />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer open={props.left} onClose={props.toggleDrawerHandler}>
      {sideList("left")}
    </Drawer>
  );
}

export default withStyles(styles)(DrawerComponent);
