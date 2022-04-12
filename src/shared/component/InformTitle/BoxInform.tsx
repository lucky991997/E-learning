import React, { ReactNode } from 'react'

import './inform-title.scss'

type BoxInformProps = {
  variant?: 'primary' | 'secocndary' | string;
  title?: string;
  children: ReactNode;
}
const BoxInform = ({ variant, title, children }: BoxInformProps) => {
  return (
    <div className={`box-inform  box-inform-${variant}`}>
      <div className="box-inform__info">
        <h1 className="main-title" style={{ color: '#fff' }}>{title}</h1>
        <h3 className="title-18">{children}</h3>
      </div>

      <div className="box-inform-circle">
        <div className="box-inform-circle-xl">
        </div>
      </div>
      {/*  
      <div className="box-inform-circle-s">
      </div> */}
    </div>
  )
}

export default BoxInform