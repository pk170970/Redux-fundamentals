import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, increaseByAmount } from "../features/counter/counterSlice";
import { useState } from "react";

export function Counter(){
    const [amount, setAmount] = useState(0);
    const count = useSelector((state:any)=> state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>

            <input 
                type="number" 
                name="number" 
                value={amount}
                onChange={(e)=>setAmount(Number(e.target.value))}
                id="number" 
            />
            <button onClick={()=>dispatch(increaseByAmount(amount))}>Increase by amount</button>
        </div>
    )
}

