import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TableFormat from "./../components/table-format";

const drawerWidth = 240;

interface mainContent {
  users?: {
    id: number;
    user: string;
    email: string;
    isBlock: boolean;
    isTopUser: boolean;
  };
  topUsers?: {
    id: number;
    user: string;
    email: string;
    isBlock: boolean;
    isTopUser: boolean;
  };
  setUsers?: any;
  setTopUsers?: any;
}

interface user {
  id: number;
  user: string;
  email: string;
  isBlock: boolean;
  isTopUser: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export default function mainContent({
  users,
  topUsers,
  setUsers,
  setTopUsers,
}: mainContent) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Toolbar />

      <Switch>
        <Route path="/topusers">
          {topUsers.length > 0 ? (
            <TableFormat
              users={topUsers}
              setUsers={setUsers}
              setTopUsers={setTopUsers}
            />
          ) : (
            <div>No Top Users available</div>
          )}
        </Route>
        <Route path="/">
          <TableFormat
            users={users}
            setUsers={setUsers}
            setTopUsers={setTopUsers}
          />
        </Route>
      </Switch>
    </main>
  );
}
