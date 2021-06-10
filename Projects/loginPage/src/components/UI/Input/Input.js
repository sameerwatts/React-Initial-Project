import React, { forwardRef, Fragment, useImperativeHandle, useRef } from "react";
import classes from "./Input.module.css";

const Input = forwardRef(({ isFieldValid, value, onChange, onBlur, title, type, id }, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref,() => {
      return {
          focus: activate
      }
  })
  const activate = () => {
    inputRef.current.focus()
  }
  return (
    <Fragment>
      <div
        className={`${classes.control} ${
          isFieldValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={id}>{title}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </Fragment>
  );
});

export default Input;
