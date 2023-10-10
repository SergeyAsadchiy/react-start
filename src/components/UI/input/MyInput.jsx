import React from 'react';
import classes from "./MyInput.module.css";

const MyInput = (props) => {
  return (
    <div>
      <input {...props} className={classes.myInput} type="text"/>
    </div>
  );
};

export default MyInput;