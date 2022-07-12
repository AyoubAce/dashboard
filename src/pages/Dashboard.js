import SaleStatus from "../components/SaleStatus";
import customer_list from "../data/customers";
import Table from "../components/Table";
import Stock from "../components/Stock";
import SalesChart from "../components/SalesChart";
import Badge from "../components/Badge";
import orders,{currMonthOrders} from "../data/mainData";
import { useSelector } from "react-redux";


const latestOrders = {
  head: ["status", "customer", "total price", "date"],
  body:orders.slice(0, 10),
};

//render orders table head
const latestOrdersHead = (item, index) => {
  return <th key={index}>{item}</th>;
};

const orderStatus={
  shipping:"primary",
  pending:"warning",
  delivered:"success",
  refund: "danger"
}
//render orders table body
const latestOrdersBody = (item, index) => {
  const date = new Date(item.registered);
  return (
    <tr key={index}>
      <td>
        <Badge status={item.status} type={orderStatus[item.status]}/> 
      </td>
      <td>{item.customer.name}</td>
      <td>{item.amount}</td>
      <td>{date.toLocaleDateString()}</td>
    </tr>
  );
};

// sort customers based on their spending
const topCustomers = {
  head: ["", "name", "Location", "email", "purchases"],
  body: [...customer_list]
    .sort((a, b) => {
      return b.total_amount.split("$")[1] - a.total_amount.split("$")[1];
    })
    .slice(0, 5),
};

const topCustomersHead = (item, index) => {
  return <th key={index}>{item}</th>;
};
const topCustomersBody = (item, index) => {
  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.state}</td>
      <td>{item.email}</td>
      <td>{formatter.format(item.total_amount.split("$")[1])}</td>
    </tr>
  );
};
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

const Dashboard = () => {

  const ordersData=useSelector(state=>state.data.orders)
  return (
    <section>
      <h1 className="page-header">Dashboard</h1>
      <div className="page-container">
        <div className="status-container">
          <SaleStatus month={"Month Orders: "} data={currMonthOrders} />
          <SaleStatus total={"Total Sales: "} data={ordersData} />
          {/* <input type="color" value={color} name="color" onChange={(e)=>setColor(e.target.value)}/> */}
        </div>

        <div className="chart-container donut-chart">
          <div className="chart card">
            <h3 className="card-header">Stocks</h3>
            <Stock />
          </div>
        </div>

        <div className="table-container last-orders">
          <div className="last-orders-wrapper card">
            <h3 className="card-header">Latest Orders</h3>
            <Table
              headData={latestOrders.head}
              renderHead={(item, index) => latestOrdersHead(item, index)}
              bodyData={latestOrders.body}
              renderBody={(item, index) => latestOrdersBody(item, index)}
            />
          </div>
        </div>

        <div className="chart-container line-chart">
          <div className="chart card">
            <h3 className="card-header">Sold Items</h3>
            <span> (Last 5 months)</span>
            <SalesChart />
          </div>
        </div>

        <div className="table-container top-customers">
          <div className="card">
            <h3 className="card-header">Top customers</h3>
            <Table
              headData={topCustomers.head}
              renderHead={(item, index) => topCustomersHead(item, index)}
              bodyData={topCustomers.body}
              renderBody={(item, index) => topCustomersBody(item, index)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
