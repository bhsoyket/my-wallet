import React, { Component } from 'react'
import './total.css'

class Total extends Component {
    render() {
        const total = this.props.items.reduce((acc, item) => acc + parseInt(item.amount),0);
        return (
            <div className="total__container">
                <p>Today</p>
                <p>Total: {total}/=</p>
            </div>
        )
    }
}

export default Total
