import React, { ComponentProps } from 'react'
import { Modal } from 'antd';

import '../../../styles/main-styles/modal.scss'
export type IModal  = {
    setIsModalVisible?: any
    isModalVisible?: boolean
  } & ComponentProps<typeof Modal>;
const ModalForm:React.FC<IModal> = ({ isModalVisible , setIsModalVisible, ...rest}) => {

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div >
            <Modal closable={false} className="modal-form" footer={false}  centered visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} {...rest} >
            </Modal>
        </div>
    )
}

export default ModalForm