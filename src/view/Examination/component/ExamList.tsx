import { Table } from 'antd'
import Search from 'antd/lib/input/Search'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../core'
import FormDeleteMain from '../../../shared/component/Form/FormDeleteMain'
import { IconDelete, IconEdit, IconEye, IconListTitle, IconSort } from '../../../shared/component/Icon/Icon'
import ModalForm, { ModalFormClose } from '../../../shared/component/Modal/Modal'
import FormDeleteSchoolYear from '../../Learning/SchoolYear/component/FormSchoolYear/FormDeleteSchoolYear'
import { ExamListProps } from '../Exam'
import FormDetailExam from '../form/FormDetailExam'



const ExamList = ({setShowList} : ExamListProps) => {
    const [isModalDetailExam, setIsModalDetailExam] = useState(false)
    const [isModalDelete, setIsModalDelete] = useState(false)
    const { pageSizeConfig } = useSelector((state:RootState) => state.ConfigPageReducer)

    const data = [
        {
            key: 1,
            sem: 'Học kì I',
            date: 'Thứ 5, 21/08/2020',
            khoi: 6,
            subject: 'Toán đại số',
            exam: 'giữa kì',
            status: 'Chờ phê duyệt',
            teacher: 'GV. Nguyễn Văn A',

        },
        {
            key: 2,
            sem: 'Học kì I',
            date: 'Thứ 5, 21/08/2020',
            khoi: 6,
            subject: 'Toán đại số',
            exam: 'giữa kì',
            status: 'Chờ phê duyệt',
            teacher: 'GV. Nguyễn Văn A',

        },
        {
            key: 3,
            sem: 'Học kì I',
            date: 'Thứ 5, 21/08/2020',
            khoi: 6,
            subject: 'Toán đại số',
            exam: 'giữa kì',
            status: 'Chờ phê duyệt',
            teacher: 'GV. Nguyễn Văn A',

        },
        {
            key: 4,
            sem: 'Học kì I',
            date: 'Thứ 5, 21/08/2020',
            khoi: 6,
            subject: 'Toán đại số',
            exam: 'giữa kì',
            status: 'Chờ phê duyệt',
            teacher: 'GV. Nguyễn Văn A',

        },
        {
            key: 5,
            sem: 'Học kì I',
            date: 'Thứ 5, 21/08/2020',
            khoi: 6,
            subject: 'Toán đại số',
            exam: 'giữa kì',
            status: 'Chờ phê duyệt',
            teacher: 'GV. Nguyễn Văn A',

        },
        {
            key: 6,
            sem: 'Học kì I',
            date: 'Thứ 5, 21/08/2020',
            khoi: 6,
            subject: 'Toán đại số',
            exam: 'giữa kì',
            status: 'Chờ phê duyệt',
            teacher: 'GV. Nguyễn Văn A',

        },
        {
            key: 7,
            sem: 'Học kì I',
            date: 'Thứ 5, 21/08/2020',
            khoi: 6,
            subject: 'Toán đại số',
            exam: 'giữa kì',
            status: 'Chờ phê duyệt',
            teacher: 'GV. Nguyễn Văn A',

        },
        {
            key: 8,
            sem: 'Học kì I',
            date: 'Thứ 5, 21/08/2020',
            khoi: 6,
            subject: 'Toán đại số',
            exam: 'giữa kì',
            status: 'Chờ phê duyệt',
            teacher: 'GV. Nguyễn Văn A',

        },

    ]
   
    const columns = [
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    Học kỳ
                    <IconSort />
                </div>
            ),
            sorter: true,
            dataIndex: 'sem',
            key: 'sem',
            render: (type: string) => {
                return (
                    <div >
                        {type}
                    </div>
                )
            }
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    Ngày làm bài
                    <IconSort />
                </div>
            ),
            sorter: true,
            dataIndex: 'date',
            key: 'date',
            render: (type: string) => {
                return (
                    <div >
                        {type}
                    </div>
                )
            }
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    Khoa - Khối
                    <IconSort />
                </div>
            ),
            sorter: true,
            dataIndex: 'khoi',
            key: 'khoi',
            render: (type: string) => {
                return (
                    <div >
                        {type}
                    </div>
                )
            }
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    Môn thi
                    <IconSort />
                </div>
            ),
            sorter: true,
            dataIndex: 'subject',
            key: 'subject',
            render: (type: string) => {
                return (
                    <div >
                        {type}
                    </div>
                )
            }
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    Tên kì thi
                    <IconSort />
                </div>
            ),
            sorter: true,
            dataIndex: 'exam',
            key: 'exam',
            render: (type: string) => {
                return (
                    <div >
                        {type}
                    </div>
                )
            }
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    Tình trạng
                    <IconSort />
                </div>
            ),
            sorter: true,
            dataIndex: 'status',
            key: 'status',
            render: (type: string) => {
                return (

                    <h3 style={{minWidth: '0'}} className="title-16-note">{type}</h3>

                )
            }
        },

        {
            title: (
                <div>
                    Danh sách lớp thi

                </div>
            ),
            dataIndex: 'list',
            key: 'list',
            render: () => {
                return (
                    <div >
                        <IconListTitle onClick={() => setShowList(true)} className="icon mr-24" />

                    </div>

                )
            }
        },

        {
            title: (
                <div >
                    Phân công chấm thi

                </div>
            ),
            dataIndex: 'teacher',
            key: 'teacher',

        },
        {
            title: '',
            dataIndex: 'event',
            key: 'event',
            render: () => {
                return (
                    <div style={{ display: 'flex' }}>
                        <IconEye onClick={() => setIsModalDetailExam(true)} className="icon mr-24" />
                        <IconEdit className="icon mr-24" />
                        <IconDelete onClick={() => setIsModalDelete(true)}
                        className="icon" />
                    </div>

                )
            }
        },
    ]
    return (
        <div className="exam__list">
            <div className="title-content">

                <div className="title-content__search mb-24">
                    <h3 className="title-22">Danh sách bài thi</h3>
                    <Search placeholder='please enter' />
                </div>
            </div>
            <div className="table-content">
                <Table pagination={{pageSize: pageSizeConfig}}columns={columns} dataSource={data} showSorterTooltip={false}/>
            </div>
            <div className="title__show-value" style={{ bottom: 0 }}>
                <h3 className="title-16">
                    Hiển thị
                    <input value={pageSizeConfig} onChange={(e) => console.log(e)} />
                    hàng trong mỗi trang
                </h3>
            </div>

            {isModalDetailExam === true ?
                (
                    <ModalFormClose isModalVisible={isModalDetailExam} setIsModalVisible={setIsModalDetailExam}>
                        <FormDetailExam setIsModalVisible={setIsModalDetailExam} />
                    </ModalFormClose>
                ) : ''
            }
            {isModalDelete === true ?
                (
                    <ModalForm closable={true} isModalVisible={isModalDelete} setIsModalVisible={setIsModalDelete}>
                        <FormDeleteSchoolYear title="Xóa Lịch thi" setIsModalDelete={setIsModalDelete} />
                    </ModalForm>
                ) : ''
            }
        </div>
    )
}

export default ExamList