import React from 'react'
import Table from '../components/Table';
import customer_list from '../data/customers';

const customersTableHead = [
  "",
  "name",
  "email",
  "phone",
  "total orders",
  "Purchase",
  "location",
];
const renderTableHead = (item, index) => {
  return <th key={index}>{item}</th>;
};
const renderTableBody = (item, index) => {
  return (
    <tr key={index}>
      <td>{item.index+1}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.total_orders}</td>
      <td>{item.total_amount}</td>
      <td>{item.state}</td>
    </tr>
  );
};

const Customers = () => {
  return (
    <section>
      <h1 className="page-header">Customers</h1>
      <div className="page-container">
        <div className="table-container ">
          <div className="card">
            <Table
              limit={10}
              headData={customersTableHead}
              renderHead={(item, index) => renderTableHead(item, index)}
              bodyData={customer_list}
              renderBody={(item, index) => renderTableBody(item, index)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customers