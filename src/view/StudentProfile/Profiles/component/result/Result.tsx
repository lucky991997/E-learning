import { Col, Row } from 'antd'
import React, { useState } from 'react'
import ResultSem1 from './ResultSem1'
import ResultSem2 from './ResultSem2'
const Result = () => {
    const semTabHorizontal = [
        {
            name: 'Học kì 1',
            component: <ResultSem1/>,
        },
        {
            name: 'Học kì 2',
            component: <ResultSem2/>,
        },
    ]
    const [itemIndex, setItemIndex] = useState(0)
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
            <div className="result mb-16">
                <Row className="result-header mb-12">
                    <Col span='8'>
                        <h3 className="title-22 j-center">Học kỳ 1</h3>
                    </Col>
                    <Col span='8'>
                        <h3 className="title-22 j-center">Học kỳ 2</h3>
                    </Col>
                    <Col span='8'>
                        <h3 className="title-22 j-center">Cả năm</h3>
                    </Col>
                </Row>
                <Row className="result-content ">
                    <Col span="8">
                        <Row className="mb-24">
                            <Col offset='2' span="8">
                                <h3 className="title-16-orange">Học lực</h3>
                            </Col>
                            <Col span="8">
                                <h3 className="title-16-orange">Hạnh kiểm</h3>
                            </Col>
                            <Col span="6">
                                <h3 className="title-16-orange">Trung bình</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col offset='2' span="8">
                                <h3 className="title-16">Khá </h3>
                            </Col>
                            <Col span="8">
                                <h3 className="title-16">Tốt</h3>
                            </Col>
                            <Col span="6">
                                <h3 className="title-16">7.7</h3>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="8" >
                        <Row className="mb-24">
                            <Col offset='2' span="8">
                                <h3 className="title-16-orange">Học lực</h3>
                            </Col>
                            <Col span="8">
                                <h3 className="title-16-orange">Hạnh kiểm</h3>
                            </Col>
                            <Col span="6">
                                <h3 className="title-16-orange">Trung bình</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col offset='2' span="8">
                                <h3 className="title-16">Khá </h3>
                            </Col>
                            <Col span="8">
                                <h3 className="title-16">Tốt</h3>
                            </Col>
                            <Col span="6">
                                <h3 className="title-16">7.7</h3>
                            </Col>
                        </Row>
                    </Col>

                    <Col span="8">
                        <Row className="mb-24">
                            <Col offset='2' span="8">
                                <h3 className="title-16-orange">Học lực</h3>
                            </Col>
                            <Col span="8">
                                <h3 className="title-16-orange">Hạnh kiểm</h3>
                            </Col>
                            <Col span="6">
                                <h3 className="title-16-orange">Trung bình</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col offset='2' span="8">
                                <h3 className="title-16" style={{ color: '#49C510' }}>Khá </h3>
                            </Col>
                            <Col span="8">
                                <h3 className="title-16" style={{ color: '#49C510' }}>Tốt</h3>
                            </Col>
                            <Col span="6">
                                <h3 className="title-16" style={{ color: '#49C510' }}>7.7</h3>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

            <div className="tab__list__content mb-8" style={{ width: '308px' }}>
                {
                    semTabHorizontal.map((item, index) => (

                        <div
                            key={index}
                            className={`tab__list__content-title ${activeIndex(index) ? activeIndex(index) : ''}`}
                            onClick={() => handleListIndex(index)}>
                            <h3 className='title-18-black' style={{ marginLeft: '10px' }}>{item.name}</h3>
                        </div>
                    ))
                }

            </div>
            {
                semTabHorizontal.map((item, index) => (
                    <div key={index}>
                        {

                            itemIndex === index ? item.component : ''
                        }

                    </div>
                ))
            }

        </>
    )
}

export default Result