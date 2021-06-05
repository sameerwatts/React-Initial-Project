import React, { useState } from "react";
import Button from "../../UI/Card/Button/Button";
import Card from "../../UI/Card/Card";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const [userName, setEnteredUsername] = useState("");
  const [age, setEnteredage] = useState("");
  const submitUserDataHandler = (e) => {
    e.preventDefault();
    props.data(userName, age);
    setEnteredUsername("");
    setEnteredage("");
  };
  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredage(e.target.value);
  };
  return (
    <Card>
      <form onSubmit={submitUserDataHandler}>
        <label htmlFor="name">UserName</label>
        <input
          type="text"
          name="user"
          id="name"
          value={userName}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age(years)</label>

        <input
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default UserForm;
