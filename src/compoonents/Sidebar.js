import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard, MdShoppingCart } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

const items = [
  {
    name: "Dashboard",
    route: "/",
    icon: <MdDashboard size={25}/>,
  },
  {
    name: "Customers",
    route: "/customers",
    icon: <IoIosPeople size={25} />,
  },
  {
    name: "Orders",
    route: "/orders",
    icon: <MdShoppingCart size={25}/>,
  },
];

const SideBar = (props) => {
  const location= useLocation()
  const active = items.findIndex(item=>item.route === location.pathname)
  return (
    <div className="sidebar">
      {/* <div className="sidebar-logo">
        <h1 className="company logo">PALMA</h1>
      </div> */}
      <div className="sidebar-wrapper">
        {items.map((item, index) => {
          return (
            <Link to={item.route} key={index} className="sidebar-link">
              <div className={active === index ? "sidebar-link-inner active" : "sidebar-link-inner" }>
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
