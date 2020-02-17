import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map((item, index) => (
          <li>{this.props.item}</li>
        ))}
      </ul>
    );
  }
}
export default List;
