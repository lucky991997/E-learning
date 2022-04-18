import { Col, DatePicker, Progress, Row, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import BoxInform from '../../shared/component/InformTitle/BoxInform'
import { Area } from '@ant-design/plots';
import '../../styles/view-styles/home.scss'
import ComlumnChart from '../../shared/component/Chart/ComlumnChart';

const Home = () => {
    const { Option } = Select
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
            range: [0, 1],
        },

        smooth: true,
        line: {
            color: "#CC5C00",
            size: 4,
        },
        areaStyle: () => {
            return {
                fill: "l(270) 0:#ffffff 0.5:#ffa200 1:#FCDFC9",
            };
        },
    };
    return (
        <div className="home">
            <h1 className="main-title mb-32 j-start">Tổng quan</h1>
            <div className="home-info">
                <Row className="mb-32">
                    <div className="select" style={{ width: '250px' }}>
                        <h3 className="title-16" >Niên khoá: </h3>
                        <Select defaultValue="2020-2021">
                            <Option>2020-2021</Option>
                        </Select>
                    </div>
                    <Col span='7'>
                        <BoxInform variant="primary" title='5000'>
                            Học viên
                        </BoxInform>

                    </Col>
                    <Col span='7' >
                        <BoxInform variant="secondary" title="1500">Giảng viên</BoxInform>

                    </Col>
                    <Col span='6'>
                        <BoxInform variant="blue" title="55">Lớp học</BoxInform>

                    </Col>
                </Row>
            </div >
            <div className="home-student mb-24">
                <div className="home-student-chart mr-24">
                    <div className="home-student-chart__title mb-24">
                        <h3 className="title-18-bold">Thống kê kết quả học tập</h3>
                        <div className="select">
                            <Select defaultValue="khối 6">
                                <Option>Khối 6</Option>
                            </Select>
                        </div>
                    </div>
                    <ComlumnChart />
                </div>
                <div className="home-student-progress">
                    <div className="home-student-progress__title">
                        <h3 className="title-18-bold" >Số lượng học viên</h3>
                        <div className="select">
                            <Select defaultValue="THCS  ">
                                <Option>THCS</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="home-student-progress__bar mb-28">
                        <div className="home-student-progress__bar__title">
                            <h3 className="title-16-bold">Khối 6</h3>
                            <h3 className="title-16-note" style={{ minWidth: '0', margin: 0 }}>2000</h3>

                        </div>
                        <Progress percent={30} showInfo={false} />
                    </div>
                    <div className="home-student-progress__bar mb-28">
                        <div className="home-student-progress__bar__title">
                            <h3 className="title-16-bold">Khối 7</h3>
                            <h3 className="title-16-note" style={{ minWidth: '0', margin: 0 }}>2000</h3>

                        </div>
                        <Progress percent={40} showInfo={false} />
                    </div>
                    <div className="home-student-progress__bar mb-28">
                        <div className="home-student-progress__bar__title">
                            <h3 className="title-16-bold">Khối 8</h3>
                            <h3 className="title-16-note" style={{ minWidth: '0', margin: 0 }}>2000</h3>

                        </div>
                        <Progress percent={70} showInfo={false} />
                    </div>
                    <div className="home-student-progress__bar mb-28">
                        <div className="home-student-progress__bar__title">
                            <h3 className="title-16-bold">Khối 9</h3>
                            <h3 className="title-16-note" style={{ minWidth: '0', margin: 0 }}>2000</h3>

                        </div>
                        <Progress percent={60} showInfo={false} />
                    </div>
                </div>
            </div>
            <div className="home-access">
                <div className="home-access__title mb-16">

                    <h3 className="title-18-bold">Thống kê lượng truy cập</h3>
                    <DatePicker picker="week" />

                </div>

                <Area {...config} style={{ height: '239px' }} />
            </div>

        </div >
    )
}

export default Home