import { Checkbox, Table } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../core';
import { IconDelete, IconEdit, IconListTitle } from '../../../../shared/component/Icon/Icon'
import ModalForm from '../../../../shared/component/Modal/Modal';
import FormDeleteSchoolYear from '../../../Learning/SchoolYear/component/FormSchoolYear/FormDeleteSchoolYear';
import FormUpdateDate from '../form/FormUpdateDate';


type AssignProps = {
    setShowTitleList: any;
}
const AssignList = ({ setShowTitleList }: AssignProps) => {
    const [isModaldelete, setIsModalDelete] = useState(false)
    const [isModalUpdate, setIsModalUpdate] = useState(false)
    const { pageSizeConfig } = useSelector((state: RootState) => state.ConfigPageReducer)

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
                <div style={{ textAlign: 'left', marginLeft: '20px' }}>M?? l???p</div>
            ),
            dataIndex: 'id',
            key: 'id'

        },
        {
            title: 'T??n L???p',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Ng??y b???t ?????u',
            dataIndex: 'startDate',
            key: 'startDate'
        },
        {
            title: 'Ng??y k???t th??c',
            dataIndex: 'endDate',
            key: 'endDate'
        },
        {
            title: 'Danh s??ch ch??? ?????',
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
                        <IconEdit onClick={() => setIsModalUpdate(true)} className='icon mr-24' />
                        <IconDelete onClick={() => setIsModalDelete(true)} className='icon mr-24' />
                    </div>
                )
            }
        }
    ]
    return (
        <>
            <div className="table-content">
                <Table pagination={{pageSize: pageSizeConfig}}columns={columns} dataSource={data} />
            </div>
            {isModaldelete === true ?
                (
                    <ModalForm isModalVisible={isModaldelete} setIsModalVisible={setIsModalDelete}>
                        <FormDeleteSchoolYear setIsModalDelete={setIsModalDelete} title="Ph??n c??ng" />
                    </ModalForm>
                ) : ''
            }
            {isModalUpdate === true ?
                (
                    <ModalForm isModalVisible={isModalUpdate} setIsModalVisible={setIsModalUpdate}>
                        <FormUpdateDate setIsModalVisible={setIsModalUpdate} title="Ph??n c??ng" />
                    </ModalForm>
                ) : ''
            }
        </>
    )
}

export default AssignList