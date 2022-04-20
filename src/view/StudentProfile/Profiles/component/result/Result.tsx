import { Col, Row } from 'antd'
import React from 'react'

const Result = () => {
    return (
        <div className="result">
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
    )
}

export default Result