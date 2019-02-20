import React, { Component } from 'react';
import Logo from './Logo';
import NavBar from './NavBar'

class Header extends Component {
    render() {
        return (
            <div className={"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"}>
                <Logo/>
                <NavBar/>
            </div>
        );
    }
}

export default Header;
