import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TableFormat from "../components/table-format";
import SearchUserTable from "./../components/search-user-table";

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
  searchInput: any;
  setSearchInput: any;
  isSearchInputSelected: any;
  setSearchUserList: any;
  searchUserList: any;
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
  setSearchInput,
  searchInput,
  isSearchInputSelected,
  setSearchUserList,
  searchUserList,
}: mainContent) {
  const classes = useStyles();

  React.useEffect(() => {
    const searchUser = users.filter(({ user, email }: any) => {
      return email.includes(searchInput);
    });
    setSearchUserList(searchUser);
  }, [searchInput]);

  return (
    <main className={classes.content}>
      <Toolbar />

      <Switch>
        <Route exact path="/topusers">
          {topUsers.length > 0 ? (
            <TableFormat
              users={users}
              topUsers={topUsers}
              setUsers={setUsers}
              setTopUsers={setTopUsers}
              isTopUserTable={true}
            />
          ) : (
            <div>No Top Users available</div>
          )}
        </Route>

        <Route exact path="/search">
          <SearchUserTable
            searchInput={searchInput}
            users={users}
            setSearchUserList={setSearchUserList}
            searchUserList={searchUserList}
          />
        </Route>

        <Route exact path="/">
          <TableFormat
            users={users}
            setUsers={setUsers}
            setTopUsers={setTopUsers}
            isTopUserTable={false}
          />
        </Route>
      </Switch>
    </main>
  );
}
