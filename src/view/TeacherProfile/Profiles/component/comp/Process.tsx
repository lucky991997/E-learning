import { Col, Collapse, Row, Select, Table } from 'antd'
import Search from 'antd/lib/input/Search'
import React, { useState } from 'react'
import Button from '../../../../../shared/component/Button/Button'

import { IconDelete, IconEdit, IconSort } from '../../../../../shared/component/Icon/Icon'
import ModalForm from '../../../../../shared/component/Modal/Modal'
import FormAddWork from '../Form/FormAddWork'


const Process = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const data = [
        {
            key: 1,
            id: 'THPT Campus',
            subject: 'Toán - Tin',
            chucvu: 'Giảng viên',
            startDate: '01/01/2021',
            endDate: 'Chưa xác định',

        },
        {
            key: 2,
            id: 'THPT Campus',
            subject: 'Toán - Tin',
            chucvu: 'Trưởng bộ môn',
            startDate: '01/01/2021',
            endDate: 'Chưa xác định',

        },
        {
            key: 3,
            id: 'THPT Campus',
            subject: 'Toán - Tin',
            chucvu: 'Giảng viên',
            startDate: '01/01/2021',
            endDate: 'Chưa xác định',

        },
        {
            key: 4,
            id: 'THPT Campus',
            subject: 'Toán - Tin',
            chucvu: 'Giảng viên',
            startDate: '01/01/2021',
            endDate: 'Chưa xác định',

        },
        {
            key: 5,
            id: 'THPT Campus',
            subject: 'Toán - Tin',
            chucvu: 'Giảng viên',
            startDate: '01/01/2021',
            endDate: 'Chưa xác định',

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
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
                    Tổ/ Bộ môn
                    <IconSort />
                </div>

            ),
            key: 'subject',
            dataIndex: 'subject',
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
                    Chức vụ
                    <IconSort />
                </div>

            ),
            key: 'chucvu',
            dataIndex: 'chucvu',
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
                    Ngày bắt đầu
                    <IconSort />
                </div>

            ),
            key: 'startDate',
            dataIndex: 'startDate',
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
                    Ngày kết thúc
                    <IconSort />
                </div>

            ),
            key: 'endDate',
            dataIndex: 'endDate',
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
                        <FormAddWork setIsModalVisible={setIsModalVisible} />
                    </ModalForm>
                ) : ''
            }
        </ >
    )
}

export default Process