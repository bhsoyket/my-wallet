import React, { Component } from 'react'
import './details.css'
import Total from '../../components/total'
import AddItem from '../../components/addItem'
import Items from '../../components/items'

class Details extends Component {
    state = {
        items: []
    }
    handleFormInput = data => {
        this.setState(prevState => ({
          items: [data, ...prevState.items]
        }))
      }
    render() {
        return (
            <div className="details__container">
                <Total items = {this.state.items} />
                <AddItem handleFormInput = {this.handleFormInput} />
                <Items items = {this.state.items} />
            </div>
        )
    }
}

export default Details
