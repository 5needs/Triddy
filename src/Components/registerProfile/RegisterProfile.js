import React, { Component } from 'react';
import MenuSlide from './MenuSlide';
import Registration from './Registration';

class RegisterProfile extends Component {
    render() {
        return (
            <div>
                <MenuSlide></MenuSlide>
                <Registration></Registration>
            </div>
        );
    }
}

export default RegisterProfile;


