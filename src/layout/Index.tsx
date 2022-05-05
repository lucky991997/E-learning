import { Collapse, Select } from 'antd'


import RouteComponent from '../routers/RouteComponent'

import Header from './Header/Header'

import Sidebar from './Sidebar/Sidebar'

export const { Option } = Select
export const { Panel } = Collapse
export const pageSize:number = 8;
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