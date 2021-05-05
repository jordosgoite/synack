import axios from "axios";

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchRequest = () =>{
    return {
        type: FETCH_REQUEST
    }
}

export const fetchSuccess = (search) =>{
    return{
        type: FETCH_SUCCESS,
        payload: search
    }
}

export const fetchFailure = (error) =>{
    return{
        type: FETCH_FAILURE,
        payload: error
    }
    
}

const fetchData = (data)=>{
    if (data.searchEngine==="google")
    {
        return (dispatch) => {
            dispatch(fetchRequest());
            axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAl7GTF0pyBdIxg7C22WbRUNJgNQCCSBIo&cx=2c2f9747b5a6688e6&q=${data}`)
            .then(result=>{
                dispatch(fetchSuccess([result.data.items]))
            })
            .catch(error=>{
                dispatch(fetchFailure('Error... check your credentials'))
            })
        }
    }
    else if(data.searchEngine==="bing") {
        return (dispatch) => {
            dispatch(fetchRequest());
            axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAl7GTF0pyBdIxg7C22WbRUNJgNQCCSBIo&cx=2c2f9747b5a6688e6&q=${data}`)
            .then(result=>{
                dispatch(fetchSuccess([result.data.items]))
            })
            .catch(error=>{
                dispatch(fetchFailure('Error... check your credentials'))
            })
        }
    }   
    else {
        return (dispatch) => {
            dispatch(fetchRequest());
            const googleData = axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAl7GTF0pyBdIxg7C22WbRUNJgNQCCSBIo&cx=2c2f9747b5a6688e6&q=${data}`)
            const bingData = axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAl7GTF0pyBdIxg7C22WbRUNJgNQCCSBIo&cx=2c2f9747b5a6688e6&q=${data}`)
            axios.all([googleData, bingData]).then(
                axios.spread((...allData)=>{
                    dispatch(fetchSuccess([allData]))
                })
            )
            .catch(error=>{
                dispatch(fetchFailure('Error... check your credentials'))
            })
        }
    }
}
export default fetchData;