import React, { Component } from 'react'
import Item from '../../components/item'

class Items extends Component {
    state = {
        items: [
            "item1",
            "item1",
            "item1",
            "item1",
            "item1",
            "item1",
            "item1",
            "item1",
        ]
    }
    render() {
        return (
            <div>
               {this.state.items.map(item => (
                    <Item />
                ))} 
            </div>
        )
    }
}

export default Items
