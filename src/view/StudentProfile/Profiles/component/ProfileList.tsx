import { Input, Table } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FormDeleteMain from '../../../../shared/component/Form/FormDeleteMain'
import { IconDelete, IconEye, IconSort, IconUpdate } from '../../../../shared/component/Icon/Icon'
import ModalForm from '../../../../shared/component/Modal/Modal'
import Status from '../../../../shared/component/status/Status'
import { IStudent } from '../../StudentProfiles'
import FormUpdateEvaluate from '../Form/FormUpdateBonus'
import FormUpdateBonus from '../Form/FormUpdateBonus'
import { FormUpdateClass, FormUpdateSchool } from '../Form/FormUpdateClass'
import FormUpdateDecrease from '../Form/FormUpdateDecrease'
import FormUpdateReserve from '../Form/FormUpdateReserve'
import {  IProfileStudents } from '../Profiles'
export interface IProfile {
  key: number,
  id: string,
  name: string,
  birthday: string,
  gender: string,
  nation: string,
  class: string,
  status: string,
}
export type StudentProps = IProfileStudents & IStudent
const ProfileList = ({ studentList, pageSizeConfig }: StudentProps) => {
  const [isModaldelete, setIsModalDelete] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  const [isUpdateAward, setIsUpdateAward] = useState(false)
  const [isUpdateDiscipli, setIsUpdateDiscipli] = useState(false)
  const [isUpdateDecrease, setIsUpdateDecrease] = useState(false)
  const [isUpdateReverse, setIsUpdateReverse] = useState(false)
  const [isUpdateClass, setIsUpdateClass] = useState(false)
  const [isUpdateSchool, setIsUpdateSchool] = useState(false)

  const handleUpdateAward = () => {
    setIsUpdateAward(true)
    setIsUpdate(false)
  }
  const handleUpdateDiscipli = () => {
    setIsUpdateDiscipli(true)
    setIsUpdate(false)
  }
  const handleUpdateDecrease = () => {
    setIsUpdateDecrease(true)
    setIsUpdate(false)
  }
  const handleUpdateReverse = () => {
    setIsUpdateReverse(true)
    setIsUpdate(false)
  }
  const handleUpdateClass = () => {
    setIsUpdateClass(true)
    setIsUpdate(false)
  }
  const handleUpdateSchool = () => {
    setIsUpdateSchool(true)
    setIsUpdate(false)
  }
  const columns = [
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          M?? h???c vi??n
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start ', marginLeft: '20px' }}>
          T??n h???c vi??n
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'name',
      key: 'name',
      render: (name: string) => {
        return (
          <div style={{ textAlign: 'left', marginLeft: '20px' }}>{name}</div>
        )
      }
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
          L???p
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'class',
      key: 'class',
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
            return <Status variant='open'>??ang theo h???c</Status>
          case 'changSchool':
            return <Status variant='change'>???? chuy???n tr?????ng</Status>
          case 'changClass':
            return <Status variant='coming'>???? chuy???n l???p</Status>
          case 'noStudy':
            return <Status styles={{ minWidth: '130px' }} variant='end'>????? th??i h???c</Status>
          case 'graduate':
            return <Status variant='graduate'>???? t???t nghi???p</Status>
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
            <Link to='/student/info'>

              <IconEye className='icon mr-24' />
            </Link>
            <div className="icon-update" style={{ position: 'relative' }}>
              <IconUpdate onClick={() => setIsUpdate(true)} className='icon mr-24' style={{ position: 'relative' }} />

              {
                key === rowKey && isUpdate === true ? (
                  <div className="profile-update">
                    <h3 className="title-16" onClick={() => setIsUpdate(false)}>S???a h??? s??</h3>
                    <div className="profile-update__border-b"></div>

                    <h3 className="title-16"
                      onClick={() => handleUpdateClass()}
                    >Chuy???n l???p</h3>
                    <div className="profile-update__border-b"></div>

                    <h3 className="title-16"
                      onClick={() => handleUpdateSchool()}
                    >Chuy???n tr?????ng</h3>
                    <div className="profile-update__border-b"></div>

                    <h3 className="title-16"
                      onClick={() => handleUpdateReverse()}
                    >B???o l??u</h3>
                    <div className="profile-update__border-b"></div>

                    <h3 className="title-16"
                      onClick={() => handleUpdateDecrease()}
                    >C???p nh???t mi???n gi???m</h3>
                    <div className="profile-update__border-b"></div>

                    <h3 className="title-16"
                      onClick={() => handleUpdateAward()}
                    >C???p nh???t khen th?????ng</h3>
                    <div className="profile-update__border-b"></div>

                    <h3 className="title-16 mb-8"
                      onClick={() => handleUpdateDiscipli()}
                    >C???p nh???t k??? lu???t</h3>
                  </div>
                ) : ''
              }
            </div>
            <IconDelete onClick={() => setIsModalDelete(true)} className='icon mr-24' />


          </div >
        )
      }
    }
  ]
  const { Search } = Input
  const [rowKey, setRowKey] = useState<number>()


  return (
    <>
      <div className="title-content__search mb-24" >
        <h2 className="title-22">Danh s??ch h???c vi??n</h2>
        <Search onChange={(e) => console.log(e.target.value)} placeholder="input search text" style={{ width: 200 }} />

      </div>

      <div className="table-content">
        <Table
          pagination={{ pageSize: pageSizeConfig }}
          rowSelection={{ type: 'checkbox' }}
          showSorterTooltip={false} columns={columns}
          dataSource={studentList}
          onRow={(r) => (
            { onClick: () => setRowKey(r.key), }
          )}
        />
      </div>
      <div className="title__show-value" style={{ bottom: 0 }}>
        <h3 className="title-16">
          Hi???n th???
          <input value={pageSizeConfig} onChange={(e) => console.log(e)} />
          h??ng trong m???i trang
        </h3>
      </div>


      {isModaldelete === true ?
        (
          <ModalForm isModalVisible={isModaldelete} setIsModalVisible={setIsModalDelete}>
            <FormDeleteMain data={studentList} setIsModalDelete={setIsModalDelete} />
          </ModalForm>
        ) : ''
      }

      {isUpdateAward === true ?
        (
          <ModalForm isModalVisible={isUpdateAward} setIsModalVisible={setIsUpdateAward}>
            <FormUpdateEvaluate title='Khen th?????ng' setIsModalVisible={setIsUpdateAward} />
          </ModalForm>
        ) : ''
      }

      {isUpdateDiscipli === true ?
        (
          <ModalForm isModalVisible={isUpdateDiscipli} setIsModalVisible={setIsUpdateDiscipli}>
            <FormUpdateBonus title='k??? lu???t' setIsModalVisible={setIsUpdateDiscipli} />
          </ModalForm>
        ) : ''
      }

      {isUpdateDecrease === true ?
        (
          <ModalForm isModalVisible={isUpdateDecrease} setIsModalVisible={setIsUpdateDecrease}>
            <FormUpdateDecrease setIsModalVisible={setIsUpdateDecrease} />
          </ModalForm>
        ) : ''
      }

      {isUpdateReverse === true ?
        (
          <ModalForm isModalVisible={isUpdateReverse} setIsModalVisible={setIsUpdateReverse}>
            <FormUpdateReserve setIsModalVisible={setIsUpdateReverse} />
          </ModalForm>
        ) : ''
      }
      {isUpdateClass === true ?
        (
          <ModalForm isModalVisible={isUpdateClass} setIsModalVisible={setIsUpdateClass}>
            <FormUpdateClass setIsModalVisible={setIsUpdateClass} />
          </ModalForm>
        ) : ''
      }
      {isUpdateSchool === true ?
        (
          <ModalForm isModalVisible={isUpdateSchool} setIsModalVisible={setIsUpdateSchool}>
            <FormUpdateSchool setIsModalVisible={setIsUpdateSchool} />
          </ModalForm>
        ) : ''
      }
    </>
  )
}

export default ProfileList
