import React from "react";
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
const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    boxShadow: "32px",
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
});

export default function SimpleCard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const data = [
    {
      tipoConta: "Conta de luz",
      valor: 143.44,
      status: "Pendente",
      Vencimento: "08/06/2020",
    },
    {
      tipoConta: "Conta de telefone",
      valor: 223.44,
      status: "Pendente",
      Vencimento: "08/06/2020",
    },
    {
      tipoConta: "Sky",
      valor: 93.44,
      status: "Pendente",
      Vencimento: "08/06/2020",
    },
    {
      tipoConta: "Mercado",
      valor: 623.44,
      status: "Pendente",
      Vencimento: "08/06/2020",
    },
  ];
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {data.map((e) => (
          <Grid item xs={12} sm={6} md={3} key={data.indexOf(e)}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="primary"
                  gutterBottom
                >
                  {e.tipoConta}
                </Typography>
                <Typography variant="h5" component="h2" color="error">
                  R$: {e.valor}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {e.status}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  Vencimento: {e.Vencimento}
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
      </Grid>
    </div>
  );
}
