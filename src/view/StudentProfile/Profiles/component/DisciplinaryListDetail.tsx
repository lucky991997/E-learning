import { Table } from 'antd'
import Search from 'antd/lib/input/Search'
import React, { useState } from 'react'
import { IconDelete, IconEdit } from '../../../../shared/component/Icon/Icon'
import ModalForm from '../../../../shared/component/Modal/Modal'
import FormUpdateBonus from '../Form/FormUpdateBonus'
const DisciplinaryListDetail = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const data = [
        {
            key: 1,
            content: 'Học sinh giỏi cấp trường',
            qd: 'HSGCTT12021.pdf',
            date: 'Thứ 5, 21/08/2020',

        },
        {
            key: 2,
            content: 'Học sinh giỏi cấp trường',
            qd: 'HSGCTT12021.pdf',
            date: 'Thứ 5, 21/08/2020',

        },
        {
            key: 3,
            content: 'Học sinh giỏi cấp trường',
            qd: 'HSGCTT12021.pdf',
            date: 'Thứ 5, 21/08/2020',

        },
        {
            key: 4,
            content: 'Học sinh giỏi cấp trường',
            qd: 'HSGCTT12021.pdf',
            date: 'Thứ 5, 21/08/2020',

        },

    ]
    const columns = [
        {
            title: 'STT',
            key: 'key',
            dataIndex: 'key',
        },
        {
            title: 'Nội dung kỷ luật',
            key: 'content',
            dataIndex: 'content',
        },
        {
            title: 'Quyết định kỷ luật',
            key: 'qd',
            dataIndex: 'qd',
        },
        {
            title: 'Ngày quyết định',
            key: 'date',
            dataIndex: 'date',
        },
        {
            title: '',
            key: 'event',
            dateIndex: 'event',
            render: () => {
                return (

                    < div style={{ display: 'flex', justifyContent: 'center' }}>
                        <IconEdit onClick={() => setIsModalVisible(true)} className="icon mr-16" />

                        <IconDelete className="icon" />
                    </ div>
                )
            }
        }

    ]
    return (
        <div>
            <div className="title-content__search mb-16">
                <div></div>
                <Search placeholder="Tìm kiếm">
                </Search>
            </div>
            <div className="table-content">
                <Table dataSource={data} columns={columns} scroll={{ y: 250 }} />
            </div>
            {isModalVisible === true ?
                (
                    <ModalForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
                        <FormUpdateBonus  setIsModalVisible={setIsModalVisible} title="Kỷ luật"/>
                    </ModalForm>
                ) : ''
            }
        </div>
    )
}

export default DisciplinaryListDetail