import { useState } from "react";
import classes from "./App.module.css";
import UserForm from "./components/User/UserForm/UserForm";

function App() {
  const [users, setUsers] = useState({});

  const updateData = (userName, age) => {
    setUsers({userName, age});
  };

  return (
    <div className={classes.App}>
      <UserForm data={updateData} />
    </div>
  );
}

export default App;
