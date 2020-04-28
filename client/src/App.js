import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    width:'100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing(2)
  }
})
/*
constructor()
componentWillMount()
render()
componentDidMount()
*/
/*
props or state => shouldCommponentUpdate()

*/
class App extends Component {
  state = {
    customers: "",
    completed: 0
  }
  componentDidMount = () => {
    this.timer = setInterval(this.progress,20)
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err))
  }
  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  
  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }

  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>아이디</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            this.state.customers ?
              this.state.customers.map(c => {
                return(
                  <Customer key={c.id} id={c.id} name={c.name} image={c.image} birth={c.birth} gender={c.gender} job={c.job} />
                )
              }) :
              <TableRow>
                <TableCell colSpan="6" align="center">
                  <CircularProgress className={classes.progress} align='center' variant="determinate" value={this.state.completed} />
                </TableCell>
              </TableRow>
          }
        </TableBody>
      </Table>
    </Paper>
      
    )
  }
}

export default withStyles(styles)(App);
