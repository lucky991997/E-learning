import { Col, Form, Input, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import FormRange from 'react-bootstrap/esm/FormRange'
import Button from '../../../../../shared/component/Button/Button'

const FormAddCourse = () => {
    const course = [
        {
            id: 1,
            name: 'Tiếng Anh',
        },
        {
            id: 2,
            name: 'Toán',
        },
        {
            id: 3,
            name: 'Tin học',
        },
        {
            id: 4,
            name: 'Hóa Học',
        },
        {
            id: 5,
            name: 'Vật lý',
        },
        {
            id: 6,
            name: 'Giáo dục công dân',
        },
        {
            id: 7,
            name: 'Ngữ văn',
        },
    ]
    // const [changeColor, setChangeColor] = useState(...indexCourse)
    const [indexCourse, setIndexCourse] = useState<number[]>([])
    const [background, setBackground] = useState<number>(0)
    const handleChange = (index: number, id: number) => {
        setIndexCourse(prev => {
            const test = prev.findIndex(item => item === id)
            if (test > -1) {
                prev.splice(test, 1)
                return [...prev]
            } else {
                return [...prev, id]
            }
        }
        )
        setBackground(id)

    }
    useEffect(() => {
    }, [indexCourse])



    return (
        <div className="form-layout">
            <h2 className="title-28 j-center mb-24">Thêm môn kiêm nhiệm</h2>
            <div className="form-input">
                <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Form.Item
                        label="Thêm môn kiêm nhiệm"
                        name="course"
                    >
                        <Input />
                    </Form.Item>
                    <div className="border-bottom"></div>
                    <h3 className="title-18-orange mb-16">Danh sách môn học</h3>


                    <Row>
                        {
                            course.map((item, index) => (
                                <Button variant="course" key={index}


                                    onClick={() => { handleChange(index, item.id) }}


                                    style={{
                                        background: `${indexCourse.findIndex(i => i === item.id) !== -1 ? '#0B80EC' : '#C5C5C5'}`
                                    }}




                                >
                                    {item.name}
                                </Button>
                            ))
                        }
                    </Row>
                    <Form.Item wrapperCol={{ offset: '6', span: '12' }}>
                        <div className="form-layout-btn mt-32">
                            <Button variant="secondary">Hủy</Button>
                            <Button variant="primary">Lưu</Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default FormAddCourse