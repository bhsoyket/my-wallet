import React, { Component } from 'react'
import './item.css'

class Item extends Component {
    render() {
        return (
            <div className="item__container">
                <p>Item Note</p>
                <p>120/=</p>
            </div>
        )
    }
}

export default Item
