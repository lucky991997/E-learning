import { Input, Select, Table } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../shared/component/Button/Button'
import FormDeleteMain from '../../../shared/component/Form/FormDeleteMain'
import { IconArrowRight, IconDelete, IconEdit, IconEye, IconSort, IconUpdate } from '../../../shared/component/Icon/Icon'
import ModalForm from '../../../shared/component/Modal/Modal'
import Status from '../../../shared/component/status/Status'
import FormAddContact from './component/Form/FormAddContact'
import FormTeacherProfile from './component/Form/FormTeacherProfile'

const Profile = () => {
    const [isModalDelete, setIsModalDelete] = useState(false)
    const [isUpdate, setIsUpdate] = useState(false)
    const [isModalUpdateRetirement, setIsModalUpdateRetirement] = useState(false)
    const [isModalUpdateOff, setIssModalUpdateOff] = useState(false)
    const [isModalUpdateOffWork, setIsModalUpdateOffWork] = useState(false)
    const [rowKey, setRowKey] = useState<number>()
    const data = [
        {
            key: 1,
            id: '2020-6A',
            name: 'Nguyễn Văn A ',
            birthday: '12/02/1998',
            gender: 'Nam',
            nation: 'Kinh',
            chucvu: 'Giáo viên',
            status: 'isStudy',
        },
        {
            key: 2,
            id: '2020-6B',
            name: 'Nguyễn Văn B',
            birthday: '12/02/1998',
            gender: 'Nam',
            nation: 'Kinh',
            chucvu: 'Giáo viên',
            status: 'isStudy',

        },
        {
            key: 3,
            id: '2020-6C',
            name: 'Nguyễn Văn C',
            birthday: '12/02/1998',
            gender: 'Nam',
            nation: 'Kinh',
            chucvu: 'Giáo viên',
            status: 'graduate',

        },
        {
            key: 4,
            id: '2020-7A',
            name: 'Nguyễn Văn D',
            birthday: '12/02/1998',
            gender: 'Nam',
            nation: 'Kinh',
            chucvu: 'Giáo viên',
            status: 'noStudy',

        },
        {
            key: 5,
            id: '2020-7B',
            name: 'Nguyễn Văn E',
            birthday: '12/02/1998',
            gender: 'Nam',
            nation: 'Kinh',
            chucvu: 'Giáo viên',
            status: 'noStudy',


        },
        {
            key: 6,
            id: '2020-8A',
            name: 'Nguyễn Văn F',
            birthday: '12/02/1998',
            gender: 'Nam',
            nation: 'Kinh',
            chucvu: 'Giáo viên',
            status: 'changSchool',

        },
        {
            key: 7,
            id: '2020-8B',
            name: 'Nguyễn Văn G',
            birthday: '12/02/1998',
            gender: 'Nam',
            nation: 'Kinh',
            chucvu: 'Giáo viên',
            status: 'changClass',
        },
        {
            key: 8,
            id: '2020-9A',
            name: 'Nguyễn Văn I',
            birthday: '12/02/1998',
            gender: 'Nam',
            nation: 'Kinh',
            chucvu: 'Giáo viên',
            status: 'graduate',
        },
    ]
    const handleUpdateRetirement = () => {
        setIsModalUpdateRetirement(true)
        setIsUpdate(false)
    }
    const handleUpdateOff= () => {
        setIssModalUpdateOff(true)
        setIsUpdate(false)
    }
    const handleUpdateReverse = () => {
        setIsModalUpdateOffWork(true)
        setIsUpdate(false)
    }
    const handleShowIsUpdate = (key:number) => {
        if(key === rowKey) {
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
                    Mã giảng viên
                    <IconSort />
                </div>),
            sorter: true,
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
                    Tên giảng viên
                    <IconSort />
                </div>),
            sorter: true,
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
                    Ngày sinh
                    <IconSort />
                </div>),
            sorter: true,
            dataIndex: 'birthday',
            key: 'birthday',
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
                    Giới tính
                    <IconSort />
                </div>),
            sorter: true,
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
                    Dân tộc
                    <IconSort />
                </div>),
            sorter: true,
            dataIndex: 'nation',
            key: 'nation',
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
                    Chức vụ
                    <IconSort />
                </div>),
            sorter: true,
            dataIndex: 'chucvu',
            key: 'chucvu',
        },
        {
            title: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    Tình trạng
                    <IconSort />
                </div>),
            sorter: true,
            dataIndex: 'status',
            key: 'status',
            render: (status: any) => {

                switch (status) {
                    case 'isStudy':
                        return <Status variant='open'>Đang làm việc</Status>
                    case 'changSchool':
                        return <Status variant='open'>Đang làm việc</Status>
                    case 'changClass':
                        return <Status variant='coming'>nghỉ hưu</Status>
                    case 'noStudy':
                        return <Status styles={{ width: '127px' }} variant='end'>Đã nghỉ</Status>
                    case 'graduate':
                        return <Status variant='graduate'>Tạm nghỉ</Status>
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
                                    <div className="profile-update" style={{height:'140px'}}>
                                        <h3 className="title-16" onClick={() => setIsUpdate(false)}>Sửa hồ sơ</h3>
                                        <div className="profile-update__border-b"></div>

                                        <h3 className="title-16"
                                            onClick={() => handleUpdateRetirement()}
                                        >   Cập nhật nghỉ hưu</h3>
                                        <div className="profile-update__border-b"></div>

                                        <h3 className="title-16"
                                            onClick={() => handleUpdateOff()}
                                        >   Cập nhật nghỉ việc</h3>
                                        <div className="profile-update__border-b"></div>

                                        <h3 className="title-16"
                                            onClick={() => handleUpdateReverse()}
                                        >   Cập nhật tạm nghỉ</h3>
                                       


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
   

    const handleHideUpdate = (key: number) => {
        setRowKey(key)
        setIsUpdate(true)
    }
    return (
        <div className="teacher">
            <div className="teacher__title" style={{ marginBottom: '42px' }}>
                <h3 className="title-18-black mr-32">Hồ sơ giảng viên</h3>
                <IconArrowRight className="icon mr-32" />
                <h1 className="main-title">Tất cả hồ sơ</h1>
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
                    <Button variant="file" style={{ marginRight: '16px' }}>Xuất file</Button>
                    <Button variant="primary" icon="add">Thêm</Button>
                </div>
            </div>
            <div className="teacher__list">
                <div className="title-content__search mb-24">
                    <h2 className="title-22">Danh sách giảng viên</h2>
                    <Search onChange={(e) => console.log(e.target.value)} placeholder="input search text" style={{ width: 200 }} />

                </div>

                <div className="table-content">
                    <Table
                        rowSelection={{ type: 'checkbox' }}
                        showSorterTooltip={false}
                        columns={columns}
                        dataSource={data}
                        onRow={(r) => (
                            { onClick: () => setRowKey(r.key), }
                        )}
                    />
                </div>
                <div className="title__show-value" style={{ bottom: 0 }}>
                    <h3 className="title-16">
                        Hiển thị
                        <input defaultValue="8" onChange={(e) => e.target.value} />
                        hàng trong mỗi trang
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
                        <FormTeacherProfile setIsModalVisible={setIsModalUpdateRetirement} title="Nghỉ hưu"/>
                    </ModalForm>
                ) : ''
            }
             {isModalUpdateOff === true ?
                (
                    <ModalForm isModalVisible={isModalUpdateOff} setIsModalVisible={setIssModalUpdateOff}>
                        <FormTeacherProfile setIsModalVisible={setIssModalUpdateOff} title="Nghỉ việc"/>
                    </ModalForm>
                ) : ''
            }
             {isModalUpdateOffWork === true ?
                (
                    <ModalForm isModalVisible={isModalUpdateOffWork} setIsModalVisible={setIsModalUpdateOffWork}>
                        <FormTeacherProfile setIsModalVisible={setIsModalUpdateOffWork} title="Tạm nghỉ"/>
                    </ModalForm>
                ) : ''
            }
        </div>
    )
}

export default Profile
