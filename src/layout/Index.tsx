import { Collapse, Select } from 'antd'
import { useSelector } from 'react-redux'


import { RootState } from '../core'


import RouteComponent from '../routers/RouteComponent'

import Header from './Header/Header'

import Sidebar from './Sidebar/Sidebar'

 const { Option } = Select
 const { Panel } = Collapse
 const pageSize:number = 8

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
export {
    Option, Panel, pageSize
}
export default Index