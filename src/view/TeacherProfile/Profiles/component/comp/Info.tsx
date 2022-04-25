import { Col, Row, Select } from 'antd'
import Checkbox from 'antd/lib/checkbox/Checkbox'
import React, { useState } from 'react'
import Button from '../../../../../shared/component/Button/Button'
import FormDeleteMain from '../../../../../shared/component/Form/FormDeleteMain'
import { IconArrowRight, IconDelete, IconEdit } from '../../../../../shared/component/Icon/Icon'
import ModalForm from '../../../../../shared/component/Modal/Modal'
import Status from '../../../../../shared/component/status/Status'
import { IShowComponent } from '../../../../Setting/Setting'



const Info = () => {
    const [isModalDelete, setIsModalDelete] = useState(false)

    return (
        <>
            <Row style={{
                position: 'absolute',
                top: '85px',
                right: 0,
            }}>

                <div className="select" style={{ marginRight: '700px' }}>
                    <Select defaultValue="2020-2021"></Select>

                </div>

                <Col style={{ display: 'flex', alignItems: 'center' }}>
                    <IconDelete

                        className="icon mr-16 "
                        onClick={() => setIsModalDelete(true)} />
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
                                        <h3 className="title-16-bold " style={{ width: '80px' }}>Địa chỉ:</h3>
                                        <h3 className="title-16">45 Bà Huyện Thanh Quan Q.1 TP.HCM</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '80px' }}>Email:</h3>
                                        <h3 className="title-16">nhtminh@gmail.com</h3>
                                    </Row>
                                    <Row className="mb-12">
                                        <h3 className="title-16-bold " style={{ width: '80px' }}>SĐT:</h3>
                                        <h3 className="title-16">0933 825 4365</h3>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>
                        <Row className="border-bottom mt-16 " style={{ height: '16px', background: '#F2F2F2', marginBottom: 0 }}>

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
                                        <Checkbox className="mr-8" /> <h3 className="title-16">Đoàn viên</h3>
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
                                        <Checkbox className="mr-8" /> <h3 className="title-16">Đảng viên</h3>
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
                        <Row className="border-bottom mt-16 " style={{ height: '16px', background: '#F2F2F2', marginBottom: 0 }}>

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
                                            <h3 className="title-16" style={{ width: '186px' }}>248 Calmette P.Nguyễn Thái Bình Q.1 TP.HCM</h3>
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
                                            <h3 className="title-16" style={{ width: '186px' }}>248 Calmette P.Nguyễn Thái Bình Q.1 TP.HCM</h3>
                                        </Row>
                                        <Row className="mb-12">
                                            <h3 className="title-16-bold " style={{ width: '150px' }}>SĐT:</h3>
                                            <h3 className="title-16">0909 852 963</h3>
                                        </Row>

                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Row>


                </div>

            </div>
            {isModalDelete === true ?
                (
                    <ModalForm isModalVisible={isModalDelete} setIsModalVisible={setIsModalDelete}>
                        <FormDeleteMain setIsModalDelete={setIsModalDelete} />
                    </ModalForm>
                ) : ''
            }
        </>
    )
}

export default Info