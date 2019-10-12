import React, { Component } from 'react'
import './details.css'
import Total from '../../components/total'
import AddItem from '../../components/addItem'
import Items from '../../components/items'

class Details extends Component {
    render() {        
        return (
            <div className="details__container">
                <Total items = {this.props.items} />
                <AddItem handleFormInput = {this.props.handleFormInput} />
                <Items items = {this.props.items} deleteItem = {this.props.deleteItem} />
            </div>
        )
    }
}

export default Details
