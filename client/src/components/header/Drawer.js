import React from "react";
import { useHistory } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import { AccountCircle, Edit, People, Dashboard } from "@material-ui/icons";

const styles = (theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

function DrawerComponent(props) {
  const history = useHistory();
  const { classes } = props;

  const execute = (text) => {
    switch (text) {
      case "Dashboard":
        history.push(`/Dashboard`);

        break;
      case "Profile":
        history.push(`/profile`);

        break;
      case "Edit Links":
        history.push(`/edit`);

        break;
      default:
        alert("About us");
        break;
    }
  };

  const sideList = (side) => (
    <div className={classes.list} role="presentation">
      <List>
        {["Dashboard", "Profile", "Edit Links", "About Us"].map(
          (text, index) => (
            <ListItem button key={text} onClick={() => execute(text)}>
              <ListItemIcon>
                {text === "Dashboard" ? (
                  <Dashboard />
                ) : text !== "Profile" ? (
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
          )
        )}
      </List>
    </div>
  );

  return (
    <Drawer
      open={props.left}
      onClose={props.toggleDrawerHandler}
      onClick={props.toggleDrawerHandler}
    >
      {sideList("left")}
    </Drawer>
  );
}

export default withStyles(styles)(DrawerComponent);
