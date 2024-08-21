import { ACTIONS } from "../actions/JokesActions";

export const initialState = {
    data:[],
    isLoading:true,
    error:null
}

export const JokesReducer = (state, action) =>{
    switch (action.type) {
        case ACTIONS.SET_DATA:
            return{
                ...initialState,
                isLoading:false,
                data:action.payload
            };
    
        default:
            return state;
    }
}