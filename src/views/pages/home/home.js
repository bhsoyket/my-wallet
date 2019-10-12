import React, { Component } from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Details from "../../components/details";
import db from "../../../utils/db";
import moment from "moment";
import "./home.css";

class Home extends Component {
  state = {
    items: [],
    select_date: moment().format("DD-MM-YYYY")
  };
  handleFormInput = data => {
    db.table("wallet")
      .add(data)
      .then(() => {
        this.setState(prevState => ({
          items: [data, ...prevState.items]
        }));
      });
  };
  componentDidMount() {
    this.getAllItems();
  }

  getAllItems() {
    db.table("wallet")
      .toArray()
      .then(items => {
        this.setState({
          items: items
        });
      });
  }

  deleteItem = id => {
    db.table("wallet")
      .delete(id)
      .then(() => {
        const newList = this.state.items.filter(item => item.id !== id);
        this.setState({
          items: newList
        });
      });
  };

  onSelectDate = day => {
    this.setState({
      select_date: day
    });
  };

  showItems() {
    return this.state.items.filter(
      item =>
        this.state.select_date === moment(item.created_at).format("DD-MM-YYYY")
    );
  }

  render() {
    return (
      <div className="home__container">
        <Header />
        <div className="main-content">
          <Sidebar onSelectDate={this.onSelectDate} items={this.state.items} />
          <Details
            deleteItem={this.deleteItem}
            handleFormInput={this.handleFormInput}
            items={this.showItems()}
          />
        </div>
      </div>
    );
  }
}

export default Home;
