import React from 'react';
import classes from "./MyButton.module.css";

const MyButton = ({children, ...props}) => {
  const classesList = [classes.myBtn]
  if (props.disabled) classesList.push(classes.myBtnDisabled)

  return (
    <button {...props} className={classesList.join(' ')}>
      {children}
    </button>
  );
};

export default MyButton;