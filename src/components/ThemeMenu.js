import React, { useEffect, useRef, useState } from "react";
import { IoIosClose, IoIosCheckmark } from "react-icons/io";
import {useDispatch} from "react-redux"
import { setColor, setMode } from "../store/features/themeSlice";

const modeSetting = [
  {
    id: "light",
    name: "Light",
    background: "light-background",
    class: "theme-light",
  },
  {
    id: "dark",
    name: "Dark",
    background: "dark-background",
    class: "theme-dark",
  },
  
];
const colorSetting = [
    {
      id: "red",
      name: "Red",
      background: "red-color",
      class: "theme-color-red",
    },
    {
      id: "blue",
      name: "Blue",
      background: "blue-color",
      class: "theme-color-blue",
    },
    {
      id: "green",
      name: "Green",
      background: "green-color",
      class: "theme-color-green",
    },
    {
      id: "orange",
      name: "Orange",
      background: "orange-color",
      class: "theme-color-orange",
    },
    {
      id: "purple",
      name: "Purple",
      background: "purple-color",
      class: "theme-color-purple",
    },
  ];

const ThemeMenu = ({ icon }) => {
  const buttonRef = useRef(null);
  const contentRef = useRef(null);
  const dispatch= useDispatch()

  document.addEventListener("click", (e) => {
    // click toggle
    if (buttonRef.current && buttonRef.current.contains(e.target)) {
      contentRef.current.classList.toggle("active");
    } else if (contentRef.current && !contentRef.current.contains(e.target)) {
      contentRef.current.classList.remove("active");
    }
  });
  const activeTheme=()=>{
    contentRef.current.classList.add("active");
  }
  const closeTheme = () => {
    contentRef.current.classList.remove("active");
  };
  
  const [currentMode, setCurrentMode]=useState("dark");
  const [currentColor, setCurrentColor]= useState("purple");
  const setThemeMode= mode=>{
    setCurrentMode(mode.id)
    localStorage.setItem('themeMode', mode.class)
    dispatch(setMode(mode.class))
  }
  const setThemeColor=color=>{
    setCurrentColor(color.id)
    localStorage.setItem("themeColor", color.class)
    dispatch(setColor(color.class))
  }
  useEffect(()=>{
    const themeModeStorage= localStorage.getItem('themeMode')
    const themeColorStorage= localStorage.getItem("themeColor")

    if(!themeModeStorage || !themeColorStorage){
      return;
    }
    const modeClass= modeSetting.find(e=>e.class=== themeModeStorage)
    const colorClass= colorSetting.find(e=>e.class=== themeColorStorage)

    if(modeClass) setCurrentMode(modeClass.id)
    if(colorClass) setCurrentColor(colorClass.id)
  },[])
  return (
    <div>
      <button ref={buttonRef} className="dropdown-btn" onClick={()=>activeMenu()}>
        {icon && icon}
      </button>
      <div ref={contentRef} className="theme-mode ">
        <h4>Theme Settings</h4>
        <IoIosClose size={20} className="theme-close" onClick={()=>{closeTheme()}} />
        <div className="theme-select">
          <span>Choose mode</span>
          <ul className="theme-list">
            {modeSetting.map((item, index) => {
              return (
                <li key={index} onClick={()=>setThemeMode(item)}>
                  <div className={`theme-list-color ${item.background} ${currentMode===item.id ? "active" : ""}`}>
                    <IoIosCheckmark className="check-icon" size={35} />
                  </div>
                  <span>{item.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="theme-select">
          <span>Choose color</span>
          <ul className="theme-list">
            {colorSetting.map((item, index) => {
              return (
                <li key={index} onClick={()=>setThemeColor(item)}>
                  <div className={`theme-list-color ${item.background} ${currentColor===item.id ? "active" : ""}`}>
                    <IoIosCheckmark className="check-icon" size={35} />
                  </div>
                  <span>{item.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThemeMenu;
