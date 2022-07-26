import React from "react";
import Badge from "../components/Badge";
import Table from "../components/Table";
import orders from "../data/mainData";
import {IoIosAdd} from "react-icons/io"

const orderStatus = {
  shipping: "primary",
  pending: "warning",
  delivered: "success",
  refund: "danger",
};
const ordersHead = [
  "status",
  "customer",
  "product",
  "quantity",
  "amount",
  "total price",
  "date",
];
const renderOrdersHead = (item, index) => {
  return <th key={index}>{item}</th>;
};
const renderOrdersBody = (item, index) => {
  const currMonth =
    new Date(item.registered).getMonth() === new Date().getMonth();
  return (
    <tr key={index} className={currMonth && "curr-month-orders"}>
      <td>
        {currMonth && <span className="curr-month">new</span>}
        <Badge status={item.status} type={orderStatus[item.status]} />
      </td>
      <td>{item.customer.name}</td>
      <td>{item.product.name}</td>
      <td> {item.items.count} </td>
      <td>{item.amount}</td>
      <td>{item.customer.name}</td>
      <td>{new Date(item.registered).toLocaleDateString()}</td>
    </tr>
  );
};
const Orders = () => {
  return (
    <section className="page-container">
      <h2 className="page-header">Orders</h2>
    
      <div className="card">
        <Table
          limit={10}
          headData={ordersHead}
          renderHead={renderOrdersHead}
          bodyData={orders}
          renderBody={renderOrdersBody}
        />
      </div>
    </section>
  );
};

export default Orders;
