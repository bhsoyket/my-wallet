import React, { Component } from "react";
import moment from "moment";
import "./sidebar.css";

class Sidebar extends Component {

  changeDate(date) {
    let day = "Today";
    const today = moment();
    switch (date) {
      case today.format("DD-MM-YYYY"):
        day = "Today";
        break;
      case today.subtract(1, "days").format("DD-MM-YYYY"):
        day = "Yesterday";
        break;
      default:
        day = date;
    }
    return day;
  }

  render() {
    const dateObject = this.props.items.reduce((acc, item) => {
      const itemDate = moment(item.created_at).format("DD-MM-YYYY");
      if (acc[itemDate]) acc[itemDate] += 1;
      else acc[itemDate] = 1;
      return acc;
    }, {});
    const uniqueDate = Object.keys(dateObject);

    return (
      <div className="sidebar__container">
        <ul>
          {uniqueDate.map(day => (
            <li key={day} onClick={()=>this.props.onSelectDate(day)}>
              <a href={'#'+day}>{this.changeDate(day)} ({dateObject[day]})</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
