import { Col, Row, Select } from 'antd'
import Checkbox from 'antd/lib/checkbox/Checkbox'
import React, { useState } from 'react'
import Button from '../../../../shared/component/Button/Button'
import { IconArrowRight, IconDelete, IconEdit } from '../../../../shared/component/Icon/Icon'
import Status from '../../../../shared/component/status/Status'
import { IShowComponent } from '../../../Setting/Setting'



const InfoTeacher = () => {

    const [itemIndex, setItemIndex] = useState(0)

    const tabHorizontal = [
        {
            name: 'Thông tin chung',
            // component: <InfoTeacher  />,
        },
        {
            name: 'Quá trình công tác',
            // component: <Process />,
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
                <div className="select">
                    <Select defaultValue="2020-2021"></Select>
                </div>
                <Col style={{ display: 'flex', alignItems: 'center' }}>
                    <IconDelete className="icon mr-16 " onClick={() => console.log(123)} />
                    <div className="border-left mr-16"></div>

                    <Button variant="primary" icon="add" onClick={() => console.log(123)}>
                        Thêm mới

                    </Button>


                </Col>
            </Row>
            <div className="info">
                <div className="info-general">
                    <div className="info-general__title">
                        <h3 className="title-18">Thông tin chung</h3>
                    </div>
                    <Row className="info-general__content">
                        <Col span='6' className="info-general__content__img">
                            <img src="../../../../images/logo-school.PNG" alt="logo" />
                        </Col>
                        <Col span="18">
                            <Row>
                                <Col span="16">
                                    <h3 className="title-16-orange mb-24">Thông tin giảng viên</h3>
                                </Col>
                                <Col >
                                    <h3 className="title-16-orange mb-24">Địa chỉ liên hệ</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col span="8">
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Mã giảng viên:</h3>
                                        <h3 className="title-16">MGV89K1095</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}> </h3>
                                        <h3 className="title-16"><Checkbox style={{ marginRight: '8px' }} />Sinh mả tự động</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Tổ - Bộ môn:</h3>
                                        <h3 className="title-16">Toán - Lý - Hóa</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Môn giảng dạy:</h3>
                                        <h3 className="title-16">Toán</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Họ và Tên:</h3>
                                        <h3 className="title-16">Trần Quốc Tuấn</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Giới tính:</h3>
                                        <h3 className="title-16">NAm</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Ngày sinh:</h3>
                                        <h3 className="title-16">09/09/1997</h3>
                                    </Row>

                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Dân tộc:</h3>
                                        <h3 className="title-16">Kinh</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Ngày vào trường </h3>
                                        <h3 className="title-16">Dd/Mm/Yy</h3>
                                    </Row>




                                </Col>
                                <Col span="8">
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Quốc tịch:</h3>
                                        <h3 className="title-16">Việt Nam</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Tôn giáo:</h3>
                                        <h3 className="title-16">Phật Giáo</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Trạng thái:</h3>
                                        <Status variant="open"> Đang giảng dạy</Status>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Môn kiêm nhiệm:</h3>
                                        <h3 className="title-16">Toán Vật lý</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Bí danh:</h3>
                                        <h3 className="title-16">Không</h3>
                                    </Row>
                                </Col>
                                <Col span="8">
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Địa chỉ:</h3>
                                        <h3 className="title-16">45 Bà Huyện Thanh Quan Q.1 TP.HCM</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Email:</h3>
                                        <h3 className="title-16">nhtminh@gmail.com</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>SĐT:</h3>
                                        <h3 className="title-16">0933 825 4365</h3>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>
                        <Row className="border-bottom mt-16 " style={{ height: '16px', background: '#F2F2F2' , marginBottom: 0}}>

                        </Row>
                    </Row>
                    <Row className="info-general__content">
                        <Col offset="6" span="18">
                            <Row>
                                <h3 className="title-16-orange mb-24">Thông tin cá nhân</h3>
                            </Row>
                            <Row>
                                <Col span="8">
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>CMND/ CCND:</h3>
                                        <h3 className="title-16">87456 - xxxx - xxxx</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Ngày cấp:</h3>
                                        <h3 className="title-16">Dd/ Mm/ Yy</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Nơi cấp:</h3>
                                        <h3 className="title-16">Dd/ Mm/ Yy</h3>
                                    </Row>


                                </Col>
                                <Col span="8">
                                    <Row className="mb-12">
                                       <Checkbox className="mr-8"/> <h3 className="title-16">Đoàn viên</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Ngày vào Đoàn</h3>
                                        <h3 className="title-16">87456 - xxxx - xxxx</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Nơi vào Đoàn:</h3>
                                        <h3 className="title-16">Dd/ Mm/ Yy</h3>
                                    </Row>


                                </Col>
                                <Col span="8">
                                    <Row className="mb-12">
                                       <Checkbox className="mr-8"/> <h3 className="title-16">Đảng viên</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Ngày vào Đảng</h3>
                                        <h3 className="title-16">87456 - xxxx - xxxx</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Nơi vào Đảng</h3>
                                        <h3 className="title-16">Dd/ Mm/ Yy</h3>
                                    </Row>


                                </Col>
                            </Row>

                        </Col>
                        <Row className="border-bottom mt-16 " style={{ height: '16px', background: '#F2F2F2' , marginBottom: 0}}>

                        </Row>
                    </Row>
                    <Row className="info-general__content">
                        <Col offset="6" span="18">
                            <Row>
                                <h3 className="title-16-orange mb-24">Thông tin gia đình</h3>
                            </Row>
                            <Row>
                                <Col span="8">
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '120px' }}>Người liên hệ:</h3>
                                        <h3 className="title-16">Trần Nhựt Nam</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '120px' }}>Địa chỉ:</h3>
                                        <h3 className="title-16"  style={{ width: '186px' }}>248 Calmette P.Nguyễn Thái Bình Q.1 TP.HCM</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '120px' }}>SĐT:</h3>
                                        <h3 className="title-16">0985 562 3251</h3>
                                    </Row>


                                </Col>
                                <Col span="8">
                                   
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Người liên hệ 2:</h3>
                                        <h3 className="title-16">Nguyễn Minh Châu</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Địa chỉ:</h3>
                                        <h3 className="title-16"  style={{ width: '186px' }}>248 Calmette P.Nguyễn Thái Bình Q.1 TP.HCM</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>SĐT:</h3>
                                        <h3 className="title-16">0909 852 963</h3>
                                    </Row>

                                </Col>  
                            </Row>
                        </Col>
                    </Row>

                </div>

            </div>
        </>
    )
}

export default InfoTeacher