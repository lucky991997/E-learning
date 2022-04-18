import { Col, Row, Select } from 'antd'
import React, { useState } from 'react'
import Button from '../../../../shared/component/Button/Button'
import { IconArrowRight, IconDelete, IconEdit } from '../../../../shared/component/Icon/Icon'
import Status from '../../../../shared/component/status/Status'
import { IShowComponent } from '../../../Setting/Setting'
import InfoStudent from './InfoStudent'



const Process = () => {
    const { Option } = Select

    const [itemIndex, setItemIndex] = useState(0)

    const tabHorizontal = [
        {
            name: 'Thông tin chung',
            component: <InfoStudent />,
        },
        {
            name: 'Quá trình học tập',
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
    const subComponent = [
        {
            name: 'Kết quả học tập',
        },
        {
            name: 'Danh sách khen thưởng',
        },
        {
            name: 'Danh sách kỷ luật',
        }
    ]
    return (
        <>
            <div className="mb-32" style={{ display: 'flex', alignItems: 'center' }}>
                <h3 className="title-18-black mr-32">Hồ sơ học viên</h3>
                <IconArrowRight className="icon mr-32" />
                <h1 className="main-title" >Quá trình học tập</h1>
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
                <div className="select" style={{ marginLeft: '-20%' }}>
                    <Select defaultValue="2020-2021" style={{ marginRight: '12px' }}>
                        <Option value="1">2020-2021</Option>
                    </Select>
                    <Select defaultValue="Chọn lớp">
                        <Option value="1">lớp 6A</Option>
                        <Option value="2">lớp 7A</Option>
                    </Select>
                </div>

                <Col style={{ display: 'flex', alignItems: 'center' }}>
                    <IconDelete className="icon mr-16 " onClick={() => console.log(123)} style={{ color: '#C9C4C0' }} />
                    <div className="border-left mr-16"></div>
                    <Button variant="file" style={{ marginRight: '16px' }}>
                        Xuất file
                    </Button>
                    <Button variant="primary" icon="add" onClick={() => console.log(123)}>
                        Thêm mới

                    </Button>


                </Col>

            </Row>
            <div className="edit-class__info mb-24">
                <div className="edit-class__info__content">
                    <h3 className="title-18-orange">Thông tin chung</h3>

                </div>
                <Row>
                    <Col span='5'>
                        <Row className="mb-16">
                            <h3 className="title-16-bold mr-24" style={{ minWidth: '90px' }}>Niên khoá:</h3>
                            <span className="title-16" >2020 - 2021</span>

                        </Row>
                        <Row className="mb-16">
                            <h3 className="title-16-bold mr-24" style={{ minWidth: '90px' }}>Khoa - Khối:</h3>
                            <span className="title-16" >Khối 6</span>
                        </Row>
                        <Row className="mb-16">
                            <h3 className="title-16-bold mr-24" style={{ minWidth: '90px' }}>Mã lớp học:</h3>
                            <span className="title-16" >2020-6A1</span>
                        </Row>
                        <Row className="mb-16">
                            <h3 className="title-16-bold mr-24" style={{ minWidth: '90px' }}>Tên lớp học:</h3>
                            <span className="title-16" >6A1</span>
                        </Row>
                    </Col>
                    <Col span='8'>
                        <Row className="mb-16">
                            <h3 className="title-16-bold " style={{ minWidth: '152px' }}>Giáo viên chủ nhiệm:</h3>
                            <span className="title-16" >Phạm Thị B</span>
                        </Row>
                        <Row className="mb-16">
                            <h3 className="title-16-bold " style={{ minWidth: '152px' }}>Số lượng học viên:</h3>
                            <span className="title-16" >45 học viên</span>
                        </Row>
                        <Row className="mb-16">
                            <h3 className="title-16-bold " style={{ minWidth: '152px' }}>Loại lớp học:</h3>
                            <span className="title-16" >Lớp học căn bản</span>
                        </Row>
                        <Row className="mb-16">
                            <h3 className="title-16-bold " style={{ minWidth: '152px' }}>Số lượng môn học:</h3>
                            <span className="title-16" >10 môn học</span>
                        </Row>
                    </Col>
                    <Col span='11'>
                        <Row>

                            <h3 className="title-16-bold mr-16" style={{ alignItems: 'flex-start' }}>Mô tả:</h3>
                            <span className="title-16" style={{ width: '300px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus quam vel aliquam lacinia.</span>
                        </Row>

                    </Col>
                </Row>
            </div>
            <div className="process">
                <div className="process__title">
                    
                </div>
            </div>
        </>
    )
}

export default Process