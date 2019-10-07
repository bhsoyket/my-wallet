import React, { Component } from 'react'
import moment from 'moment'
import './item.css'

class Item extends Component {
    render() {
        const item = this.props.item;
        return (
            <div className="item__container">
                <p>{item.note}</p>
                <p>{item.amount}/=</p>
                <p>{moment().format('DD-MM-YYYY', item.createdAt)}</p>
            </div>
        )
    }
}

export default Item
