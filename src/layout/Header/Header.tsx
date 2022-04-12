import { Tabs } from 'antd';
import React from 'react'
import { MdOutlineAccountCircle } from 'react-icons/md';

import '../../styles/main-styles/header.scss'
const Header = () => {
    const { TabPane } = Tabs;
    return (
        <div className="header">
            <div >
                <MdOutlineAccountCircle className="header-icon" />
            </div>
            <h3 className="title-16-bold" style={{ marginBottom: '4px' }}>Admin</h3>
            <div className="header-tabs">
                <div className="header-tabs-border"></div>
                <Tabs>
                    <TabPane tab="Đăng xuất" key='1' >


                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default Header