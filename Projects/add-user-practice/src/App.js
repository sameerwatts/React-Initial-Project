import { useState } from "react";
import classes from "./App.module.css";
import UserForm from "./components/User/UserForm/UserForm";
import UserList from "./components/User/UsersList/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const updateData = (userName, age) => {
    setUsers((prevState) => {
      return [...prevState, { userName, age, id: Math.random().toString()}];
    });
  };

  return (
    <div className={classes.App}>
      <UserForm data={updateData} />
      {users.length !== 0 && <UserList usersData={users} />}
    </div>
  );
}

export default App;
