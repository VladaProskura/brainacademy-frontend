import React from "react";
import '../index.css';
import Logo from './Logo';


class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
             <h1>Footer</h1>
             <Logo />
            </div>
        );
    }
}

export default Footer;