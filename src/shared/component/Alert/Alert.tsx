import React from 'react'
import './alert.scss'

export interface IAlert {
    content: string
}
const Alert:React.FC<IAlert> = ({content}) => {
  return (
    <div className="alert">
        <h3>{content}</h3>
    </div>
  )
}

export default Alert