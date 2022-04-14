import React from 'react'
import RouteComponent from '../routers/RouteComponent'

import Header from './Header/Header'

import Sidebar from './Sidebar/Sidebar'


const Index = () => {


    return (
        <div className="main-layout">
            <Sidebar />
            <Header />
            <div className="container">

                <RouteComponent />
            </div>
        </div>
    )
}

export default Index