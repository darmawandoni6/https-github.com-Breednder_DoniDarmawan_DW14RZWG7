import React, { Component } from "react";
import Profile from "./profile";
import EditRight from "./editRight";

class EditPage extends Component {
  render() {
    return (
      <div>
        <Profile />
        <EditRight />
      </div>
    );
  }
}

export default EditPage;
