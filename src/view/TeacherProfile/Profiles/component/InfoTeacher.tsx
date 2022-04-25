import { Col, Row, Select } from 'antd'
import Checkbox from 'antd/lib/checkbox/Checkbox'
import React, { useState } from 'react'
import Button from '../../../../shared/component/Button/Button'
import { IconArrowRight, IconDelete, IconEdit } from '../../../../shared/component/Icon/Icon'
import Status from '../../../../shared/component/status/Status'
import Info from './comp/Info'
import WorkProcess from './comp/WorkProcess'


const InfoTeacher = () => {

    const [itemIndex, setItemIndex] = useState(0)

    const tabHorizontal = [
        {
            name: 'Thông tin chung',
            component: <Info />,
        },
        {
            name: 'Quá trình công tác',
            component: <WorkProcess />,
        },
    ]
    const handleListIndex = (index: number) => {
        setItemIndex(index)
    }
    const activeIndex = (index: number) => {
        if (itemIndex === index) {
            return 'active-list'
        }
    }
    return (
        <>
            <div className="mb-32" style={{ display: 'flex', alignItems: 'center' }}>
                <h3 className="title-18-black mr-32">Hồ sơ giảng viên</h3>
                <IconArrowRight className="icon mr-32" />
                <h1 className="main-title" >Thông tin giảng viên</h1>
            </div>
            <Row className="mb-24" justify='space-between' style={{ width: '100%' }}>
                <div className="tab__list__content">
                    {
                        tabHorizontal.map((item, index) => (
                            <div className={`tab__list__content-title ${activeIndex(index) ? activeIndex(index) : ''}`} key={index} onClick={() => handleListIndex(index)}>
                                <h3 className='title-18-black' style={{ marginLeft: '10px' }}>{item.name}</h3>
                            </div>
                        ))
                    }
                </div>
            </Row>

            {
                tabHorizontal.map((item, index) => (
                   <div key={index}>
                       {
                           itemIndex === index ? item.component : ''
                       }
                   </div>
                ))
            }

          
        </>
    )
}

export default InfoTeacher