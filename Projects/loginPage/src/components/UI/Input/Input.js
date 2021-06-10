import React, { Fragment } from 'react';
import classes from './Input.module.css';

const Input = ({isFieldValid, value, onChange, onBlur, title, type, id}) => {
    return (
        <Fragment>
         <div
          className={`${classes.control} ${
            isFieldValid=== false ? classes.invalid : ""
          }`}
        >
          <label htmlFor={id}>{title}</label>
          <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
        </Fragment>
    );
};

export default Input;