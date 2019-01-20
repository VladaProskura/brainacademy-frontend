import React from "react";
import '../index.css';
import Nav from "./Nav";
import Logo from './Logo';

class Sidebar extends React.Component {
    render() {
        return(
            <div className="sidebar">
                <h1>Sidebar</h1>
                <Nav />
                <Logo />
            </div>
        );
    }
}

export default Sidebar;