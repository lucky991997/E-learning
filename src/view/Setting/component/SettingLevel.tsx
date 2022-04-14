import { Select, Table } from 'antd'
import Search from 'antd/lib/input/Search'
import React from 'react'
import Button from '../../../shared/component/Button/Button'
import { IconArrowRight, IconDelete, IconEdit, IconSort } from '../../../shared/component/Icon/Icon'
import { IShowComponent } from '../Setting' 
const SettingLevel = ({setShowComponent} : IShowComponent) => {
    const data = [
        {
            key: 1,
            type: 'THCS',
            status: false,
            note: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
        },
        {
            key: 2,
            type: 'Đại học',
            status: true,
            note: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
        },
        {
            key: 3,
            type: 'Cao Đẳng',
            status: true,
            note: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
        },
        {
            key: 4,
            type: 'Môn phụ đạo',
            status: false,
            note: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
        },
        {
            key: 5,
            type: 'THCS',
            status: false,
            note: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
        },
        {
            key: 6,
            type: 'Đại học',
            status: true,
            note: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
        },
        {
            key: 7,
            type: 'Cao Đẳng',
            status: true,
            note: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
        },
        {
            key: 8,
            type: 'Môn phụ đạo',
            status: false,
            note: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
        },
    ]
    const columns = [
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20%' }}>
                   Trình Độ
                    <IconSort />
                </div>
            ),
            sorter: true,
            dataIndex: 'type',
            key: 'type',
            render: (type: string) => {
                return (
                    <div style={{ display: 'flex', marginLeft: '20%' }}>
                        {type}
                    </div>
                )
            }
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (status: boolean) => {
                return (


                    status === true ?
                        (
                            <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '25%' }}>
                                <h3 className="title-16" style={{ color: '#ED2025' }}>Đã vô hiêu hóa</h3>
                            </div>
                        ) :
                        (
                            <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '25%' }}>
                                <h3 className="title-16" style={{ color: '#0B80EC' }}>Đang hoạt động</h3>
                            </div>

                        )

                )
            }
        },
        {
            title: (
                <div style={{ display: 'flex', marginLeft: '15%' }}>
                    Ghi chú
                    
                </div>
            ),
            dataIndex: 'note',
            key: 'note',
     
        },
        {
            title: '',
            dataIndex: 'event',
            key: 'event',
            render: () => {
                return (
                    <div style={{ display: 'flex' }}>
                        <IconEdit className="icon mr-24" />
                        <IconDelete className="icon" />
                    </div>

                )
            }
        },
    ]
    return (
        <div className="setting-class">
            <div className="config__title mb-32" onClick={() => setShowComponent(true)}>
                <h3 className="title-18-black mr-32">Cài đặt hệ thống</h3>
                <IconArrowRight className="icon  mr-32" />
                <h1 className="main-title">Cấu hình</h1>
            </div>
            <div className="control mb-24">
                <div className="select">
                    <Select defaultValue="2020-2021">

                    </Select>
                </div>
                <div className="control-btn">
                    <Button variant="primary" icon="add">Thêm mới</Button>
                </div>
            </div>
            <div className="setting-class__list">
                <div className="title-content__search mb-24">
                    <h2 className="title-22">Danh sách các môn học</h2>
                    <Search placeholder='tìm kiếm' />
                </div>
                <div className="table-content">
                    <Table columns={columns} dataSource={data} />
                </div>
                <div className="title__show-value" style={{ bottom: 0 }}>
                    <h3 className="title-16">
                        Hiển thị
                        <input defaultValue="8" onChange={(e) => e.target.value} />
                        hàng trong mỗi trang
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default SettingLevel