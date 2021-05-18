import React, { Component } from 'react';
import './styles/Discount.css'

class Discount extends Component {

    render() {
        const {number, type} = this.props
        return (
            <div className="discount">
                <div className="disccount__description">
                    <h2>Disscount: {type}</h2>
                    <h3>Disscount x 1: ${number}</h3>
                </div>
            </div>
        );
    }
}

export default Discount;
