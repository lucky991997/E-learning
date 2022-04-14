import { Row, Table } from 'antd'
import React from 'react'
import { IconDelete, IconEdit } from '../../../../shared/component/Icon/Icon'

const TitleList = () => {
    const data = [
        {
            key: 1,
            name:'Lorem ipsum dolor sit amet',
            description: 'Nullam malesuada posuere justo, in dictum ipsum',
            endDate: '01/01/2190',
        },
        {
            key: 2,
            name:'Lorem ipsum dolor sit amet',
            description: 'Nullam malesuada posuere justo, in dictum ipsum',
            endDate: '01/01/2190',
        },
        {
            key: 3,
            name:'Lorem ipsum dolor sit amet',
            description: 'Nullam malesuada posuere justo, in dictum ipsum',
            endDate: '01/01/2190',
        },
        {
            key: 4,
            name:'Lorem ipsum dolor sit amet',
            description: 'Nullam malesuada posuere justo, in dictum ipsum',
            endDate: '01/01/2190',
        },
    ]
    const columns = [
        {
            title: 'Chủ đề',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Mêu tả',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Ngày kết thúc',
            dataIndex: 'endDate',
            key: 'endDate',
        },
    ]
    return (
        <>
            <div className="title-list__title mb-12">
                <h3 className="title-22">Danh sách chủ đề</h3>
                <div className="title-list__title__event">
                    <IconEdit className="icon mr-32" />
                    <IconDelete className="icon" />
                </div>
            </div>
            <div className="title-list__info mb-16">
                <div className="title-list__info-teacher">
                    <h3 className="title-16 mr-8">Giảng viên:</h3>
                    <h3 className="title-18-bold">Lương Hoàng D</h3>
                </div>
                <div className="title-list__info-class">
                    <h3 className="title-16 mr-8">Lớp học:</h3>
                    <h3 className="title-18-bold">6D</h3>
                </div>
                <div className="title-list__info-course">
                    <h3 className="title-16 mr-8">Môn học:</h3>
                    <h3 className="title-18-bold">Tin học kèm toán</h3>
                </div>
            </div>
            <div className="table-content">
                {/* mai sửa lại pagination */}
                <Table columns={columns} dataSource={data} pagination={false} />
            </div>
        </>

    )
}

export default TitleList