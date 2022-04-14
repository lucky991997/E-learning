import React, { ComponentProps } from 'react'

import '../../../styles/main-styles/box-title.scss'
type BoxTitleProps = {
    variant: string,
    title: string,
    content: string,
    
} & ComponentProps<'div'>

const BoxTitle = ({ variant, title, content, ...rest }: BoxTitleProps) => {
    return (

        <div className={`box-title box-title-${variant}`} {...rest}>
            <h2 className="title-28 j-center">{title}</h2>
            <h3 className="title-18 j-center">{content}</h3>
            <div className="box-title-pie">
            </div>
        </div>

    )
}

export default BoxTitle