import { Col, Collapse, Row, Select } from 'antd'
import React, { useState } from 'react'
import { Panel } from '../../../../../layout/Index'
import Button from '../../../../../shared/component/Button/Button'
import Education from './Education'
import Process from './Process'

import '../../../../../styles/main-styles/collapse-extra.scss'


const WorkProcess = () => {
    const subComponent = [
        {
            key: '0',
            name: 'Quá trình công tác',
            component: <Process />,
        },
        {
            key: '1',
            name: 'Thông tin đào tạo',
            component: <Education />,
        },
    ]

    const [valueCollapse, setValueCollapse] = useState<number | []>(0)
    const handleActiveCollapse = (index: number) => {

        if (index === valueCollapse) {
            setValueCollapse([])
        } else {
            setValueCollapse(index)
        }
    }
    return (

        <>
            <Row style={{
                position: 'absolute',

                top: '85px',
                right: 0,
            }}>

                <div className="select" style={{ marginRight: '650px' }}>
                    <div style={{ marginRight: '12px' }}>

                        <Select defaultValue="2020-2021" ></Select>
                    </div>
                    <Select defaultValue="Chọn tệp"></Select>
                </div>

                <Col style={{ display: 'flex', alignItems: 'center' }}>


                    <Button variant="file" onClick={() => console.log(123)}>
                        Xuất file

                    </Button>


                </Col>
            </Row>
            <div className="collapse">
                <Collapse activeKey={valueCollapse} defaultActiveKey={valueCollapse} >
                    {
                        subComponent.map((item, index) =>
                            <Panel header={item.name} key={index} style={{ marginBottom: '12px' }}
                                extra={
                                    <div style={{background: 'transparent', width: '100%', height: '100%'}} onClick={() => handleActiveCollapse(index)}>

                                    </div>
                                }
                            >
                                {
                                    valueCollapse === index ? item.component : ''
                                }

                            </Panel>
                        )
                    }
                </Collapse>
            </div>
        </>
    )
}

export default WorkProcess