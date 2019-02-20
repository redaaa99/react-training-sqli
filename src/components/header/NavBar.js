import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        const links = ['Features','Enterprise','Support','Pricing'];
        return (
            <>
                <nav className={"my-2 my-md-0 mr-md-3"}>
                    { links.map((element,index)=>(<a key={index} className={"p-2 text-dark"} href={"#"}>{element}</a> ))}
                </nav>
                <a className={"btn btn-outline-primary"} href={"#"} >Sign up</a>
            </>
        );
    }
}

export default Navbar;