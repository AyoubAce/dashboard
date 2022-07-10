import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard, MdShoppingCart } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { toggleSidebar } from "./topnav/topnavSlice";
import { IoIosClose} from "react-icons/io";


const items = [
  {
    name: "Home",
    route: "/",
    icon: <MdDashboard size={20} />,
  },
  {
    name: "Customers",
    route: "/customers",
    icon: <IoIosPeople size={20} />,
  },
  {
    name: "Orders",
    route: "/orders",
    icon: <MdShoppingCart size={20} />,
  },
];

const SideBar = (props) => {

  const sidebar = useSelector((state) => state.side.toggle);
  const dispatch = useDispatch();

  const location = useLocation();
  const active = items.findIndex((item) => item.route === location.pathname);
 

const closeOverlay=(e)=>{
if(e.target.classList.contains("overlay")){
  dispatch(toggleSidebar(false))
}
}


  return (
    <div className={`sidebar overlay ${sidebar ? "active" : ""}`}  onClick={closeOverlay}>
      <div className="sidebar-close">
        <IoIosClose size={25} onClick={()=>dispatch(toggleSidebar(false))}/>
      </div>
      <div className="sidebar-wrapper">
        {items.map((item, index) => {
          return (
            <Link to={item.route} key={index} className="sidebar-link" onClick={()=>dispatch(toggleSidebar(false))}>
              <div
                className={
                  active === index
                    ? "sidebar-link-inner active"
                    : "sidebar-link-inner"
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
