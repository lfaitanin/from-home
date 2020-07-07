import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
      backgroundColor: "#445fc2",
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: 400,
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 style={{color: '#fff'}}>Bem vindo<button>Começar a usar o aplicativo</button></h2>
    </div>
  );
}