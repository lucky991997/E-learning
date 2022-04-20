import { Row } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconArrowRight } from '../../../../shared/component/Icon/Icon'
import InfoStudent from './InfoStudent'
import Process from './Process'

const StudentDetail = () => {
    const navigate = useNavigate()

    const [itemIndex, setItemIndex] = useState(0)
    const tabHorizontal = [
        {
            name: 'Thông tin chung',
            path: '/student/info',
            component: <InfoStudent />
        },
        {
            name: 'Quá trình học tập',
            path: '/student/process',
            component: <Process />,
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
        <div>
            <div
                className="mb-32"
                style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                onClick={() => navigate(-1)}
            >
                <h3 className="title-18-black mr-32">Hồ sơ học viên</h3>
                <IconArrowRight className="icon mr-32" />

                {
                    tabHorizontal.map((item, index) => (
                        <h1 className="main-title" key={index} >
                            {itemIndex === index ? item.name : ''}

                        </h1>
                    ))
                }


            </div>
            <Row className="mb-24" justify='space-between' style={{ width: '100%' }}>
                <div className="tab__list__content">
                    {
                        tabHorizontal.map((item, index) => (

                            <div
                                key={index}
                                className={`tab__list__content-title ${activeIndex(index) ? activeIndex(index) : ''}`}
                                onClick={() => handleListIndex(index)}>
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
        </div>
    )
}

export default StudentDetail