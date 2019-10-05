import React, { Component } from 'react'
import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
import Details from '../../components/details'
import './home.css'

class Home extends Component {
    render() {
        return (
            <div className="home__container">
                <Header />
                <div className="main-content">
                    <Sidebar />
                    <Details />
                </div>
            </div>
        )
    }
}

export default Home
