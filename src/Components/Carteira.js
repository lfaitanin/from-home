import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormCarteira from './FormCarteira'
import ExibeCarteira from './ExibeCarteira'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      alignItems: 'center'
    },
  },
}));


export default function FormattedInputs() {
  const classes = useStyles();
  const [saldo, setSaldo] = useState(0)
  useEffect(() => {
    axios.get('https://localhost:44347/api/Carteira/carteira-atual').then(result =>{
      setSaldo(result.data)
    })
  }, [])
  return (
    <div className={classes.root}>
    {saldo == 0 ?  <FormCarteira /> : <ExibeCarteira value={saldo}/>}
    </div>
  );
}
