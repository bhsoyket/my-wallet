import React, { Component } from 'react'
import './item.css'

class Item extends Component {
    render() {
        const item = this.props.item;
        return (
            <div className="item__container">
                <p>{item.note}</p>
                <p>{item.amount}/=</p>
            </div>
        )
    }
}

export default Item
