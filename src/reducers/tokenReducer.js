import { ADD_TOKEN, GET_TOKEN } from "../actionTypes/actionTypes";

const initialState = {
    token: "", 
};

export const tokenReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TOKEN:
            return{
                ...state, token: action.payload,
            }; 
        case GET_TOKEN:
            return {
                ...state,
                token: state.token,
            };
        default:
            return state;    
    }
};

