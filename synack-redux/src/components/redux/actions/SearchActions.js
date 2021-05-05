import axios from "axios";

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCH_ENGINE = 'FETCH_ENGINE';

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

export const fetchSearchEngine = (engine) =>{
    return {
        type: FETCH_ENGINE,
        payload: engine
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
                dispatch(fetchSearchEngine(data.searchEngine))
            })
            .catch(error=>{
                dispatch(fetchFailure('Error... check your Google credentials'))
            })
        }
    }
    else if(data.searchEngine==="bing") {
        return (dispatch) => {
            dispatch(fetchRequest());
            axios.get(`https://bing-search.p.rapidapi.com/bing-serps/`,{
                params: {q:data.searchData, page: '1'},
                headers: {
                    'x-rapidapi-key': 'fc3e4b500bmshf6c8c34a69b1cd7p141a5djsn56a0e26b7726',
                    'x-rapidapi-host': 'bing-search.p.rapidapi.com'
                }
            })
            .then(result=>{
               dispatch(fetchSuccess([result.data.data.results.organic]))
               dispatch(fetchSearchEngine(data.searchEngine))
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
            const bingData = axios.get(`https://bing-search.p.rapidapi.com/bing-serps/`,{
                params: {q:data.searchData, page: '1'},
                headers: {
                    'x-rapidapi-key': 'fc3e4b500bmshf6c8c34a69b1cd7p141a5djsn56a0e26b7726',
                    'x-rapidapi-host': 'bing-search.p.rapidapi.com'
                }
            })
            axios.all([googleData, bingData]).then(
                axios.spread((...allData)=>{
                    dispatch(fetchSuccess([allData]))
                    dispatch(fetchSearchEngine(data.searchEngine))
                })
            )
            .catch(error=>{
                dispatch(fetchFailure('Error... check your credentials'))
            })
        }
    }
}
export default fetchData;