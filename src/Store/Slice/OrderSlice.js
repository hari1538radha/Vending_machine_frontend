import { createSlice, current } from "@reduxjs/toolkit";
export const orderSlice = createSlice({
  name: "OrderInfo",
  initialState: {
    data:[]
  },
  reducers: {
    addItem: (state, action) => {
      console.log(current(state))
      state.data.push(action.payload)
        // if(current(state)[action.payload]===undefined){
        //   const temp ={}
        //   temp[action.payload]=1
        //   state={...state,...temp}
        // }
        // else{
        //   state[action.payload]+=1
        // }
      console.log(current(state))
      
      return state;
    },
    removeItem: (state, action) => {
      console.log(action, state);
      return state;
    },
  },
});

export const { addItem, removeItem } = orderSlice.actions;
export default orderSlice.reducer;
