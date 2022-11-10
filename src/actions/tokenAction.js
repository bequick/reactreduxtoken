import { ADD_TOKEN, GET_TOKEN } from "../actionTypes/actionTypes";

const addToken = (token) => {
    return {
        type: ADD_TOKEN,
        payload: token,
    };
};

const getToken = () => {
    return {
        type: GET_TOKEN,
    };
};

export {addToken, getToken};