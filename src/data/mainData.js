import order_list from "./orders";
import customer_list from "./customers";
import products from "./products";

// add random customer to orders
const alteredOrders= order_list.map(item=>{
    return {
        ...item,
        customerId: customer_list[Math.floor(Math.random()* customer_list.length)]?._id
    }
})

//main orders
const orders= alteredOrders.map(item=>{
  return {
    ...item,
    customer: customer_list.find(i=>i._id===item.customerId),
    product: products.find(i=>item.items.productId === i._id)
  }
})
//monthly sales
const monthOrders= orders.filter(item=>{
    const date= new Date(item.registered)
    return date.getMonth() === new Date().getMonth()
  })

export {monthOrders}
export default orders;