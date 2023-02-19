import { createSlice, current } from "@reduxjs/toolkit";
export const orderSlice = createSlice({
  name: "OrderInfo",
  initialState: { },
  reducers: {
    addItem: (state, action) => {
      console.log(state)
        if(current(state)[action.payload]===undefined){
          const temp ={}
          temp[action.payload]=1
          state={...state,...temp}
        }
        else{
          state[action.payload]+=1
        }
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
