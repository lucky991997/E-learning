import { Collapse, Select } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../core'
import { getStudentList } from '../core/action/StudentAction'

import RouteComponent from '../routers/RouteComponent'

import Header from './Header/Header'

import Sidebar from './Sidebar/Sidebar'

export const { Option } = Select
export const { Panel } = Collapse
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