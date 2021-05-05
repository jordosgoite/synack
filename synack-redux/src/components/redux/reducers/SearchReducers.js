import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "../actions/SearchActions";

const initialState = {
    loading: false,
    results: [],
    error: ''
}

const Search =(state= initialState, action)=>{
    switch (action.type) {
        case FETCH_REQUEST:
           return{
               ...state,
               loading: true
           }
        case FETCH_SUCCESS:
            return{
                loading: false,
                results: action.payload,
                error: ''
            }
        case FETCH_FAILURE:
            return{
                loading: false,
                results: [],
                error: action.payload
            } 
        default:
            return state;
    }
}

export default Search