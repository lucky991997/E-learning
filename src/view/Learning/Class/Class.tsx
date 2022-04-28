import { Col, Input, Modal, Row, Select, Table } from 'antd'
import React, { useState } from 'react'

import { IconDelete, IconEdit, IconEye, IconSort } from '../../../shared/component/Icon/Icon'
import Button from '../../../shared/component/Button/Button'
import ModalForm from '../../../shared/component/Modal/Modal'
import FormClass from './component/form/FormClass'
import FormDeleteSchoolYear from '../SchoolYear/component/FormSchoolYear/FormDeleteSchoolYear'
import FormExport from '../../../shared/component/Form/FormExport'
import { ILearning } from '../../../core/enums/EnumsLearningType'
import { ILearningProps } from '../Learning'

export type EditProps ={
  setShowEdit: any,
}
export type classProps = EditProps & ILearningProps

const Class = ({ setShowEdit, learningList }: classProps) => {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModaldelete, setIsModalDelete] = useState(false)


  const [isModalFile, setIsModalFile] = useState(false)
  const [showBtnAdd, setShowBtnAdd] = useState(false)


  const { Search } = Input
  const { Option } = Select

  const columns = [

    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Mã Lớp
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'idClass',
      key: 'idClass',
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Tên lớp
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'nameClass',
      key: 'nameClass',
    },
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center ' }}>
          Giáo viên chủ nhiệm
          <IconSort />
        </div>),
      sorter: true,
      dataIndex: 'teacher',
      key: 'teacher',
    },
    {
      title: '',
      dataIndex: 'subjectInfor',
      key: 'subjectInfor',
      render: () => {
        return (
          <div >
            <IconEye onClick={() => handleShowEditClass()} className='icon mr-24' />
            <IconEdit onClick={() => setIsModalVisible(true)} className='icon mr-24' />
            <IconDelete onClick={() => setIsModalDelete(true)} className='icon' />

          </div>
        )
      }
    }
  ]

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: ILearning[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: ILearning) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };


  //handle event 
  const handleShowEditClass = () => {
    setShowEdit(false)
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
    <>
      <Row className="mb-24" justify='space-between' style={{ width: '100%' }}>
        <Col style={{ display: 'flex', alignItems: 'center' }}>
          <div className="select mr-32" style={{ marginBottom: '8px' }}>
            <Select defaultValue="Tất cả khối" >
              <Option key="1">Khối 6</Option>
              <Option key="2">Khối 7</Option>
              <Option key="2">Khối 8</Option>
            </Select>
          </div>

        </Col>
        <Col style={{ display: 'flex', alignItems: 'center' , position: 'relative'}}>
          <IconDelete className="icon mr-16 " onClick={() => console.log(123)} style={{ color: '#C9C4C0' }} />
          <div className="border-left mr-16"></div>
          <Button variant="file" style={{ marginRight: '16px' }}>
            Xuất file
          </Button>
          <Button variant="primary" icon="add" onClick={() => setShowBtnAdd(true)}>
            Thêm mới

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
                    style={{opacity: 1}}
                  >
                    Nhập thủ công
                  </Button>
                {/* </Modal> */}

                </div>

              </>
            ) : ''
          }

        </Col>
      </Row>
      <Row>
        <div className="learning-title learning-content" >

          <div className="title-content__search mb-24">

            <h3 className="title-22">Lớp học</h3>


            <Search onChange={(e) => console.log(e.target.value)} placeholder="input search text" style={{ width: 200 }} />
          </div>

          <div className="table-content">

            <Table rowSelection={{ type: 'checkbox', ...rowSelection }} columns={columns} dataSource={learningList} showSorterTooltip={false} />

          </div>

        </div>
      </Row>

      {isModalVisible === true ?
        (
          <ModalForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
            <FormClass setIsModalVisible={setIsModalVisible} />
          </ModalForm>
        ) : ''
      }
      {isModaldelete === true ?
        (
          <ModalForm isModalVisible={isModaldelete} setIsModalVisible={setIsModalDelete}>
            <FormDeleteSchoolYear setIsModalDelete={setIsModalDelete} title="Xóa" />
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

    </>


  )
}

export default Class