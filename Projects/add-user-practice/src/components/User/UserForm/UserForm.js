import React, { Fragment, useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const [userName, setEnteredUsername] = useState("");
  const [age, setEnteredage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const submitUserDataHandler = (e) => {
    e.preventDefault();
    if (!userName.trim().length || !age.trim().length) {
      console.log("not entered");
      setErrorMessage({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (!isNaN(+userName)) {
      console.log("number name");
      setErrorMessage({
        title: "Invalid username",
        message: "Please enter a valid username (not a number).",
      });
      return;
    }
    if (+age < 0) {
      console.log("negative");
      setErrorMessage({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
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
  const onConfirm = () => {
    setErrorMessage(null);
  };
  return (
    <Fragment>
      {errorMessage && (
        <ErrorModal errorMessage={errorMessage} onConfirm={onConfirm} />
      )}
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
    </Fragment>
  );
};

export default UserForm;
