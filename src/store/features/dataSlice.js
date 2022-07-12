import { createSlice } from "@reduxjs/toolkit";
import customer_list from "../../data/customers";
import orders from "../../data/mainData";
import products from "../../data/products";

const initialState={
    orders: orders,
    customers:customer_list,
    products: products
}

const dataSlice=createSlice({
    name:"data",
    initialState,
    reducers:{
        currMonthOrders:(state)=>{
            state.orders.filter((item) => {
                const date = new Date(item.registered);
                return date.getMonth() === new Date().getMonth();
              });
        },
        addOrder:(state,action)=>{
            state.orders= [...orders, action.payload]
        }
    }
})

export const {addOrder}= dataSlice.actions

export default dataSlice.reducer;