import React from "react";
import Chart from "react-apexcharts";
import products from "../data/products";
import { useSelector } from "react-redux";

const Stock = () => {
const mode= useSelector(state=>state.theme.mode)

  const labels = products.map((item) => item.name+ ": " + item.inStock);
  const series = products.map((item) => item.inStock);
  const options = {
    colors: ["#22577E", "#3e3e3e", "#019267"],
    chart: {
      background: "transparent",
    },  
    labels,
    dataLabels: {
        enabled: false,
    },
    legend: {
      position: "bottom",
    },
  };
  return (
    
      <Chart type="donut" options={mode=== "theme-dark" ?{...options,theme:{mode:"dark"}}: {...options, theme:{mode:"light"}}} series={series} height="100%" />
   
  );
};

export default Stock;
