import { Col, Row, Select } from 'antd'
import React from 'react'
import Button from '../../../shared/component/Button/Button'
import { IconDelete, IconEdit } from '../../../shared/component/Icon/Icon'
import { IShowComponent } from '../Setting'
const InfoSchool = ( {setShowComponent}: IShowComponent) => {
    return (
        <>
            <h1 className="main-title mb-32" onClick={() => setShowComponent(true)}>Thông tin nhà trường</h1>
            <div className="control mb-24">
                <div className="select">
                    <Select defaultValue="2020-2021"></Select>
                </div>
                <div className="control-btn">
                    <Button variant="file">Xuất file</Button>
                    <Button variant="primary" icon="edit" style={{ width: '192px', marginLeft: '16px' }}>Chỉnh sửa</Button>

                </div>
            </div>
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
                                <h3 className="title-16-orange mb-24">Trung học cơ sở Tự Lập</h3>
                            </Row>
                            <Row>
                                <Col span="8">
                                    <Row className="mb-16">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Tên trường:</h3>
                                        <h3 className="title-16">THCS Tự Lập</h3>
                                    </Row>
                                    <Row className="mb-16">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Mã chuẩn:</h3>
                                        <h3 className="title-16">20202021</h3>
                                    </Row>
                                    <Row className="mb-16">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Tỉnh/Thành phố:</h3>
                                        <h3 className="title-16">Tp. Hồ Chí Minh</h3>
                                    </Row>
                                    <Row className="mb-16">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Xã/Phường:</h3>
                                        <h3 className="title-16">Phường 1</h3>
                                    </Row>
                                    <Row className="mb-16">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Quận/Huyện:</h3>
                                        <h3 className="title-16">Bình Thạnh</h3>
                                    </Row>
                                    <Row className="mb-16">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Trụ sở chính:</h3>
                                        <h3 className="title-16">Không</h3>
                                    </Row>
                                    <Row className="mb-16">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Loại trường:</h3>
                                        <h3 className="title-16">Trung học cơ sở</h3>
                                    </Row>
                                    <Row className="mb-16">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Số điện thoại:</h3>
                                        <h3 className="title-16">0123456789</h3>
                                    </Row>


                                </Col>
                                <Col span="8">
                                    <Row className="mb-16">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Fax:</h3>
                                        <h3 className="title-16">09085677667</h3>
                                    </Row>
                                    <Row className="mb-16">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Email:</h3>
                                        <h3 className="title-16">nguyenxasjke@gmail.com</h3>
                                    </Row>
                                    <Row className="mb-16">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Ngày thành lập:</h3>
                                        <h3 className="title-16">05/09/2013</h3>
                                    </Row>
                                    <Row className="mb-16">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Mô hình đào tạo:</h3>
                                        <h3 className="title-16">Công lập</h3>
                                    </Row>
                                    <Row className="mb-16">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Website:</h3>
                                        <h3 className="title-16">https://truongabc.com.vn</h3>
                                    </Row>
                                    <Row className="mb-16">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Hiệu trưởng:</h3>
                                        <h3 className="title-16">Bùi Văn Phát</h3>
                                    </Row>
                                    <Row className="mb-16">
                                        <h3 className="title-16-bold " style={{ width: '150px' }}>Sđt hiệu trưởng:</h3>
                                        <h3 className="title-16">0989222112</h3>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className="info-contact">
                    <div className="info-contact__title">
                        <h3 className="title-18">Danh sách cơ sở</h3>
                        <div className="info-contact__event">
                            <IconEdit className="info-icon" style={{ color: '#fff' }} />
                            <IconDelete className="info-icon" style={{ color: '#fff' }} />
                        </div>
                    </div>
                </div>
                <Row className="info-contact__content">
                    <Col span='6' className="info-contact__content__img">
                        <img src="../../../../images/coso.PNG" alt="logo" />
                    </Col>
                    <Col span="18">


                        <Row>
                            <h3 className="title-16-orange mb-24">Trung học cơ sở Tự Lập</h3>
                        </Row>
                        <Row>
                            <Col span="8">
                                <Row className="mb-16">
                                    <h3 className="title-16-bold " style={{ width: '150px' }}>Email:</h3>
                                    <h3 className="title-16">nguyenxasjke@gmail.com</h3>
                                </Row>
                                <Row className="mb-16">
                                    <h3 className="title-16-bold " style={{ width: '150px' }}>Số điện thoại:</h3>
                                    <h3 className="title-16">0123456789</h3>
                                </Row>


                            </Col>
                            <Col span="8">
                                <Row className="mb-16">
                                    <h3 className="title-16-bold " style={{ width: '150px' }}>Người phụ trách:</h3>
                                    <h3 className="title-16">Nguyễn Văn A</h3>
                                </Row>
                                <Row className="mb-16">
                                    <h3 className="title-16-bold " style={{ width: '150px' }}>SĐT:</h3>
                                    <h3 className="title-16">014521447741</h3>
                                </Row>

                            </Col>
                        </Row>
                        <Row className="mb-16">
                            <h3 className="title-16-bold " style={{ width: '150px' }}>Địa chỉ</h3>
                            <h3 className="title-16">12 Nguyễn Văn A, phường 12 Quận 6, thành phố Hồ Chí Minh</h3>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default InfoSchool