import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  titulo: {
    fontSize: 14,
    textDecoration: 'underline'
  },
  pos: {
    marginBottom: 12,
  },
  saldo: {
    fontSize: 14,
    color: 'green',
    marginTop: '-43px',
    marginLeft:'123px'
}
});

export default function OutlinedCard(saldo) {
  const classes = useStyles();

  return (
      <div style={{marginTop:'143px', position:'relative'}}>
      <Typography variant="body2" component="p">
          Caso queira adicionar a carteira do proximo mes, <Button size="small">Clique aqui</Button>


        </Typography>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <br/>
          <h5 className={classes.titulo}>Saldo da carteira: </h5>
          <h4 className={classes.saldo}>R$ {saldo.value},00</h4>
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Carteira dos ultimos meses</Button>
      </CardActions>
    </Card>
    </div>
  );
}
