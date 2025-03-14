import React, {useState} from 'react'
import Home from '../../pages/Home/home';
import { MdOutlineKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import './layout.css';
import Menus from '../Menus/menus';

const Layout = () => {

    const [toggle, setToggle] = useState(true);
    const handleToggle=()=>{
        setToggle(!toggle);
    }

  return (
    <>
        <div className="sidebar-section">
            <div className={toggle ? ("sidebar-toggle sidebar"):("sidebar")}>
                <div className="sidebar-toggle-icons">
                    <p onClick={handleToggle}>
                        { toggle ? (<MdKeyboardDoubleArrowLeft size={30}/>) : (
                                <MdOutlineKeyboardDoubleArrowRight size={30}/>
                            )
                        }
                        
                    </p>
                </div>
                <Menus toggle={toggle}/>
            </div>
            <div className="container">
                <Home />
            </div>
        </div>
    </>
  )
}

export default Layout;