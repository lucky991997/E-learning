import { Input, Select, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../../core'
import { getTeacherList } from '../../../core/action/TeacherAction'
import Button from '../../../shared/component/Button/Button'
import FormDeleteMain from '../../../shared/component/Form/FormDeleteMain'
import { IconArrowRight, IconDelete, IconEye, IconSort, IconUpdate } from '../../../shared/component/Icon/Icon'
import ModalForm from '../../../shared/component/Modal/Modal'
import Status from '../../../shared/component/status/Status'

import FormTeacherProfile from './component/Form/FormTeacherProfile'

const Profile = () => {
    const { pageSizeConfig } = useSelector((state: RootState) => state.ConfigPageReducer)

    const [isModalDelete, setIsModalDelete] = useState(false)
    const [isUpdate, setIsUpdate] = useState(false)
    const [isModalUpdateRetirement, setIsModalUpdateRetirement] = useState(false)
    const [isModalUpdateOff, setIssModalUpdateOff] = useState(false)
    const [isModalUpdateOffWork, setIsModalUpdateOffWork] = useState(false)
    const [rowKey, setRowKey] = useState<number>()
    const { teacherList } = useSelector((state: RootState) => state.TeacherReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        //@ts-ignore
        dispatch(getTeacherList())
    }, [dispatch])

    const handleUpdateRetirement = () => {
        setIsModalUpdateRetirement(true)
        setIsUpdate(false)
    }
    const handleUpdateOff = () => {
        setIssModalUpdateOff(true)
        setIsUpdate(false)
    }
    const handleUpdateReverse = () => {
        setIsModalUpdateOffWork(true)
        setIsUpdate(false)
    }
    const handleShowIsUpdate = (key: number) => {
        if (key === rowKey) {
            setIsUpdate(false)
        }
        else {
            setIsUpdate(true)
        }
    }
    const columns = [
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
                    M?? gi???ng vi??n
                    <IconSort />
                </div>),
            sorter: true,
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
                    T??n gi???ng vi??n
                    <IconSort />
                </div>),
            sorter: true,
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
                    Ng??y sinh
                    <IconSort />
                </div>),
            sorter: true,
            dataIndex: 'birthday',
            key: 'birthday',
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
                    Gi???i t??nh
                    <IconSort />
                </div>),
            sorter: true,
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
                    D??n t???c
                    <IconSort />
                </div>),
            sorter: true,
            dataIndex: 'nation',
            key: 'nation',
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
                    Ch???c v???
                    <IconSort />
                </div>),
            sorter: true,
            dataIndex: 'chucvu',
            key: 'chucvu',
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    T??nh tr???ng
                    <IconSort />
                </div>),
            sorter: true,
            dataIndex: 'status',
            key: 'status',
            render: (status: any) => {

                switch (status) {
                    case 'isStudy':
                        return <Status variant='open'>??ang l??m vi???c</Status>
                    case 'changSchool':
                        return <Status variant='open'>??ang l??m vi???c</Status>
                    case 'changClass':
                        return <Status variant='coming'>ngh??? h??u</Status>
                    case 'noStudy':
                        return <Status styles={{ width: '127px' }} variant='end'>???? ngh???</Status>
                    case 'graduate':
                        return <Status variant='graduate'>T???m ngh???</Status>
                    default:
                        return status
                }

            }
        },
        {
            title: '',
            dataIndex: 'key',
            key: 'key',
            render: (key: number) => {
                return (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Link to='/teacher/info'>

                            <IconEye onClick={() => console.log(123)} className='icon mr-24' />

                        </Link>
                        <div className="icon-update" style={{ position: 'relative' }}>
                            <IconUpdate onClick={() => handleShowIsUpdate(key)} className='icon mr-24' style={{ position: 'relative' }} />

                            {
                                key === rowKey && isUpdate === true ? (
                                    <div className="profile-update" style={{ height: '140px' }}>
                                        <h3 className="title-16" onClick={() => setIsUpdate(false)}>S???a h??? s??</h3>
                                        <div className="profile-update__border-b"></div>

                                        <h3 className="title-16"
                                            onClick={() => handleUpdateRetirement()}
                                        >   C???p nh???t ngh??? h??u</h3>
                                        <div className="profile-update__border-b"></div>

                                        <h3 className="title-16"
                                            onClick={() => handleUpdateOff()}
                                        >   C???p nh???t ngh??? vi???c</h3>
                                        <div className="profile-update__border-b"></div>

                                        <h3 className="title-16"
                                            onClick={() => handleUpdateReverse()}
                                        >   C???p nh???t t???m ngh???</h3>



                                    </div>
                                ) : ''
                            }
                        </div>
                        <IconDelete onClick={() => console.log(123)} className='icon mr-24' />
                    </div>
                )
            }
        }
    ]
    const { Search } = Input
    const { Option } = Select

    return (
        <div className="teacher">
            <div className="teacher__title" style={{ marginBottom: '42px' }}>
                <h3 className="title-18-black mr-32">H??? s?? gi???ng vi??n</h3>
                <IconArrowRight className="icon mr-32" />
                <h1 className="main-title">T???t c??? h??? s??</h1>
            </div>
            <div className="teacher__control mb-24">
                <div className="select">
                    <Select defaultValue="2020-2021">
                        <Option value="1">2020-2021</Option>
                    </Select>
                </div>
                <div className="teacher__control__event">
                    <IconDelete className="icon mr-16"
                        onClick={() => setIsModalDelete(true)}
                    >

                    </IconDelete>
                    <div className="border-h mr-16"></div>
                    <Button variant="file" style={{ marginRight: '16px' }}>Xu???t file</Button>
                    <Button variant="primary" icon="add">Th??m</Button>
                </div>
            </div>
            <div className="teacher__list">
                <div className="title-content__search mb-24">
                    <h2 className="title-22">Danh s??ch gi???ng vi??n</h2>
                    <Search onChange={(e) => console.log(e.target.value)} placeholder="input search text" style={{ width: 200 }} />

                </div>

                <div className="table-content">
                    <Table
                        pagination={{ pageSize: pageSizeConfig }}
                        rowSelection={{ type: 'checkbox' }}
                        showSorterTooltip={false}
                        columns={columns}
                        dataSource={teacherList}
                        onRow={(r) => (
                            { onClick: () => setRowKey(r.key), }
                        )}
                    />
                </div>
                <div className="title__show-value" style={{ bottom: 0 }}>
                    <h3 className="title-16">
                        Hi???n th???
                        <input value={pageSizeConfig} onChange={(e) => e.target.value} />
                        h??ng trong m???i trang
                    </h3>
                </div>
            </div>
            {isModalDelete === true ?
                (
                    <ModalForm isModalVisible={isModalDelete} setIsModalVisible={setIsModalDelete}>
                        <FormDeleteMain setIsModalDelete={setIsModalDelete} />
                    </ModalForm>
                ) : ''
            }
            {isModalUpdateRetirement === true ?
                (
                    <ModalForm isModalVisible={isModalUpdateRetirement} setIsModalVisible={setIsModalUpdateRetirement}>
                        <FormTeacherProfile setIsModalVisible={setIsModalUpdateRetirement} title="Ngh??? h??u" />
                    </ModalForm>
                ) : ''
            }
            {isModalUpdateOff === true ?
                (
                    <ModalForm isModalVisible={isModalUpdateOff} setIsModalVisible={setIssModalUpdateOff}>
                        <FormTeacherProfile setIsModalVisible={setIssModalUpdateOff} title="Ngh??? vi???c" />
                    </ModalForm>
                ) : ''
            }
            {isModalUpdateOffWork === true ?
                (
                    <ModalForm isModalVisible={isModalUpdateOffWork} setIsModalVisible={setIsModalUpdateOffWork}>
                        <FormTeacherProfile setIsModalVisible={setIsModalUpdateOffWork} title="T???m ngh???" />
                    </ModalForm>
                ) : ''
            }
        </div>
    )
}

export default Profile
