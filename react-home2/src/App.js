import React, { Component } from 'react';
import UserList from './components/UserList';
import pic1 from './photo/1.jpg';
import pic2 from './photo/2.jpg';
import pic3 from './photo/3.JPG';
import pic4 from './photo/4.jpg';

const users = [
  {
    name: 'Vlada',
    age: 26,
    photo: <img src={pic1}/>
   },

  {
    name: 'Vitalii',
    age: 35,
    photo: <img src={pic2} />
  },

  {
    name: 'Iryna',
    age: 46,
    photo: <img src={pic3} />
   },

  {
    name: 'Vladymir',
    age: 49,
    photo: <img src={pic4} />
   }
]


class App extends Component {
  render() {
    return (
      <div>
        <UserList />
      </div>
    );
  }

  getUserList () {
    return this.users;
  }
}

export default App;
