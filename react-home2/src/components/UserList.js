import React from "react";
import "../App.css";



class UserList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
        <div>
            <img src={this.props.avatar}/>
            <h2>{this.props.name}</h2>
            <p>Age: {this.props.age}</p>
       </div>
    );
  }
}

  export default UserList;
