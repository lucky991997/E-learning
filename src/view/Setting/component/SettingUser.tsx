import { Select } from 'antd'
import React, { useState } from 'react'
import Button from '../../../shared/component/Button/Button'
import { IconArrowRight } from '../../../shared/component/Icon/Icon'
import ListGrUser from './List/ListGrUser'
import ListUser from './List/ListUser'
import { IShowComponent } from '../Setting'
import ModalForm from '../../../shared/component/Modal/Modal'
import FormRoles from '../Form/FormRoles'

const SettingUser = ({ setShowComponent }: IShowComponent) => {

    const editList = [
        {
            name: 'Nhóm người dùng',
            component: <ListGrUser />,
        },
        {
            component: <ListUser />,
            name: 'Danh sách người dùng',
        },
    ]
    const [itemIndex, setItemIndex] = useState(0)
    const [isModalVisible, setIsModalVisible] = useState(false)

    const handleListIndex = (index: number) => {
        setItemIndex(index)
    }
    const activeIndex = (index: number) => {
        if (itemIndex === index) {
            return 'active-list'
        }
    }
    return (
        <>
            <div className="config__title mb-32" onClick={() => setShowComponent(true)}>
                <h3 className="title-18-black mr-32">Cài đặt hệ thống</h3>
                <IconArrowRight className="icon  mr-32" />
                <h1 className="main-title">Người dùng hệ thống</h1>
            </div>
            <div className="control mb-24">
                <div className="select">
                    <Select defaultValue="Chọn kì" style={{ marginRight: '6px' }}>
                    </Select>
                    <Select defaultValue="Chọn khối">
                    </Select>
                </div>
                <div className="tab__list__content" style={{ marginLeft: '-35%' }}>
                    {
                        editList && editList.map((item, index) => (
                            <div className={`tab__list__content-title ${activeIndex(index) ? activeIndex(index) : ''}`} key={index} onClick={() => handleListIndex(index)}>
                                <h3 className='title-18-black' style={{ marginLeft: '10px' }}>{item.name}</h3>
                            </div>

                        ))
                    }
                </div>
                <div className="control-btn">
                    <Button variant="primary" icon="add"
                        onClick={() => setIsModalVisible(true)}
                    >Thêm mới</Button>
                </div>
            </div>
            <div className="setting-user__list">
                {
                    editList && editList.map((item, index) => (
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
                        <FormRoles setIsModalVisible={setIsModalVisible} />
                    </ModalForm>
                ) : ''
            }

        </>
    )
}

export default SettingUser