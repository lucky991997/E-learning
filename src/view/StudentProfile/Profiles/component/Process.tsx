import { Col, Collapse, Row, Select } from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Panel } from '../../../../layout/Index'
import Button from '../../../../shared/component/Button/Button'
import { IconArrowRight, IconDelete, IconEdit } from '../../../../shared/component/Icon/Icon'
import Status from '../../../../shared/component/status/Status'
import { IShowComponent } from '../../../Setting/Setting'
import InfoStudent from './InfoStudent'

import '../../../../styles/main-styles/collapse.scss'
import DisciplinaryListDetail from './DisciplinaryListDetail'
import AwardListDetail from './AwardListDetail'
import Result from './result/Result'

const Process = () => {
    const { Option } = Select
   
    const subComponent = [
        {
            name: 'Kết quả học tập',
            component: <Result/>,
        },
        {
            name: 'Danh sách khen thưởng',
            component: <AwardListDetail/>,
        },
        {
            name: 'Danh sách kỷ luật',
            component: <DisciplinaryListDetail />,
        }
    ]
    return (
        <>
            <div className="control"
                style={{
                    position: 'absolute',
                    top: '82px',
                    right: 0
                }}>
                <div className="select"
                    style={{ marginRight: '600px', }}
                >
                    <Select defaultValue="2020-2021" style={{ marginRight: '12px' }}>
                        <Option value="1">2020-2021</Option>
                    </Select>
                    <Select defaultValue="Chọn lớp">
                        <Option value="1">lớp 6A</Option>
                        <Option value="2">lớp 7A</Option>
                    </Select>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>

                    <Button variant="file">
                        Xuất file
                    </Button>



                </div>
            </div>
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

            <div className="collapse">
                <Collapse defaultActiveKey={0}>
                    {
                        subComponent.map((item, index) =>

                            <Panel header={item.name} key={index} style={{ marginBottom: '12px' }}>
                                {item.component}
                            </Panel>


                        )
                    }
                </Collapse>


            </div>

        </ >
    )
}

export default Process