import React from "react";
import {
  
  IoNotificationsOutline,
  IoColorPalette,
  IoPerson,
  IoSettingsOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import {IoIosMenu} from "react-icons/io";

import Dropdown from "./Dropdown";
import userImg from "../data/images/profile.jpg";
import { Link } from "react-router-dom";
import ThemeMenu from "./ThemeMenu";
import { useDispatch } from "react-redux/es/exports";
import { toggleSidebar } from "../store/features/topnavSlice";
const userMenus=[
    {
        "icon": <IoPerson/>,
        "content": "Profile"
    },
    {
        "icon": <IoSettingsOutline/>,
        "content": "Settings"
    },
    {
        "icon": <IoLogOutOutline/>,
        "content": "Logout"
    }
]
const notifications=[
    {
        "content": "Lorem ipsum is a placeholder text commonly"
    },
    {
        "content": "orem ipsum dolor sit amet, consectetur adipisici elit"
    },
    {
        "content": "Lorem ipsum dolor sit amet, consectetur adipisici elit"
    },
    {
        "content": "Ildolor sit amet, consectetur adipisici elit"
    },
    {
        "content": "em ipsum is a placeholder text commonly used to demonstrate"
    }
]
const renderNotifications = (item, index) => {
  return (
    <div className="notification-item" key={index}>
      <span>- {item.content}</span>
    </div>
  );
};
const renderUser = (img) => {
  return (
    <div className="user-image">
      <img src={img} alt="user" />
    </div>
  );
};
const renderUserMenu = (item, index) => {
return  <Link to="/" key={index}>
    <div className="notification-item">
      <span>
        {item.icon} {item.content}
      </span>
    </div>
  </Link>;
};

const Topnav = () => {

const dispatch= useDispatch()

return (
    <div className="topnav">
    <div className="logo-container">
    <IoIosMenu size={25} className="sidebar-menu"  onClick={()=>dispatch(toggleSidebar(true))}/>
    <h3>ASco</h3>
    </div>
      <div className="nav">
        <div>
          <Dropdown
           user={() => renderUser(userImg)}
           contentData={userMenus}
           renderItems={(item,index)=>renderUserMenu(item,index)}
            />
        </div>
        <div>
          <Dropdown
            icon={<IoNotificationsOutline size={25} className="icon" />}
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotifications(item, index)}
          />
        </div>
        <div>
          <ThemeMenu icon={<IoColorPalette size={25} className="icon" />} />
        </div>
      </div>
    </div>
  );
};

export default Topnav;

