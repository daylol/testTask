import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    order: []
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.order.push(action.payload)
        },
        deleteOrder: (state, action) => {
            state.order = state.order.filter(o => o.id !== action.payload)
        },
        changeInfo: (state, action) => {
            const index = state.order.findIndex(item => item.id === action.payload.id);

            if (index === -1) return;
            const el = state.order[index]
            state.order[index] = {
                ...el,
                ...action.payload
            }


        }
    },
})

export const { addOrder, deleteOrder, changeInfo } = orderSlice.actions;
export default orderSlice.reducer