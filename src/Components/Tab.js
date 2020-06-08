import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Contas from './Contas'
import Carteira from './Carteira'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    alignItems: 'center',
  },
  conteudo: {
    marginTop:'35px'
  }
}));

export default function LabTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value} class={classes.tabs}>
        <AppBar position="fixed">
          <TabList onChange={handleChange} aria-label="simple tabs example" class={classes.tabs}>
            <Tab label="Contas" value="1" />
            <Tab label="Carteira" value="2" />
            <Tab label="Graficos" value="3" />
            <Tab label="Investimentos" value="4" />
          </TabList>
        </AppBar>
        <div class={classes.conteudo}>
        <TabPanel value="1"><Contas /></TabPanel>
        <TabPanel value="2"><Carteira /></TabPanel>
        <TabPanel value="3">In production</TabPanel>
        <TabPanel value="4">In production</TabPanel>
        </div>
      </TabContext>
    </div>
  );
}
