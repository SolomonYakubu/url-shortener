import React from "react";
import { useHistory } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";

import withStyles from "@material-ui/core/styles/withStyles";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import { AccountCircle, Edit, People, Dashboard } from "@material-ui/icons";

const styles = (theme) => ({
  list: {
    width: 250,
    backgroudColor: "#000",
    color: "#292929",
  },
  color: {
    color: "#fff",
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
        history.push(`/about`);
        break;
    }
  };

  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      style={{
        background: "#282c34",
        height: "100%",
        color: "#fff",
      }}
    >
      <List>
        {["Dashboard", "Profile", "Edit Links", "About Us"].map(
          (text, index) => (
            <ListItem button key={text} onClick={() => execute(text)}>
              <ListItemIcon>
                {text === "Dashboard" ? (
                  <Dashboard className={classes.color} />
                ) : text !== "Profile" ? (
                  text === "About Us" ? (
                    <People className={classes.color} />
                  ) : (
                    <Edit className={classes.color} />
                  )
                ) : (
                  <AccountCircle className={classes.color} />
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
