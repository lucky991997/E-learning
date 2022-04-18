
import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Menu } from "antd";


import '../../styles/main-styles/sidebar.scss'
import { AiOutlineEye, AiOutlineLineChart, AiOutlineTeam } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";

type ItemMenuProps = {
    itemIndex: number;
}


const LeftMenu = ({ itemIndex }: ItemMenuProps) => {

    const itemMenus = [
        {
            path: '/',
            name: 'Tổng quan',
            section: 'home',
            icon: <AiOutlineEye style={{ marginTop: '10px' }} className="menu__link-icon" />,

        },

        {
            path: '/learning',
            name: 'Khai báo dữ liệu',
            section: 'learning',

            icon: <AiOutlineLineChart className="menu__link-icon" />,

        },
        {
            path: '/student',
            name: 'Hồ sơ học viên',
            section: 'student',
            icon: <AiOutlineTeam className="menu__link-icon" />,
            subMenu1: [{

                path: '/student/profilesstudent',
                id: 1,
                name: 'Tất cả hồ sơ',
                sectionSub: 'profilesstudent',
            },
            {

                id: 2,
                path: '/student/change',
                name: 'Tiếp nhận chuyển trường',
                sectionSub: 'change',
            },
            {

                id: 3,
                path: '/student/reserve',
                name: 'Bảo lưu',
                sectionSub: 'reserve',
            },
            ],
        },
        {
            path: '/teacher',
            name: 'Hồ sơ giảng viên',
            section: 'teacher',
            icon: <MdOutlineWorkOutline className="menu__link-icon" />,
            subMenu1: [
                {

                    id: 4,
                    path: '/teacher/profilesteacher',
                    name: 'Tất cả hồ sơ',
                    sectionSub: 'profilesteacher',

                },
                {

                    id: 5,
                    path: '/teacher/phancong',
                    name: 'Phân công giảng dạy',
                    sectionSub: 'phancong',

                },


            ],

        },
        {
            path: '/exam',
            name: 'Thi cử',
            section: 'exam',
            icon: <BsBook className="menu__link-icon" />,
        },
        {
            path: '/setting',
            name: 'Cài đặt hệ thống',
            section: 'setting',

            icon: <FiSettings className="menu__link-icon" />,
        },
    ]
    const { pathname } = useLocation()
    const curPath = pathname.split('/')[1]
    const menu = itemMenus.findIndex(item => item.section === curPath)

    const [activeMenu, setActiveMenu] = useState(itemIndex)
    useEffect(() => {
        setActiveMenu(curPath.length === 0 ? itemIndex : menu)
    }, [curPath, menu, itemIndex])
    const handleMenuItem = () => {
        setActiveMenu(menu)
    }

    //sub menu 

    const curPathSub = pathname.split('/')[2]



    const activeItemSubMenu = (section: string) => {

        if (curPathSub === section) {
            return 'active-sub'
        }
    }
    return (
        <div
            className="menu "
        >


            <Menu mode="inline" style={{ width: 256 }} >
                {

                    itemMenus.map((item, index) => (
                        <Fragment key={index}>
                            <Menu.Item className={`${index === activeMenu ? ' active-ant-menu' : ''}`} key={index} style={{ marginTop: '32px' }} >
                                <Link to={item.path}>
                                    <div className="menu__link">
                                        <div className="menu__link-icon" onClick={() => handleMenuItem()}>
                                            {item.icon}
                                        </div>
                                        <h3 className='title-18-black' style={{ opacity: 0.7 }}>

                                            {item.name}
                                        </h3>
                                    </div>
                                </Link>
                            </Menu.Item>
                            {
                                item.subMenu1 && item.subMenu1.map((itemSub, index) => (
                                    <Menu.Item
                                        key={itemSub.sectionSub}
                                    // onClick={() => setActiveSubMenu(itemSub.sectionSub)}
                                    >
                                        <Link to={itemSub.path}>
                                            <h3 className={`title-16 ${activeItemSubMenu(itemSub.sectionSub) ? 'active-sub' : ''}`} style={{ marginLeft: '15%' }}>
                                                {itemSub.name}
                                            </h3>
                                        </Link>
                                    </Menu.Item>
                                ))
                            }




                        </Fragment>



                    ))
                }
            </Menu >

        </div>
    )
}

export default LeftMenu
