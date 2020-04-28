import React from 'react';
import './App.css';
import Customer from './components/Customer'

const customer = [
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

function App() {
  return (
    customer.map(c => {
      return(
        <Customer key={c.id} name={c.name} image={c.image} birth={c.birth} gender={c.gender} job={c.job} />
      )
    })
    
  );
}

export default App;
