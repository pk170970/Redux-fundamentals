import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value:0,
}

export const counterSlice = createSlice({
    name: 'mycounter',
    initialState,
    reducers: {
        increment: (state)=>{
            console.log('state is ', state);
            state.value+=1;
        },
        decrement: (state)=>{
            state.value-=1;
        },
        increaseByAmount: (state, action)=>{
            console.log('action is ', action);
            state.value += action.payload;
        }
    }
})

export const {increment, decrement, increaseByAmount} = counterSlice.actions;
export default counterSlice.reducer;