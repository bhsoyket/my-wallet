import React, { Component } from 'react'
import './sidebar.css'

class Sidebar extends Component {
    state = {
        days: ['Today', 'Yesterday', '03-10-2019']
    }
    render() {
        return (
            <div className="sidebar__container">
                <ul>
                    {this.state.days.map(day=>(
                       <li>{day}</li> 
                    ))}
                </ul>
            </div>
        )
    }
}

export default Sidebar
