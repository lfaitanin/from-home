import React from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { makeStyles } from "@material-ui/core/styles";
import {TextField, Button, MenuItem, Select} from "@material-ui/core/";
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      alignItems: 'center'
    },
  },
}));

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="R$"
    />
  );
}
const meses = [
  { value: 1, name: 'Janeiro' },
  { value: 2, name: 'Fevereiro' },
  { value: 3, name: 'Março' },
  { value: 4, name: 'Abril' },
  { value: 5, name: 'Maio' },
  { value: 6, name: 'Junho' },
  { value: 7, name: 'Julho' },
  { value: 8, name: 'Agosto' },
  { value: 9, name: 'Setembro' },
  { value: 10, name: 'Outubro' },
  { value: 11, name: 'Novembro' },
  { value: 12, name: 'Dezembro' },
];
NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function FormattedInputs() {
  const classes = useStyles();
  const [criada, setCriada] = React.useState(false)
 const [values, setValues] = React.useState({
    salario: 0,
    extras: 0,
    mesReferencia: {},
  });
  const setarValor = () => {
    return parseInt(values.salario) + parseInt(values.extras)
  }
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const cadastrarCarteira = () => {
    const params = {
      "salario": parseInt(values.salario),
      "extras": parseInt(values.extras),
      "saldo": parseInt(values.saldo),
      "mes": values.mesReferencia
    }
    axios.post('https://decasa-back.herokuapp.com/api/carteira/add', params).then(result =>{
      setCriada(true)
      debugger
      window.location.reload(true)
    })

  }
  return (
    <div className={classes.root}> 
      <h1> <AccountBalanceWalletOutlinedIcon color="primary" /> Carteira</h1>
      <TextField
        label="Salario"
        value={values.salario}
        onChange={handleChange}
        name="salario"
        id="formatted-numberformat-input"
        variant="outlined"
        fullWidth
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
      <TextField
        label="Extras"
        value={values.extras}
        onChange={handleChange}
        name="extras"
        prefix={"R$"}
        fullWidth
        id="formatted-numberformat-input"
        variant="outlined"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
      <TextField
        label="Saldo"
        value={setarValor()}
        onChange={handleChange}
        fullWidth
        name="saldo"
        id="formatted-numberformat-input"
        variant="outlined"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
      <br />
      <h5>Mes de referencia</h5>
      <Select
            component={TextField}
            type="text"
            fullWidth
            onChange={handleChange}
            value={values.mesReferencia}
            name="mesReferencia"
            label="Mes de referencia"
            variant="outlined"
          >
            {meses.map((e, key) => (
              <MenuItem  key={key} value={e.value}>
              {e.name}
              </MenuItem>
            ))}
          </Select>
          <br />
          
      <Button
        variant="contained"
        color="primary"
        onClick={cadastrarCarteira}
      >
        Cadastrar carteira
      </Button>
              {criada}
          </div>
  );
}
