import React, { useState } from 'react'
import { Modal } from 'antd';
import Button from '../../../../shared/component/Button/Button';
import { IModal } from '../../../../shared/component/Modal/Modal';

const ClassList: React.FC<IModal> = ({ setIsModalVisible,isModalVisible }) => {


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <Modal centered title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
           
            </Modal>
        </>
    )
}

export default ClassList