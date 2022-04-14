import { Checkbox, Table } from 'antd'
import React from 'react'
import { IconDelete, IconEdit, IconListTitle } from '../../../../shared/component/Icon/Icon'


type AssignProps = {
    setShowTitleList: any;
}
const AssignList = ({ setShowTitleList }: AssignProps) => {
    const data = [
        {
            key: 1,
            id: '125 1456 8954',
            name: '6A',
            startDate: '01/01/2190',
            endDate: '01/01/2190'
        },
        {
            key: 2,
            id: '125 1456 8954',
            name: '6A',
            startDate: '01/01/2190',
            endDate: '01/01/2190'

        },
        {
            key: 3,
            id: '125 1456 8954',
            name: '6A',
            startDate: '01/01/2190',
            endDate: '01/01/2190'

        },
        {
            key: 4,
            id: '125 1456 8954',
            name: '6A',
            startDate: '01/01/2190',
            endDate: '01/01/2190'

        },
        {
            key: 5,
            id: '125 1456 8954',
            name: '6A',
            startDate: '01/01/2190',
            endDate: '01/01/2190'


        },
        {
            key: 6,
            id: '125 1456 8954',
            name: '6A',
            startDate: '01/01/2190',
            endDate: '01/01/2190'

        },
        {
            key: 7,
            id: '125 1456 8954',
            name: '6A',
            startDate: '01/01/2190',
            endDate: '01/01/2190'
        },
        {
            key: 8,
            id: '125 1456 8954',
            name: '6A',
            startDate: '01/01/2190',
            endDate: '01/01/2190'
        },
    ]

    const columns = [
        {
            title: '',
            dataIndex: 'checkbox',
            key: 'checkbox',
            render: () => {
                return (
                    <div >
                        <Checkbox />
                    </div>
                )
            }
        },
        {
            title: (
                <div style={{ textAlign: 'left', marginLeft: '20px' }}>Mã lớp</div>
            ),
            dataIndex: 'id',
            key: 'id'

        },
        {
            title: 'Tên Lớp',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Ngày bắt đầu',
            dataIndex: 'startDate',
            key: 'startDate'
        },
        {
            title: 'Ngày kết thúc',
            dataIndex: 'endDate',
            key: 'endDate'
        },
        {
            title: 'Danh sách chủ đề',
            dataIndex: 'listTitle',
            key: 'listTitle',
            render: () => {
                return (
                    <div >
                        <IconListTitle onClick={() => setShowTitleList(false)} className='icon mr-24' />
                    </div>
                )
            }
        },
        {
            title: '',
            dataIndex: 'subjectInfor',
            key: 'subjectInfor',
            render: () => {
                return (
                    <div >
                        <IconEdit onClick={() => console.log(123)} className='icon mr-24' />
                        <IconDelete onClick={() => console.log(123)} className='icon mr-24' />
                    </div>
                )
            }
        }
    ]
    return (
        <div className="table-content">
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default AssignList