import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';


const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'John',
  'birthday': '19960306',
  'gender': 'male',
  'job': 'student'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'Kim',
  'birthday': '19960306',
  'gender': 'male',
  'job': 'student'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'James',
  'birthday': '19960306',
  'gender': 'male',
  'job': 'Designer'
}

]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }

      </div>

    );
  }
}

export default App;
