import React from 'react';
import classes from  './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {
  const classesList = [classes.myModal]
  if (visible) classesList.push(classes.active)

  return (
    <div
      onClick={() => setVisible(false)}
      className={classesList.join(' ')}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={classes.myModalContent}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;