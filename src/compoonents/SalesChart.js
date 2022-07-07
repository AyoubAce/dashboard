import React, { useEffect, useState } from "react";
import orders from "../data/mainData";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

//return month name
function dateString(date) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = new Date(date).getMonth();
  return months[month];
}

//1 filter -> get the last 3month orders of a product
//2 map -> filters the last 3 and return objects of month name and value(sold pieces)
//3 reduce -> returns an array of the last 3 months with month names as array keys. 
//Jul:{month:"Jul", value:[500,300]},Jun:{...}, May:{...}

//to calculate how many pcs where sold from each product on each month
const chartData = (id) => {
  const data= orders
  .filter(
    (p) =>
      new Date(p.registered).getMonth() - new Date().getMonth() > -5 &&
      p.product._id === id
  )
  .map((item) => {
    return {
      //monthString() returns month name
      month: dateString(item.registered),
      value: item.items.count,
    };
  })
  .reduce((acc, { month, value }) => {
    acc[month] ??= { month: month, value: [] };

    if (Array.isArray(value)) {
      acc[month].value = acc[month].value.concat(value);
    } else {
      acc[month].value.push(value);
    }
    return acc;
  }, []);
  return data
};


const SalesChart = () => {
  const mode = useSelector(state=>state.theme.mode)

  const [product1, setProduct1] = useState([]);
  const [product2, setProduct2] = useState([]);
  const [product3, setProduct3] = useState([]);

  useEffect(() => {
    setProduct1(()=>chartData("62c2b8e587543c7b52a2b3f5").reverse())
    setProduct2(()=>chartData("62c2b8e5df9b02990166c29a").reverse())
    setProduct3(()=>chartData("62c2b8e514cb3a53d84d52e8").reverse())
    
  }, []);

  const seriesData=(item)=>{
  const keys = Object.keys(product1);
    return [
      item[keys[0]]?.value.reduce((p, n) => p + n),
      item[keys[1]]?.value.reduce((p, n) => p + n),
      item[keys[2]]?.value.reduce((p, n) => p + n),
      item[keys[3]]?.value.reduce((p, n) => p + n),
      item[keys[4]]?.value.reduce((p, n) => p + n),
    ].reverse()
  }
  const keys = Object.keys(product1);

  const chartOptions= {
    series:[
    {
      name:"Notebook set",
      data:seriesData(product1)
    },
    {
      name:'Mobile phone',
      data:seriesData(product2)
    },
    {
      name:'Tablet',
      data:seriesData(product3)
    }
  ],
  options:{
    colors: ["#22577E", "#3e3e3e", "#019267"],
    chart:{
      background:"transparent"
    },
    dataLabels:{
      enabled:false,
    },
    stroke:{
      curve:"smooth"
    },
    xaxis:{
      categories:Object.keys(product1).reverse()
    },
    grid: {
      show: false,
    },
  } 
  };
  console.log(chartOptions.series[0].data);

  return <Chart  options={mode=== "theme-light" ?{...chartOptions.options,theme:{mode:"light"}}: {...chartOptions.options, theme:{mode:"dark"}}} series={chartOptions.series} type='line' height='100%' />;
};

export default SalesChart;
