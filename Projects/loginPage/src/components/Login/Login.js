import React, { useContext, useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../auth-context/AuthContext";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { emailValue: action.val, isEmailValid: action.val.includes("@") };
  }
  if (action.type === "EMAIL_BLUR") {
    return {
      emailValue: state.emailValue,
      isEmailValid: state.emailValue.includes("@"),
    };
  }
};

const passwordReducer = (state, action) => {
  if (action.type === "PASSWORD_INPUT") {
    return {
      passwordValue: action.val,
      isPasswordValid: action.val.trim().length > 6,
    };
  }
  if (action.type === "PASSWORD_BLUR") {
    return {
      passwordValue: state.passwordValue,
      isPasswordValid: state.passwordValue.trim().length > 6,
    };
  }
  return { passwordValue: "", isPasswordValid: null };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    emailValue: "",
    isEmailValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    passwordValue: "",
    isPasswordValid: null,
  });

  const ctx = useContext(AuthContext);

  const {isEmailValid} = emailState;
  const {isPasswordValid} = passwordState;
  function effectHandler() {
    const isValid = setTimeout(() => {
      setFormIsValid(isEmailValid && isPasswordValid);
    }, 550);
    console.log('effect');
    return () => {
    console.log('clear effect');
    clearTimeout(isValid);
    };
  }

  useEffect(effectHandler, [isEmailValid, isPasswordValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };
  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "PASSWORD_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "EMAIL_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(passwordState.isPasswordValid);
    dispatchPassword({ type: "PASSWORD_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.emailValue, passwordState.passwordValue);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isEmailValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.emailValue}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isPasswordValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.passwordValue}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
