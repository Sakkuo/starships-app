import React, { ReactNode, useState } from "react";
import "./Layout.css";
import Drawer from "../Drawer/Drawer";
import ResponsiveAppBar from "../NavBar/NavBar";

interface ILayout {
    routes: ReactNode
}


const Layout = ({routes}: ILayout) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenuHandler = () => {
        setMenuOpen(!menuOpen);
    };

    const menuCloseHandler = () => {
        setMenuOpen(false);
    };
    return (
        <div className='Layout'>
            <Drawer isOpen={menuOpen} onClose={menuCloseHandler} />
            <ResponsiveAppBar onToggle={toggleMenuHandler} isOpen={menuOpen}/>

            <main>{routes}</main>
        </div>
    );
};

export default Layout;
