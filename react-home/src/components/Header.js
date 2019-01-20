import React from "react";
import '../index.css';
import Nav from "./Nav";


class Header extends React.Component {
    render() {
        return(
            <div className="header">
            <h1>Header</h1>
                <Nav />
            </div>
        );
    }
}

export default Header;