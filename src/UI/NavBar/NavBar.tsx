import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import logo from "../../images/StarDB.png";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';


interface IToggle {
    onToggle: () => void
    isOpen: boolean
}


const ResponsiveAppBar = ({onToggle, isOpen}: IToggle) => {

    return (
        <AppBar position="static">
            <Container
                maxWidth="xl"
                sx={{
                    background: "#1e1e1e",
                    padding: { xs: "0 10px", md: "0 80px!important" },
                }}
            >
                <Toolbar disableGutters sx={{padding: {xs: '17px 0 0 0', md: '34px 0 0 0'}}}>
                    <NavLink to='/' className='logoLink'>
                        {/* <img src={logo} className="logo" /> */}
                        <span className="logo">StarDB</span>
                    </NavLink>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                            justifyContent: "flex-end",
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={onToggle}
                            color="inherit"
                        >
                            {isOpen ?
                            <CloseIcon/>
                            :
                            <MenuIcon />
                        }
                        </IconButton>
                        
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            justifyContent: "flex-end",
                        }}
                    >
                        <NavLink to="/starships" className="starships">
                            Starships
                        </NavLink>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
