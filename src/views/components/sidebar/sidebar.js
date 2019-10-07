import React, { Component } from "react";
import moment from "moment";
import "./sidebar.css";

class Sidebar extends Component {
  state = {
    days: ["Today", "Yesterday", "03-10-2019"]
  };
  render() {
    const uniqueDate = this.props.items.reduce((acc, item) => {
      const itemDate = moment(item.createdAt).format("DD-MM-YYYY");
      if (acc[itemDate]) acc[itemDate] += 1;
      else acc[itemDate] = 1;
      return acc;
    },{});
    console.log(uniqueDate);

    return (
      <div className="sidebar__container">
        <ul>
          {this.state.days.map(day => (
            <li>{day}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
