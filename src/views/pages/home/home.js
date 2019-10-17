import React, { Component } from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Details from "../../components/details";
// import db from "../../../utils/db";  // for indexDB
import moment from "moment";
import { firestore } from "../../../firebase/my-firebase"; // for firebae
import "./home.css";

class Home extends Component {
  state = {
    items: [],
    select_date: moment().format("DD-MM-YYYY")
  };
  handleFormInput = data => {
    // for indexDB
    // db.table("wallet")
    //   .add(data)
    //   .then(() => {
    //     this.setState(prevState => ({
    //       items: [data, ...prevState.items]
    //     }));
    //   });

    // for firebase
    firestore
      .collection("wallet")
      .add(data)
      .then(docref => {
        this.setState(prevState => ({
          items: [{ ...data, docid: docref.id }, ...prevState.items]
        }));
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };
  componentDidMount() {
    this.getAllItems();
  }

  getAllItems() {
    // for indexDB
    // db.table("wallet")
    //   .toArray()
    //   .then(items => {
    //     this.setState({
    //       items: items
    //     });
    //   });


    // for firebase
    firestore
      .collection("wallet")
      .get()
      .then(snapshot => {
        return snapshot.docs.map(doc => ({docid:doc.id, ...doc.data()}));
      })
      .then(items => {
        this.setState({
          items: items
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  }

  deleteItem = id => {
    // for indexDB
    // db.table("wallet")
    //   .delete(id)
    //   .then(() => {
    //     const newList = this.state.items.filter(item => item.id !== id);
    //     this.setState({
    //       items: newList
    //     });
    //   });
    
    // for firebase
    firestore
      .collection("wallet")
      .doc(id)
      .delete()
      .then(() => {
        const newList = this.state.items.filter(item => item.docid !== id);
        this.setState({
          items: newList
        });
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
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
