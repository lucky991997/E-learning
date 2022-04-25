import { Select } from 'antd'
import React, { useState } from 'react'
import Button from '../../../shared/component/Button/Button'
import FormDeleteMain from '../../../shared/component/Form/FormDeleteMain'
import FormExport from '../../../shared/component/Form/FormExport'
import { IconDelete } from '../../../shared/component/Icon/Icon'
import ModalForm from '../../../shared/component/Modal/Modal'


import AwardList from './component/AwardList'
import DisciplinaryList from './component/DisciplinaryList'
import ProfileList from './component/ProfileList'

export interface ICollapseShow {
  itemIndex : number;
}

const Profiles = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModaldelete, setIsModalDelete] = useState(false)

  const [isModalFile, setIsModalFile] = useState(false)
  const [showBtnAdd, setShowBtnAdd] = useState(false)

  const { Option } = Select
  const tabProfiles = [
    {
      name: 'Tất cả hồ sơ',
      component: <ProfileList />,
    },
    {
      name: 'Khen thưởng',
      component: <AwardList />,

    },
    {
      name: 'Kỷ luật',
      component: <DisciplinaryList />,

    },
  ]
  const [itemIndex, setItemIndex] = useState(0)
  const activeTabProfiles = (index: number) => {
    if (index === itemIndex) {
      return 'active-list'
    }
  }
  const handleShowAdd = () => {
    setShowBtnAdd(false)
    setIsModalVisible(true)
  }
  const handleShowAddFile = () => {
    setShowBtnAdd(false)
    setIsModalFile(true)
  }
  return (
    <div className="profile">
      <h1 className="main-title mb-32">Hồ sơ học viên</h1>
      <div className="profile-control mb-24">
        <div className="profile-control__select">
          <div className="select mr-16">
            <Select defaultValue="Tất cả khối" style={{ width: '136px' }}>
              <Option value="1">Tất cả khối</Option>
            </Select>
          </div>
          <div className="select">
            <Select defaultValue="2020-2021" style={{ width: '136px' }}>
              <Option value="1">2020-2021</Option>
            </Select>
          </div>
        </div>

        <div className="profile-control__tab">
          {
            tabProfiles.map((item, index) => (
              <div className={`profile-control__tab__title ${activeTabProfiles(index) ? activeTabProfiles(index) : ''}`} key={index} onClick={() => setItemIndex(index)}>
                <h3 className="title-18-black j-center" >{item.name}</h3>
              </div>
            ))
          }
        </div>

      </div>
      <div className="profile-control__event">
        {
          itemIndex === 0 ? (
            <>

              <IconDelete onClick={() => setIsModalDelete(true)} className="icon" />
              <div className="border-h mr-16 ml-16"></div>
              <Button variant="file" style={{ marginRight: '16px' }}>Xuất file</Button>
              <Button variant="primary" icon="add"
                onClick={() => setShowBtnAdd(true)}
              >Thêm mới
              </Button>
              {
                showBtnAdd === true ? (
                  <>

                    <div className="modal-btn">
                      {/* <Modal
                  visible={showBtnAdd}
                  footer={false}
                  closable={false}
                  onCancel={() => setShowBtnAdd(false)}
                  // style={{top:'11%', right: '11.5%'}}
                  bodyStyle={{
                    
                  }}
                > */}
                      <Button variant="file" style={{ marginBottom: '12px' }}
                        onClick={() => handleShowAddFile()}
                      >
                        Tải file lên
                      </Button>
                      <Button variant="file"
                        onClick={() => handleShowAdd()}
                        style={{ opacity: 1 }}
                      >
                        Nhập thủ công
                      </Button>
                      {/* </Modal> */}

                    </div>

                  </>
                ) : ''
              }


            </>

          ) : (

            <Button variant="primary" icon="add">Thêm mới</Button>

          )
        }

      </div>
      <div className="profile-list">
        {
          tabProfiles.map((item, index) => (
            <div key={index}>
              {
                itemIndex === index ? item.component : ''
              }
            </div>
          ))
        }
      </div>
      {isModalVisible === true ?
        (
          <ModalForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
           
          </ModalForm>
        ) : ''
      }
      {isModaldelete === true ?
        (
          <ModalForm isModalVisible={isModaldelete} setIsModalVisible={setIsModalDelete}>
            <FormDeleteMain setIsModalDelete={setIsModalDelete} />
          </ModalForm>
        ) : ''
      }
      {isModalFile === true ?
        (
          <ModalForm isModalVisible={isModalFile} setIsModalVisible={setIsModalFile}>
            <FormExport setIsModalVisible={setIsModalFile} />
          </ModalForm>
        ) : ''
      }

    </div>
  )
}

export default Profiles