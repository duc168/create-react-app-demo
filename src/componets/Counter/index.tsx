import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction, incrementByAmountAction, resetCounterAction } from '../../redux/counterSlice';
import { RootState } from '../../redux/store';

const Counter: React.FC<any> = () => {
    const value = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    const increase = () => {
         dispatch(incrementAction());
    }
    const decrease = () => {
        dispatch(decrementAction());
    }
    const increaseCustom = () => {
        dispatch(incrementByAmountAction(100))
    }
    const reset = () => {
        dispatch(resetCounterAction());
    }
    return <div>
        Counter {value}
        <div>
            <button onClick={increase}>Increase 1</button>
            <button onClick={decrease}>Decrease 1</button>
            <button onClick={increaseCustom}>Increase by 100</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
}

export default Counter;