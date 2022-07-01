import React from "react";
import "./Drawer.css";
import { NavLink } from "react-router-dom";


interface IDrawer {
    onClose: () => void
    isOpen: boolean
}


const Drawer = ({ onClose, isOpen }: IDrawer) => {
    const clickHandler = () => {
        onClose();
    };



    return (
        <>
            <nav className={!isOpen ? 'Drawer close' : 'Drawer'}>
                <NavLink to="/starships" onClick={clickHandler} className='StarshipsNav'>
                    Starships
                </NavLink>
            </nav>
        </>
    );
};

export default Drawer;
