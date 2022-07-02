import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

function Header() {
    const [open, setOpen] = useState(false)

    const openHandler = () => {
        setOpen(!open)
    }

    return (
        <div className={s.root}>
            {open && (
            <div className={s.nav}>
                <NavLink to={'/pre-junior'} className={(navData) => navData.isActive ? s.active : s.link }>pre-junior</NavLink>
                <NavLink to={'/junior'} className={(navData) => navData.isActive ? s.active : s.link }>junior</NavLink>
                <NavLink to={'/junior-plus'} className={(navData) => navData.isActive ? s.active : s.link }>junior+</NavLink>
            </div>)
            }
            <div onMouseEnter={openHandler} className={s.square}></div>
        </div>
    )
}

export default Header
