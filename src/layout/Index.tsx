import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RouteComponent from '../routers/RouteComponent'
import Home from '../view/Home/Home'
import Learning from '../view/Learning/Learning'
import Header from './Header/Header'
import LeftMenu from './Sidebar/ItemMenu'
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