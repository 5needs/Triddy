import React, { Component } from 'react';
import Edit from '../Edit';
import MenuSlide from '../MenuSlide';


class EditProfile extends Component {
 
  render() {
    return (
      <div>
          <MenuSlide search={false}/>
        <div className="Edit-profile">
          <Edit/>
        </div>
      </div>
    );
  }
}

export default EditProfile;
