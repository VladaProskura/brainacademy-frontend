import React from "react";
import "../App.css";



class UserList extends React.Component{
  constructor(props){
    super(props);
  }

  handleClick(){
    console.log(this.props);
  }

  render(){
    return (
        <div onClick={() => this.handleClick ()}>
            <img src={this.props.avatar} />
            <h2>{this.props.name}</h2>
            <p>Age: {this.props.age}</p>
       </div>
    );
  }

  
}



  export default UserList;
