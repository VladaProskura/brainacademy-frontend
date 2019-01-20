import React, { Component } from 'react';
import "./App.css";
import UserList from "./components/UserList.js";




class App extends Component {

  constructor(){
    super();
    this.state = {
       users: [
        {
          avatar: '/photo/pic1.jpg',
          name: 'Vladyslava',
          age: 26,
        },
        {
          avatar: '/photo/pic2.jpg',
          name: 'Vitalii',
          age: 35
        },
        {
          avatar: '/photo/pic3.jpg',
          name: 'Iryna',
          age: 47
        },
        {
          avatar: '/photo/pic4.jpg',
          name: 'Vladimir',
          age: 49
        },  
      ]
    }
  }
   

  render() {
          const users = this.state.users.map((user, index) => {
            return <UserList
                key = {index}
                avatar = {user.avatar}
                name = {user.name}
                age = {user.age}
                />;
          });
          return(
            <div className='wrapper'>{users}</div>
    );
        
  }
}

export default App;
