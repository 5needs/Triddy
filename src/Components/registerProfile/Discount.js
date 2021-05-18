import React, { Component } from 'react';
import './styles/Discount.css'

class Discount extends Component {

    render() {
        const {number, type} = this.props
        return (
            <div className="discount">
                    <h2 className="disccount__description">Disscount: {type}</h2>
                    <h3 className="disccount__description">Disscount x 1: ${number}</h3>
            </div>
        );
    }
}

export default Discount;
