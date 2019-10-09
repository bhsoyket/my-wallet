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
                <p>{moment(item.created_at).format('DD-MM-YYYY')}</p>
            </div>
        )
    }
}

export default Item
