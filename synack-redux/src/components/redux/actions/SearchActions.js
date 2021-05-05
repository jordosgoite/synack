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
            axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAl7GTF0pyBdIxg7C22WbRUNJgNQCCSBIo&cx=2c2f9747b5a6688e6&q=${data.searchData}`)
            .then(result=>{
                dispatch(fetchSuccess([result.data.items]))
            })
            .catch(error=>{
                dispatch(fetchFailure('Error... check your Google credentials'))
            })
        }
    }
    else if(data.searchEngine==="bing") {
        return (dispatch) => {
            dispatch(fetchRequest());
            axios.get(`https://api.bing.microsoft.com/v7.0/custom/search?q=${data.searchData}&customconfig=2bd8f57f-42a2-49ee-9a80-c9a923b01d23&mkt=en-US&count=50`,{
                headers:{
                    'Ocp-Apim-Subscription-Key': 'b2e8ee0c20be4aeba40366f2bb693e62'
                }
            })
            .then(result=>{
                dispatch(fetchSuccess([result.data.items]))
            })
            .catch(error=>{
                dispatch(fetchFailure('Error... check your Microsoft credentials'))
            })
        }
    }   
    else {
        return (dispatch) => {
            dispatch(fetchRequest());
            const googleData = axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAl7GTF0pyBdIxg7C22WbRUNJgNQCCSBIo&cx=2c2f9747b5a6688e6&q=${data.searchData}`)
            const bingData = axios.get(`https://api.bing.microsoft.com/v7.0/custom/search?q=${data.searchData}&customconfig=2bd8f57f-42a2-49ee-9a80-c9a923b01d23&mkt=en-US&count=50`,{
                headers:{
                    'Ocp-Apim-Subscription-Key': 'b2e8ee0c20be4aeba40366f2bb693e62'
                }
            })
            axios.all([googleData, bingData]).then(
                axios.spread((...allData)=>{
                    console.log(allData,"alldata")
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