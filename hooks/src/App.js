import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Grid } from '@material-ui/core';
import Bean from './pinto_bean.jpg';

const useStyles = makeStyles({
  button: {
    width: 200,
    height: 50,
    color: 'black',
    background: 'white'
  },
  bean: {
    width: 100,
    height: 'auto'
  },
  root: {
    width: '100%'
  }
});

const makeBeans = (num, classes) => {
  let beans = [];
  for (let i = 0; i < num; i++) {
    beans.push(<img src={Bean} alt="Bean" key={i} className={classes.bean} />);
  }
  return beans;
};

export const App = props => {
  const classes = useStyles();
  const [number, setNumber] = useState(10);

  return (
    <div className={classes.root}>
      cool number of beans: {number} <br />
      <Button className={classes.button} onClick={() => setNumber(number + 1)}>
        Add A Bean
      </Button>
      <br />
      <Button className={classes.button} onClick={() => setNumber(number - 1)}>
        Take A Bean Away :(
      </Button>
      <br />
      <Grid>
        {makeBeans(number, classes).map((obj, i) => {
          return obj;
        })}
      </Grid>
    </div>
  );
};
