import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolbarComponent from "./Toolbar";
import DrawerComponent from "./Drawer";

export default function Header() {
  const [state, setState] = useState(false);

  const toggleDrawer = () => {
    setState(false);
  };

  const openDrawer = () => {
    setState(true);
  };

  return (
    <>
      <AppBar position="sticky" style={{ background: "#282c34" }}>
        <ToolbarComponent
          openDrawerHandler={openDrawer}
          toggleDrawerHandler={toggleDrawer}
          left={state}
        />
        <DrawerComponent left={state} toggleDrawerHandler={toggleDrawer} />
      </AppBar>
    </>
  );
}
