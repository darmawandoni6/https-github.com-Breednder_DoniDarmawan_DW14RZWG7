import React, { Component } from "react";
import Profile from "./profile";
import ProfileRight from "./profileRight";

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <Profile />
        <ProfileRight />
      </div>
    );
  }
}

export default ProfilePage;
