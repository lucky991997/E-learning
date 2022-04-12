import React from 'react'
import { IconArrowRight } from '../../../../../shared/component/Icon/Icon'
import { EditProps } from '../../Class'


import '../../../../../styles/view-styles/edit-class.scss'

const EditClass = ({ setShowEdit }: EditProps) => {
  return (
    <div className="edit-class" >
      <div className="edit-class__title mb-24">
        <h2 className="title-18-black" onClick={() => setShowEdit(true)}>Khai báo dữ liệu</h2>
        <IconArrowRight className="icon" style={{margin:'0 30px'}} />
        <h2 className="title-18-black" onClick={() => setShowEdit(true)}>Lớp học</h2>
        <IconArrowRight className="icon" style={{margin:'0 30px'}} />
        <h1 className="main-title">Chi tiết lớp học</h1>
      </div>

      <div className="edit-class__info">
        
      </div>

    </div>
  )
}

export default EditClass