import React from 'react';
import classes from './TestComp.module.scss';

const TestComp = () => {
  console.log(classes);
  
  return <div className={classes.compStyle}>TestComp</div>;
};

export default TestComp;
