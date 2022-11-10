import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToken } from '../actions/tokenAction';

const Cart = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const token = "Am anfang!";
    
    return (
        <div>
            <h3>token</h3>
            <p>{state.token}</p>
            <button onClick={() => {dispatch(addToken(token))}}>Press</button>
        </div>
    );
};

export default Cart;