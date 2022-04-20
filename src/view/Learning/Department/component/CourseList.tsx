import { Table } from 'antd'
import React, { useState } from 'react'
import { IconDelete, IconSort } from '../../../../shared/component/Icon/Icon'





export interface IModalList {
    setIsModalList: any,
}
const CourseList = ({setIsModalList} :IModalList) => {
    const data = [
        {
            key: 1,
            id: 'vl012',
            name: 'Vật lý ',
        },
        {
            key: 2,
            id: 'th010',
            name: 'Toán ',
        },
        {
            key: 3,
            id: 'vl009',
            name: 'Vật lý ',
        },
        {
            key: 4,
            id: 'vl009',
            name: 'Vật lý ',
        },
        {
            key: 5,
            id: 'vl009',
            name: 'Vật lý ',
        },
        {
            key: 6,
            id: 'hh010',
            name: 'Hóa học ',
        },
        {
            key: 7,
            id: 'vl009',
            name: 'Vật lý ',
        },
        {
            key: 8,
            id: 'vl009',
            name: 'Vật lý ',
        },
        {
            key: 9,
            id: 'hh010',
            name: 'Hóa học ',
        },
    ]
    const columns = [
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
                    Mã môn học
                    <IconSort />
                </div>
            ),
            sorter: true,
            dataIndex: 'id',
            key: 'id',

        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
                    Tên môn học
                    <IconSort />
                </div>
            ),
            sorter: true,
            dataIndex: 'name',
            key: 'name',
        }
    ]
    const rowSelection = {

        onChange: (selectedRowKeys: any) => {
            setRowKey(selectedRowKeys)
        }
    }
    const [rowKey, setRowKey] = useState<React.Key[]>([])
    console.log(rowKey)
    return (
        <div className="course-list">
            <h2 className="title-28 j-center mb-24">Danh sách môn học</h2>
            <IconDelete
                className="icon mb-16"
                style={{ float: 'right', color: `${rowKey.length > 0 ? '#FF7506' : '#999796'}` }} />
            <div className="table-content">
                <Table style={{ overflowY: 'hidden' }}
                    rowSelection={{ type: 'checkbox', ...rowSelection, columnWidth: '50px' }}
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    scroll={{ y: 350 }}
                />
            </div>
        </div>
    )
}

export default CourseList