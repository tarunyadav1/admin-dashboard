import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const drawerWidth = 240;

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
  })
);

export default function navbar() {
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
        </Toolbar>
      </AppBar>
    </>
  );
}
