import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import NavBar from "./layout/nav-bar";
import SideBar from "./layout/side-bar";
import MainContent from "./layout/main-content";
import createPersistedState from "use-persisted-state";

const useUserState = createPersistedState("user");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
  })
);

export default function App() {
  const [users, setUsers] = useUserState([]);
  const [topUsers, setTopUsers] = useState([]);
  const [searchInput, setSearchInput] =useState(' ')
  const [isSearchInputSelected, setIsSearchInputSelected] = useState(false)
  const [searchUserList, setSearchUserList] = useState([])
  const classes = useStyles();

  const makeUserList = (data: any) => {
    const userList = data.map((user: any) => {
      return {
        id: user.id,
        user: user.name,
        email: user.email,
        isBlock: false,
        isTopUser: false,
      };
    });
    setUsers(userList);
  };

  const getUsers = () =>{
    if(localStorage.getItem('user'){
     return
    }
    
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => makeUserList(data));
  }

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <Router>
      <div className={classes.root}>
        <NavBar  
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        setIsSearchInputSelected={setIsSearchInputSelected} />
        <SideBar />
        <MainContent
          users={users}
          topUsers={topUsers}
          setUsers={setUsers}
          setTopUsers={setTopUsers}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          isSearchInputSelected={isSearchInputSelected}
          setSearchUserList={setSearchUserList}
          searchUserList={searchUserList}
        />
      </div>
    </Router>
  );
}
