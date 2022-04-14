import { Checkbox, Col, Row, Select } from 'antd'
import React from 'react'
import Button from '../../../shared/component/Button/Button'
import { IconArrowDown, IconArrowRight } from '../../../shared/component/Icon/Icon'
import { IShowComponent } from '../Setting'

const ConfigSetting = ( {setShowComponent} : IShowComponent) => {
    const { Option } = Select
    return (
        <div className="config">
            <div className="config__title mb-32" onClick={() => setShowComponent(true)}>
                <h3 className="title-18-black mr-32" >Cài đặt hệ thống</h3>
                <IconArrowRight className="icon  mr-32" />
                <h1 className="main-title">Cấu hình</h1>
            </div>
            <div className="config-setting">
                <div className="config-setting__config">
                    <h2 className="title-28 mb-24">Cấu hình</h2>
                    <div className="config-setting__config-current mb-16"></div>
                    <h3 className="title-18-black j-center" style={{ marginBottom: '56px' }}>Theme đang sử dụng</h3>
                    <div className="config-setting__config-check mb-36">
                        <h3 className="title-16-bold">Captcha</h3>
                        <Checkbox />
                        <h3 className="title-16 ml-8">Kích hoạt captcha khi đăng nhập vào hệ thống</h3>
                    </div>
                    <div className="config-setting__config-language">
                        <h3 className="title-16-bold">Ngôn ngữ</h3>

                        <Select
                            suffixIcon={<IconArrowDown className="icon" style={{ width: '18px', marginTop: '4px' }} />}
                            defaultValue="Tiếng Việt"
                            style={{ width: "480px", height: "40px" }}>
                            <Option value="1">Tiếng Việt</Option>
                        </Select>

                    </div>

                </div>
                <div className="config-setting__theme">
                    <h2 className="title-28 mb-24">Theme hiện có</h2>
                    <Row>
                        <Col span="6" className="mb-32">
                            <div className="config-setting__theme-bg"></div>
                            <h3 className="title-16" style={{ marginLeft: "11%" }}>Lorem ipsum dolor sit</h3>
                        </Col>
                        <Col span="6" className="mb-32" style={{ margin: '0 84px' }}>
                            <div className="config-setting__theme-bg"></div>
                            <h3 className="title-16" style={{ marginLeft: "11%" }}>Lorem ipsum dolor sit</h3>
                        </Col>
                        <Col span="6" className="mb-32">
                            <div className="config-setting__theme-bg"></div>
                            <h3 className="title-16" style={{ marginLeft: "11%" }}>Lorem ipsum dolor sit</h3>
                        </Col>
                        <Col span="6" className="mb-32">
                            <div className="config-setting__theme-bg"></div>
                            <h3 className="title-16" style={{ marginLeft: "11%" }}>Lorem ipsum dolor sit</h3>
                        </Col>
                        <Col span="6" className="mb-32" style={{ margin: '0 84px' }}>
                            <div className="config-setting__theme-bg"></div>
                            <h3 className="title-16" style={{ marginLeft: "11%" }}>Lorem ipsum dolor sit</h3>
                        </Col>
                        <Col span="6" className="mb-32">
                            <div className="config-setting__theme-bg"></div>
                            <h3 className="title-16" style={{ marginLeft: "11%" }}>Lorem ipsum dolor sit</h3>
                        </Col>
                    </Row>
                </div>

                <div className="config-setting__event">
                    <Button variant="secondary">Hủy</Button>
                    <Button variant="primary">Lưu</Button>
                    
                </div>
            </div>
        </div>
    )
}

export default ConfigSetting