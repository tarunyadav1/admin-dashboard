import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Checkbox from "@material-ui/core/Checkbox";

interface BasicTable {
  users: {
    id: number;
    user: string;
    email: string;
    isBlock: boolean;
    isTopUser: boolean;
  };
  setUsers: any;
  setTopUsers: any;
  topUsers?: any;
  isTopUserTable: boolean;
}

interface user {
  id: number;
  user: string;
  email: string;
  isBlock: boolean;
  isTopUser: boolean;
}
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable({
  users,
  setUsers,
  setTopUsers,
  topUsers,
  isTopUserTable,
}: BasicTable) {
  const classes = useStyles();
  React.useEffect(() => {
    const topUserList = users.filter((user: any) => user.isTopUser === true);
    setTopUsers(topUserList);
  }, [users]);

  const getCurrentUser = () => (isTopUserTable ? topUsers : users);
  const currentUserList = getCurrentUser();

  if (users.length === 0) return <div></div>;

  const handleBlockToggle = (user: any) => {
    if (!user.isBlock) {
      setUsers((preState: any) => {
        const newUserList = preState.map((preUser: user) => {
          if (preUser.id === user.id) {
            return {
              id: user.id,
              user: user.user,
              email: user.email,
              isBlock: true,
              isTopUser: user.isTopUser,
            };
          }
          return { ...preUser };
        });

        return newUserList;
      });

      setTimeout(function () {
        setUsers((preState: any) => {
          const newUserList = preState.map((preUser: user) => {
            if (preUser.id === user.id) {
              return {
                id: user.id,
                user: user.user,
                email: user.email,
                isBlock: false,
                isTopUser: user.isTopUser,
              };
            }
            return { ...preUser };
          });

          return newUserList;
        });
      }, 300000);
    } else {
      setUsers((preState: any) => {
        const newUserList = preState.map((preUser: user) => {
          if (preUser.id === user.id) {
            return {
              id: user.id,
              user: user.user,
              email: user.email,
              isBlock: false,
              isTopUser: user.isTopUser,
            };
          }
          return { ...preUser };
        });

        return newUserList;
      });
    }
  };

  const handleTopUser = (user: any) => {
    if (!user.isTopUser) {
      setUsers((preState: any) => {
        const newUserList = preState.map((preUser: user) => {
          if (preUser.id === user.id) {
            return {
              id: user.id,
              user: user.user,
              email: user.email,
              isBlock: user.isBlock,
              isTopUser: true,
            };
          }
          return { ...preUser };
        });

        return newUserList;
      });
    } else {
      setUsers((preState: any) => {
        const newUserList = preState.map((preUser: user) => {
          if (preUser.id === user.id) {
            return {
              id: user.id,
              user: user.user,
              email: user.email,
              isBlock: user.isBlock,
              isTopUser: false,
            };
          }
          return { ...preUser };
        });

        return newUserList;
      });
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Block </TableCell>
            <TableCell align="right">Top User</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentUserList.map((user: user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell align="right">{user.user}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">
                <FormControlLabel
                  control={
                    <Switch
                      checked={user.isBlock ? true : false}
                      onChange={() => handleBlockToggle(user)}
                      name="checkedA"
                    />
                  }
                />
              </TableCell>
              <TableCell align="right">
                <Checkbox
                  checked={user.isTopUser ? true : false}
                  onChange={() => handleTopUser(user)}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
