import { Checkbox, Col, Input, Row, Select } from 'antd'
import React from 'react'
import { useFormik } from 'formik'
import Button from '../../../shared/component/Button/Button'
import { IconArrowDown, IconArrowRight } from '../../../shared/component/Icon/Icon'
import { IShowComponent } from '../Setting'
import { useDispatch } from 'react-redux'
import { getPageSize } from '../../../core/action/ConfigPageAction'
import { useSelector } from 'react-redux'
import { RootState } from '../../../core'
export interface IConfig {
    pageSize: number
}
const ConfigSetting = ({ setShowComponent }: IShowComponent) => {
    const { pageSizeConfig } = useSelector((state: RootState) => state.ConfigPageReducer)

    const { Option } = Select
    const dispatch = useDispatch()
    const initialValues: IConfig = {
        pageSize: 0
    }
    //@ts-ignore
    const formik = useFormik({
        initialValues,
    })

    const handleConfig = () => {
        //@ts-ignore
        dispatch(getPageSize(formik.values.pageSize))
        setTimeout(() => {

            setShowComponent(true)
        }, 500)
    }
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
                    <div className="config-setting__config-language" style={{ marginBottom: '24px' }}>
                        <h3 className="title-16-bold">Ngôn ngữ</h3>

                        <Select
                            suffixIcon={<IconArrowDown className="icon" style={{ width: '18px', marginTop: '4px' }} />}
                            defaultValue="Tiếng Việt"
                            style={{ width: "480px", height: "40px" }}>
                            <Option value="1">Tiếng Việt</Option>
                        </Select>

                    </div>
                    <div className="config-setting__config-language">
                        <h4 className="title-16-bold" style={{ width: '114px' }}>phân trang</h4>
                        <Input
                            name="pageSize"
                            value={formik.values.pageSize === 0 ? pageSizeConfig : formik.values.pageSize}
                            onChange={formik.handleChange}
                            style={{ width: '100px', height: '40px' }} />
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
                    <Button variant="primary" onClick={() => handleConfig()}>Lưu</Button>

                </div>
            </div>
        </div>
    )
}

export default ConfigSetting