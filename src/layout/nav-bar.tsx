import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Redirect, withRouter } from "react-router-dom";
const drawerWidth = 240;

interface navbar {
  searchInput: any;
  setSearchInput?: any;
  setIsSearchInputSelected?: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    navItem: {
      paddingLeft: theme.spacing(7),
    },
    userButton: {
      "&:hover": {},
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
      padding: theme.spacing(0, 2),
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
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  })
);

function navbar({ setSearchInput, searchInput }: navbar) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
          <div className={classes.navItem}>
            <Button className={classes.userButton} color="inherit">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Users
              </Link>
            </Button>
            <Link
              to="/topusers"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button className={classes.userButton} color="inherit">
                Top Users
              </Button>
            </Link>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <Link
              to={`/search`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <InputBase
                placeholder="Search User.."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={() => {
                  setSearchInput(event.target.value);
                }}
                value={searchInput}
              />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default withRouter(navbar);
