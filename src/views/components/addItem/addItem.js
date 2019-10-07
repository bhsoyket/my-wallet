import React, { Component } from "react";
import "./addItem.css";
import moment from "moment";
class AddItem extends Component {
  state = {
    note: '',
    amount: 0
  }

  changeInput(name, value){
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.note === '' || this.state.amount === 0){
      alert('Please Input All Field');
      return;
    }
    this.props.handleFormInput({...this.state, createdAt: moment().format()});
    this.setState({
      note: '',
      amount: 0
    })

  }

  render() {
    return (
      <div className="addItem__container">
          <form action="#" className="add-item__form" onSubmit={e => this.handleSubmit(e)}>
            <div className="form__container">
              <div className="input__container input__note">
                <label htmlFor="note">Note</label>
                <input type="text" name="note" className="input__note" 
                value={this.state.note} onChange={e => this.changeInput(e.target.name, e.target.value)} placeholder="Write your note" />
              </div>
              <div className="input__container input__amount">
                <label htmlFor="amount">Amount</label>
                <input type="number" name="amount" 
                value={this.state.amount} onChange={e => this.changeInput(e.target.name, e.target.value)} />
              </div>
            </div>

            <button className="form__button" type="submit">Add</button>
          </form>
      </div>
    );
  }
}

export default AddItem;
