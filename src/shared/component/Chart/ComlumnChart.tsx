import React, { useEffect, useState } from 'react'

import { Column } from '@ant-design/plots';
const ComlumnChart = () => {
   
    const data = [
        {
            class: "6A1",
            type: "Giỏi",
            value: 30,
        },
        {
            class: "6A1",
            type: "khá",
            value: 20,

        },
        {
            class: "6A1",
            type: "Trung bình",
            value: 20,

        },
        {
            class: "6A1",
            type: "yếu",
            value: 20,
        },

        {
            class: "6A2",
            type: "Giỏi",
            value: 30,
        },
        {
            class: "6A2",
            type: "khá",
            value: 20,

        },
        {
            class: "6A2",
            type: "Trung bình",
            value: 20,

        },
        {
            class: "6A2",
            type: "yếu",
            value: 20,
        },



        {
            class: "6A3",
            type: "Giỏi",
            value: 30,
        },
        {
            class: "6A3",
            type: "khá",
            value: 20,

        },
        {
            class: "6A3",
            type: "Trung bình",
            value: 20,

        },
        {
            class: "6A3",
            type: "yếu",
            value: 20,
        },



        {
            class: "6A4",
            type: "Trung bình",
            value: 20,

        },
        {
            class: "6A4",
            type: "yếu",
            value: 20,
        },

        {
            class: "6A4",
            type: "Giỏi",
            value: 30,
        },
        {
            class: "6A4",
            type: "khá",
            value: 20,

        },
        {
            class: "6A2",
            type: "Trung bình",
            value: 20,

        },
        {
            class: "6A3",
            type: "yếu",
            value: 20,
        },

        {
            class: "6A3",
            type: "Giỏi",
            value: 30,
        },
        {
            class: "6A3",
            type: "khá",
            value: 20,

        },
        {
            class: "6A3",
            type: "Trung bình",
            value: 20,

        },
        {
            class: "6A2",
            type: "yếu",
            value: 20,
        },

    ]

    const config = {
        data,
        xField: 'class',
        yField: 'value',
        seriesField: 'type',
        isGroup: true,
        columnStyle: {
            radius: [20, 20, 0, 0],
        },
        color: ['#C83901', '#FFA75E', '#FF7506', '#FFD8B8']
    };


    return (

        <Column {...config} style={{ height: '270px', width: '955px' }} />
    )

}

export default ComlumnChart