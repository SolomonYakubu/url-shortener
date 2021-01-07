import React, { useState } from "react";
import { AppBar, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import ToolbarComponent from "./Toolbar";
import DrawerComponent from "./Drawer";

export default function Header() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Audiowide", "Roboto", "Poppins"].join(","),
    },
  });
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
        <MuiThemeProvider theme={theme}>
          <ToolbarComponent
            openDrawerHandler={openDrawer}
            toggleDrawerHandler={toggleDrawer}
            left={state}
          />
          <DrawerComponent left={state} toggleDrawerHandler={toggleDrawer} />
        </MuiThemeProvider>
      </AppBar>
    </>
  );
}
