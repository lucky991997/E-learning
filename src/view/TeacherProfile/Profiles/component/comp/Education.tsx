import { Col, Collapse, Row, Select, Table } from 'antd'
import Search from 'antd/lib/input/Search'
import React, { useState } from 'react'
import Button from '../../../../../shared/component/Button/Button'

import { IconDelete, IconEdit, IconSort } from '../../../../../shared/component/Icon/Icon'
import ModalForm from '../../../../../shared/component/Modal/Modal'
import FormAddEducation from '../Form/FormAddEducation'
import FormAddWork from '../Form/FormAddWork'


const Education = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const data = [
        {
            key: 1,
            id: 'THPT Campus',
            subject: 'Toán - Tin',
            chucvu: 'Giảng viên',
            startDate: '01/01/2021',
            endDate: 'Chưa xác định',
            level: 'Cao đẳng',
            hinhthuc: 'tại chức',

        },
        {
            key: 2,
            id: 'THPT Campus',
            subject: 'Toán - Tin',
            chucvu: 'Trưởng bộ môn',
            startDate: '01/01/2021',
            endDate: 'Chưa xác định',
            level: 'Cao đẳng',
            hinhthuc: 'tại chức',


        },
        {
            key: 3,
            id: 'THPT Campus',
            subject: 'Toán - Tin',
            chucvu: 'Giảng viên',
            startDate: '01/01/2021',
            endDate: 'Chưa xác định',
            level: 'Cao đẳng',
            hinhthuc: 'tại chức',

        },
        {
            key: 4,
            id: 'THPT Campus',
            subject: 'Toán - Tin',
            chucvu: 'Giảng viên',
            startDate: '01/01/2021',
            endDate: 'Chưa xác định',
            level: 'Cao đẳng',
            hinhthuc: 'tại chức',

        },
        {
            key: 5,
            id: 'THPT Campus',
            subject: 'Toán - Tin',
            chucvu: 'Giảng viên',
            startDate: '01/01/2021',
            endDate: 'Chưa xác định',
            level: 'Cao đẳng',
            hinhthuc: 'tại chức',

        },

    ]
    const columns = [
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
                    Cơ quan/ Đơn vị
                    <IconSort />
                </div>

            ),
            key: 'id',
            dataIndex: 'id',
        },
        {   title: 'Chuyên ngành',
            key: 'subject',
            dataIndex: 'subject',
        },
        
        {
            title: 'Ngày bắt đầu',
            key: 'startDate',
            dataIndex: 'startDate',
        },
        {
            title: 'Ngày kết thúc',
            key: 'endDate',
            dataIndex: 'endDate',
        },
        {
            title: 'Văn bằng/ chứng chỉ',
            key: 'level',
            dataIndex: 'level',
        },
        {
            title: 'Hình thức',
            key: 'hinhthuc',
            dataIndex: 'hinhthuc',
        },
        {
            title: '',
            key: 'key',
            dataIndex: 'key',
            render: (key: number) => {
                return (
                    <div>
                        <IconEdit onClick={() => setIsModalVisible(true)} className="icon mr-16" />
                        <IconDelete className="icon" />

                    </div>
                )
            }
        },
    ]
    return (
        <>
            <div className="title-content__search mb-24">
                <Search placeholder="tìm kiếm"></Search>
                <Button variant="primary" icon="add"
                    onClick={() => setIsModalVisible(true)}
                >Thêm</Button>
            </div>
            <div className="table-content">
                <Table columns={columns} dataSource={data} />
            </div>
            {isModalVisible === true ?
                (
                    <ModalForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
                        <FormAddEducation setIsModalVisible={setIsModalVisible} />
                    </ModalForm>
                ) : ''
            }
        </ >
    )
}

export default Education