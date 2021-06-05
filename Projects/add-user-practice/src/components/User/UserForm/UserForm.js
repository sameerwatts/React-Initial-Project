import React from "react";
import Button from "../../UI/Card/Button/Button";
import Card from "../../UI/Card/Card";
import classes from "./UserForm.module.css";

const UserForm = () => {
  return (
    <Card>
      <form>
        <label htmlFor='name'>UserName</label>
        <input type="text" name="user" id="name" />
        <label htmlFor='age'>Age(years)</label>
        <input type="text" name="age" id="age" />
        <Button type='submit'>Add user</Button>
      </form>
    </Card>
  );
};

export default UserForm;
