import React, {useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "32px",
    width: '270px',
  },
  bullet: {
    display: "inline-block",
    margin: "2px 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function SimpleCard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [pago, setPago] = React.useState(false);
  const [contas, setContas] = useState([])
  const [vencimento, setVencimento] = useState(Date.now())

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(days);
    return result.toLocaleDateString();
  }

  const handleClick = () => {
    setPago(true)
    setOpen(true);
  };
  useEffect(() => {
    axios.get('https://localhost:44347/api/Conta/all').then(result =>{
      setContas(result.data)
    })
  }, [])
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
        {contas.map((e) => (
          <Grid style={{marginTop: '35px'}} container item xs={12} spacing={3}  key={contas.indexOf(e)}>
            <Card className={classes.root} >
              <CardContent>
                <Typography
                  className={classes.title}
                  color="primary"
                  gutterBottom
                >
                {e.nomeConta}
                </Typography>
                <Typography variant="h5" component="h2" color="error">
                  R$: {e.valor}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {e.statusConta}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  Vencimento: {addDays(new Date(), e.diaVencimento)} 
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={handleClick}>Pagar conta</Button>
                <Snackbar
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                  message="Conta foi paga! ✅"
                  action={
                    <React.Fragment>
                      <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={handleClose}
                      >
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </React.Fragment>
                  }
                />
              </CardActions>
            </Card>
          </Grid>
        ))}
      
    </div>
  );
}
