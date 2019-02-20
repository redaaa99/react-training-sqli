import React, { Component } from 'react';
import Title from './Title';
import Prices from './Prices'


class Body extends Component {
    render() {
        return (
            <div className="container">
                <Title/>
                <Prices/>
            </div>
        );
    }
}

export default Body;