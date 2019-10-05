import React, { Component } from 'react'

class AddItem extends Component {
    render() {
        return (
            <div>
                <div>
                    <label htmlFor="note">Note</label>
                    <input type="text" name="note" placeholder="Write your note" />
                    <label htmlFor="amount">Amount</label>
                    <input type="text" name="amount" />
                </div>
                <button>Add</button>
            </div>
        )
    }
}

export default AddItem
