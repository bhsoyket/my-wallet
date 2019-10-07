import React, { Component } from 'react'
import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
import Details from '../../components/details'
import './home.css'

class Home extends Component {
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
            <div className="home__container">
                <Header />
                <div className="main-content">
                    <Sidebar items={this.state.items} />
                    <Details handleFormInput = {this.handleFormInput} items={this.state.items} />
                </div>
            </div>
        )
    }
}

export default Home
