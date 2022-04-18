import { Col, Row, Select } from 'antd'
import React, { useState } from 'react'
import Button from '../../../../shared/component/Button/Button'
import { IconArrowRight, IconDelete, IconEdit } from '../../../../shared/component/Icon/Icon'
import Status from '../../../../shared/component/status/Status'
import { IShowComponent } from '../../../Setting/Setting'
import Process from './Process'



const InfoStudent = () => {

    const [itemIndex, setItemIndex] = useState(0)

    const tabHorizontal = [
        {
            name: 'Thông tin chung',
            component: <InfoStudent  />,
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
    return (
        <>
            <div className="mb-32" style={{ display: 'flex', alignItems: 'center' }}>
                <h3 className="title-18-black mr-32">Hồ sơ học viên</h3>
                <IconArrowRight className="icon mr-32" />
                <h1 className="main-title" >Thông tin hoc viên</h1>
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
                                <h3 className="title-16-orange mb-24">Thông tin học viên</h3>
                            </Row>
                            <Row>
                                <Col span="8">
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
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Nơi sinh:</h3>
                                        <h3 className="title-16">TP.HCM</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Dân tộc:</h3>
                                        <h3 className="title-16">Kinh</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Tôn giáo</h3>
                                        <h3 className="title-16">Không</h3>
                                    </Row>




                                </Col>
                                <Col span="8">
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Niên khóa:</h3>
                                        <h3 className="title-16">2020-2021</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>khối</h3>
                                        <h3 className="title-16">7</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Lớp:</h3>
                                        <h3 className="title-16">7A</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Mã học viên:</h3>
                                        <h3 className="title-16">2020-HS1213</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Ngày nhập học:</h3>
                                        <h3 className="title-16">05 / 09 / 2013</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Hình thức:</h3>
                                        <h3 className="title-16">Trúng tuyển</h3>
                                    </Row>
                                </Col>
                                <Col span="8">
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Trạng thái:</h3>
                                        <h3 className="title-16"><Status variant="open"> Đang theo học</Status></h3>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>
                        <Row className="border-bottom mt-16 " style={{ height: '16px', background: '#F2F2F2' }}>

                        </Row>
                    </Row>
                    <Row className="info-general__content">
                        <Col offset="6" span="18">
                            <Row>
                                <h3 className="title-16-orange mb-24">Thông tin liên hệ</h3>
                            </Row>
                            <Row>
                                <Col span="18">
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Địa chỉ:</h3>
                                        <h3 className="title-16">86/33 Âu Cơ, phường 9, quận Tân Bình, Thành phố Hồ Chí Minh</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Email:</h3>
                                        <h3 className="title-16">quoctuan090997@gmail.com</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Điện thoại:</h3>
                                        <h3 className="title-16">0318486146</h3>
                                    </Row>


                                </Col>

                            </Row>

                        </Col>
                        <div className="info-contact mt-32" style={{ width: '100%' }}>
                            <div className="info-contact__title">
                                <h3 className="title-18">Danh sách cơ sở</h3>

                            </div>
                        </div>
                        <Row className="info-contact__content">


                            <Col offset="1" span="5">
                                <Row className="mb-16">
                                    <h3 className="title-16-bold " style={{ width: '150px' }}>Họ tên bố:</h3>
                                    <h3 className="title-16">Phạm Hoàng A</h3>
                                </Row>
                                <Row className="mb-16">
                                    <h3 className="title-16-bold " style={{ width: '150px' }}>Họ tên mẹ:</h3>
                                    <h3 className="title-16">Nguyễn Thị A</h3>
                                </Row>
                                <Row className="mb-16">
                                    <h3 className="title-16-bold " style={{ width: '150px' }}>Họ tên giám hộ:</h3>
                                    <h3 className="title-16">Trần Thị M</h3>
                                </Row>

                            </Col>
                            <Col span="6">
                                <Row className="mb-16">
                                    <h3 className="title-16-bold " style={{ width: '150px' }}>Năm sinh bố:</h3>
                                    <h3 className="title-16">1962</h3>
                                </Row>
                                <Row className="mb-16">
                                    <h3 className="title-16-bold " style={{ width: '150px' }}>Năm sinh mẹ:</h3>
                                    <h3 className="title-16">1976</h3>
                                </Row>
                                <Row className="mb-16">
                                    <h3 className="title-16-bold " style={{ width: '150px' }}>Năm sinh GH:</h3>
                                    <h3 className="title-16">1956</h3>
                                </Row>
                            </Col>

                            <Col span="6">
                                <Row className="mb-16">
                                    <h3 className="title-16-bold " style={{ width: '150px' }}>Nghề nghiệp bố:</h3>
                                    <h3 className="title-16">Luật sư</h3>
                                </Row>
                                <Row className="mb-16">
                                    <h3 className="title-16-bold " style={{ width: '150px' }}>Nghề nghiệp mẹ:</h3>
                                    <h3 className="title-16">Giáo viên</h3>
                                </Row>
                                <Row className="mb-16">
                                    <h3 className="title-16-bold " style={{ width: '150px' }}>Nghề nghiệp GH:</h3>
                                    <h3 className="title-16">Về hưu</h3>
                                </Row>
                            </Col>
                            <Col span="6">
                                <Row className="mb-16">
                                    <h3 className="title-16-bold " style={{ width: '150px' }}>Điện thoại bố:</h3>
                                    <h3 className="title-16">0524536254</h3>
                                </Row>
                                <Row className="mb-16">
                                    <h3 className="title-16-bold " style={{ width: '150px' }}>Điện thoại mẹ:</h3>
                                    <h3 className="title-16">0325652147</h3>
                                </Row>
                                <Row className="mb-16">
                                    <h3 className="title-16-bold " style={{ width: '150px' }}>Điện thoại GH:</h3>
                                    <h3 className="title-16">0123204523</h3>
                                </Row>
                            </Col>

                        </Row>
                    </Row>

                </div>

            </div>
        </>
    )
}

export default InfoStudent