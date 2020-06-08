import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress, FormControl, InputLabel, MenuItem} from "@material-ui/core";
import { TextField, Select } from "formik-material-ui";
import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
  root: {
    position:"absolute"
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    tipoConta: "",
  });
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
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
      <div class={classes.root}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={{
          nomeConta: "",
          valor: "0,00",
          mesReferencia: "",
          diaVencimento: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            console.log(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Field
              component={TextField}
              name="nomeConta"
              type="text"
              label="Qual a conta?"
            />
            <br />
            <Field
              component={TextField}
              name="valor"
              type="text"
              label="Valor da conta"
            />
            <br />
            <Field
            component={TextField}
            type="text"
            name="mesReferencia"
            label="Mes de referencia"
            select
            size="medium"
            variant="standard"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          >
            {meses.map((e, key) => (
              <MenuItem  key={key} value={e.value}>
              {e.name}
              </MenuItem>
            ))}
          </Field>
            <br />
            <Field
              component={DatePicker}
              format="dd/MM/yyyy"
              name="diaVencimento"
              label="Dia de Vencimento"
            />
            {isSubmitting && <LinearProgress />}
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </MuiPickersUtilsProvider>
    </div>
  );
}
