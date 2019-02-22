import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles} from '@material-ui/core/styles';



const styles = theme => ({
  root: {
    width: '100%',
    //marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table : {
    minWidth: 1080
  }
})



const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'John Kim',
  'birthday': '19960306',
  'gender': 'male',
  'job': 'student'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'James Tang',
  'birthday': '19960306',
  'gender': 'male',
  'job': 'student'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'Andrew Zhou',
  'birthday': '19960306',
  'gender': 'male',
  'job': 'Designer'
}

]

class App extends Component {
  render() {
    return (
      <Paper className={styles("").root}>
        <Table className={styles("").table}>
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell>Profile</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>DateofBirth</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
          {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />);})}
        </TableBody>
        </Table>
      </Paper>

    );
  }
}

export default withStyles(styles)(App);
