import { Row, Select } from 'antd'
import React, { useEffect, useState } from 'react'

import '../../styles/view-styles/learning.scss'
import '../../styles/main-styles/table-list.scss'
import Class from './Class/Class'
import Department from './Department/Department'
import DepartmentOfSubject from './DepartmentOfSubject/DepartmentOfSubject'
import PointType from './PointType/PointType'
import SchoolYear from './SchoolYear/SchoolYear'
import Subject from './Subject/Subject'
import EditClass from './Class/component/Edit/EditClass'
import { RootState } from '../../core'
import { useDispatch, useSelector } from 'react-redux'
import {getLearningList} from '../../core/action/LearningAction'
import { ILearning } from '../../core/enums/EnumsLearningType'

export interface ILearningProps {
    learningList: ILearning[]
}

const Learning = () => {
    const {learningList, pointList} = useSelector((state:RootState) => state.LearningReducer)
    const dispatch = useDispatch()
    console.log(learningList)
    useEffect(() => {
        //@ts-ignore
        dispatch(getLearningList())
    },[dispatch])
    const [showEdit, setShowEdit] = useState(true)
    const tableContent = [
        {
            name: 'Niên  Khóa',
            component: <SchoolYear learningList={learningList}/>,
        },
        {
            name: 'Tổ - Bộ môn',
            component: <Department learningList={learningList}/>,
        },

        {
            name: 'Khoa - Khối',
            component: <DepartmentOfSubject  learningList={learningList}/>,
        },
        {
            name: 'Môn học', 
            component: <Subject learningList={learningList}/>,
        },
        {
            name: 'Lớp học',
            component: <Class setShowEdit={setShowEdit} learningList={learningList} />
        },
        {
            name: 'Loại điểm',
            component: <PointType learningList={learningList}/>
        }


    ]
    const [active, setActive] = useState(0)
    const { Option } = Select
    const handleActive = (index: number) => {
        setActive(index)
    }
    const activeTableContent = (index: number) => {
        if (active === index) {
            return 'active-tab-vertical'
        }
        else {
            return ''
        }
    }

    return (
        <div className="learning">
            {
                showEdit === true ? (
                    <>
                        <h1 className="main-title mb-32">Khai báo dữ liệu</h1>
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <div className="tab-control mr-24">
                                <div className="tab-control__select">
                                    <h3 className="title-16" style={{ color: '#fff', marginBottom: '8px' }} >Đang chọn xem:</h3>
                                    <div className="select" style={{ marginBottom: '8px' }}>
                                        <h3 className="title-16-bold" style={{ color: '#fff', marginRight: '27px' }}>Trường:</h3>
                                        <Select defaultValue="THCS">
                                            <Option key='1'>THCS</Option>
                                            <Option key='2'>THPT</Option>
                                        </Select>
                                    </div>
                                    <div className="select">
                                        <h3 className="title-16-bold" style={{ color: '#fff' }}>Niên Khóa:</h3>
                                        <Select defaultValue="2020-2021">
                                            <Option key='1'>2020-2021</Option>
                                            <Option key='2'>2019-2020</Option>
                                        </Select>
                                    </div>
                                </div>
                                {
                                    tableContent.map((item, index) => (
                                        <div key={index} className={`tab-control__content ${activeTableContent(index)}`} onClick={() => handleActive(index)}>
                                            <h3 className="title-18" style={{ color: '#000', display:'flex' }}>{item.name}</h3>
                                        </div>
                                    ))
                                }

                            </div>
                            <div className="learning-title">
                                {
                                    tableContent.map((item, index) => (
                                        <Row key={index}>
                                            {
                                                active === index ? item.component : ''
                                            }
                                        </Row>
                                    ))
                                }
                                <div className="learning-title__show-value">
                                    <h3 className="title-16">
                                        Hiển thị
                                        <input value="8" onChange={(e) => e.target.value} />
                                        hàng trong mỗi trang
                                    </h3>
                                </div>
                            </div>

                        </div>
                    </>
                ) : (
                    <EditClass setShowEdit={setShowEdit}/>
                )
            }



        </div>
    )
}

export default Learning