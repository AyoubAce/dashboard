import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/Sidebar";
import Topnav from "./components/Topnav";
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setColor,setMode } from "./store/features/themeSlice";
import Orders from "./pages/Orders";

function App() {
  // get specific month data
 const mode= useSelector(state=>state.theme.mode)
 const color= useSelector(state=>state.theme.color)
 const dispatch= useDispatch()

 useEffect(()=>{
  const themeMode= localStorage.getItem("themeMode")
  const themeColor= localStorage.getItem("themeColor")
  if(themeMode){
dispatch(setMode(themeMode))
  }
  if(themeColor){
    dispatch(setColor(themeColor))
  }
 },[dispatch])


  return (
    <BrowserRouter>
      <div className={`app ${mode} ${color}`}>
        <SideBar />
        <div className="app-content">
        <Topnav />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
