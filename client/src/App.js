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

const styles = theme => ({
  root: {
    width:'100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
    'id': 1,
    'image':'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birth': '811217',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image':'https://placeimg.com/64/64/2',
    'name': '나동빈',
    'birth': '811217',
    'gender': '남자',
    'job': '선생님'
  },
  {
    'id': 3,
    'image':'https://placeimg.com/64/64/3',
    'name': '신민수',
    'birth': '811217',
    'gender': '여자',
    'job': '학생'
  }
]

class App extends Component {
  
  
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
            customers.map(c => {
              return(
                <Customer key={c.id} id={c.id} name={c.name} image={c.image} birth={c.birth} gender={c.gender} job={c.job} />
              )
            })
          }
        </TableBody>
      </Table>
    </Paper>
      
    )
  }
}

export default withStyles(styles)(App);
