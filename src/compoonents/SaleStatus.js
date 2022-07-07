
const SaleStatus = ({ month, total, data }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style:"currency",
    currency: "USD",
    minimumFractionDigits: 2
})
const dateString=date=> {
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

  const sum= data.map((item)=>{
    return item.amount.split("$")[1]
  }).reduce((prevValue, currValue)=> Number(prevValue) + Number(currValue))

  return (
    <div className="status-card card">
      <div className="status-wrapper">
        <div className="status">
          <h4>{formatter.format(sum)}</h4>
          <span>{month ? `${dateString(data[0].registered)}. Sales` : total}</span>
        </div>
        <div className="status">
            <h4>{data.length}</h4>
            <span>{month ? `${dateString(data[0].registered)}. Orders` : "Total Orders"}</span>
        </div>
      </div>
      <span className="status-read-more">details</span>
    </div>
  );
};

export default SaleStatus;
