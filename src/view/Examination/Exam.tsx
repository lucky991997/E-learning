import { Select } from 'antd'

import React, { useState } from 'react'
import Button from '../../shared/component/Button/Button'
import ExamList from './component/ExamList'

import '../../styles/view-styles/exam.scss'
import ExamDate from './component/ExamDate'
import ExamListClass from './component/ExamListClass'
import ModalForm from '../../shared/component/Modal/Modal'
import FormAddExam from './form/FormAddExam'

export type ExamListProps = {
    setShowList: any
}
const Exam = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [itemIndex, setItemIndex] = useState(0)
    const [showList, setShowList] = useState(false)
    const tabHorizontal = [
        {
            name: 'Xem theo bảng',
            component: <ExamList setShowList={setShowList} />,
        },
        {
            name: 'Xem theo lịch',
            component: <ExamDate />,
        },
    ]
    const { Option } = Select


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
            {
                showList === true ? (
                    <ExamListClass setShowList={setShowList} />
                )
                    : (<div className="exam">
                        <h1 className="main-title mb-32">Quản lý lịch thi</h1>
                        <div className="control mb-28">
                            <div className="select">
                                <Select defaultValue="2020-2021" className="mr-16">
                                    <Option value="1">2021-2022</Option>
                                </Select>
                                <Select defaultValue="Chọn lớp" className="mr-16">
                                    <Option value="1">6A</Option>
                                    <Option value="2">6B</Option>

                                </Select>
                                <Select defaultValue="Chọn khối" className="mr-16">
                                    <Option value="1">Khối 6</Option>
                                    <Option value="2">Khối 7</Option>
                                </Select>
                            </div>
                            <div className="tab__list__content" style={{ marginLeft: '-30%' }}>
                                {
                                    tabHorizontal.map((item, index) => (
                                        <div className={`tab__list__content-title ${activeIndex(index) ? activeIndex(index) : ''}`} key={index} onClick={() => handleListIndex(index)}>
                                            <h3 className='title-18-black' style={{ marginLeft: '10px' }}>{item.name}</h3>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="control-btn">
                                <Button variant="primary" icon="add"
                                    onClick={() => setIsModalVisible(true)}
                                >Thêm mới</Button>
                            </div>
                        </div>

                        {
                            tabHorizontal.map((item, index) => (
                                <div key={index}>
                                    {
                                        itemIndex === index ? item.component : ''
                                    }
                                </div>
                            ))
                        }

                    </div>)
            }

            {isModalVisible === true ?
                (
                    <ModalForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
                        <FormAddExam setIsModalVisible={setIsModalVisible} />
                    </ModalForm>
                ) : ''
            }

        </>


    )
}

export default Exam