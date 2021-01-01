import React, { useState } from "react";
import { fade, withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";

import MoreIcon from "@material-ui/icons/MoreVert";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
const styles = (theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),

    // },
    // title: {
    //   display: "none",
    //   [theme.breakpoints.up("sm")]: {
    //     display: "block",
    //   },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

function ToolbarComponent(props) {
  const history = useHistory();
  const [state, setState] = useState({
    achorEl: false,
    MobileMoreAnchorEl: false,
  });

  const handleMobileMenuClose = () => {
    setState((prevState) => {
      return {
        ...prevState,
        mobileMoreAnchorEl: null,
      };
    });
  };

  const handleMobileMenuOpen = (event) => {
    setState((prevState) => {
      return { ...prevState, mobileMoreAnchorEl: event.currentTarget };
    });
  };

  const { classes } = props;

  const isMobileMenuOpen = Boolean(state.mobileMoreAnchorEl);

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={state.mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      onClick={handleMobileMenuClose}
    >
      {localStorage.getItem("token") ? null : (
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <FontAwesomeIcon icon={faUserPlus} />
          </IconButton>
          <p onClick={() => history.push("/register")}>Register</p>
        </MenuItem>
      )}
      <MenuItem onClick={handleMobileMenuOpen}>
        {localStorage.getItem("token") ? (
          <>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
            </IconButton>
            <p
              onClick={() => {
                swal({
                  text: "Are you sure you wish to log out?",
                  icon: "warning",
                  buttons: { Yes: "Yes", No: "No" },
                }).then((value) => {
                  if (value === "Yes") {
                    localStorage.clear();
                    history.push("/");
                  }
                });
              }}
            >
              Log Out
            </p>
          </>
        ) : (
          <>
            {" "}
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <FontAwesomeIcon icon={faSignInAlt} />
            </IconButton>
            <p
              onClick={() => {
                history.push("/");
              }}
            >
              Log In
            </p>
          </>
        )}
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={props.openDrawerHandler}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          Lincut
        </Typography>

        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          {localStorage.getItem("token") ? null : (
            <MenuItem>
              <IconButton
                aria-label="show 11 new notifications"
                color="inherit"
              >
                <FontAwesomeIcon icon={faUserPlus} />
              </IconButton>
              <p onClick={() => history.push("/register")}>Register</p>
            </MenuItem>
          )}
          <MenuItem>
            {localStorage.getItem("token") ? (
              <>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </IconButton>
                <p
                  onClick={() => {
                    swal({
                      text: "Are you sure you wish to log out?",
                      icon: "warning",
                      buttons: { Yes: "Yes", No: "No" },
                    }).then((value) => {
                      if (value === "Yes") {
                        localStorage.clear();
                        history.push("/");
                      }
                    });
                  }}
                >
                  Log Out
                </p>
              </>
            ) : (
              <>
                {" "}
                <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <FontAwesomeIcon icon={faSignInAlt} />
                </IconButton>
                <p
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Log In
                </p>
              </>
            )}
          </MenuItem>
        </div>
        <div className={classes.sectionMobile}>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </div>
      </Toolbar>

      {renderMobileMenu}
    </div>
  );
}

export default withStyles(styles)(ToolbarComponent);
