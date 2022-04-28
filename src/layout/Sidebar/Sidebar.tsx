import React, { useEffect, useState } from 'react'

import '../../styles/main-styles/sidebar.scss'

import { Link, useLocation } from 'react-router-dom'
import { AiOutlineEye, AiOutlineTeam, AiOutlineLineChart } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { MdOutlineWorkOutline } from 'react-icons/md'
import ItemMenu from './ItemMenu'

const Sidebar = () => {
    const sideBar = [
        {
            path: '/',
            section: 'home',
            icon: <AiOutlineEye className="sidebar__link-icon" />,
        },
        {
            path: '/learning',
            section: 'learning',
            icon: <AiOutlineLineChart className="sidebar__link-icon" />,
        },
        {
            path: '/student',
            section: 'student',
            icon: <AiOutlineTeam className="sidebar__link-icon" />,
        },
        {
            path: '/teacher',
            section: 'teacher',
            icon: <MdOutlineWorkOutline className="sidebar__link-icon " />,

        },
        {
            path: '/exam',
            section: 'exam',
            icon: <BsBook className="sidebar__link-icon" />,

        },
        {
            path: '/setting',
            section: 'setting',
            icon: <FiSettings className="sidebar__link-icon" />,

        },

    ]
   
    // const [activeMenu, setActiveMenu] = useState()

    const { pathname } = useLocation()
    const curPath = pathname.split('/')[1]
   
    const activeMenu = sideBar.findIndex(item => item.section === curPath)
    const [itemMenu, setItemMenu] = useState(activeMenu)
    useEffect(() => {
        setItemMenu(curPath.length === 0 ? 0 : activeMenu)
    }, [curPath, activeMenu])

    const handleItemMenu = (index: number) => {
        setItemMenu(activeMenu)
    }

    return (
        <>
            <div className="sidebar">
                <div className="sidebar-logo">

                    <Link to='/'>
                        <img src='../../../images/logo.png' alt="logo" />
                    </Link>
                </div>
                <div className="sidebar__link active-sidebar">
                    {
                        sideBar.map((item, index) => (
                            <div  key={index} className={`${index === itemMenu ? "active-sidebar" : ''}`}>
                                <Link   to={item.path} >
                                    {item.icon}
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <ItemMenu itemIndex={itemMenu} />
            </div>
        </>
    )
}

export default Sidebar