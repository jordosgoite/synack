import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS, FETCH_ENGINE } from '../../../../components/redux/actions/SearchActions'
import Search from '../../../../components/redux/reducers/SearchReducers'

describe ('Test cases for Reducers - SearchReducers.js', ()=>{
    it('Should return initial state', ()=>{
        const initialState={
            loading: false,
            results: [],
            error: '',
            searchEngine: ''
        }
        const newState = Search(undefined, {});
        expect(newState).toEqual(initialState);
    });

    it('Should return updated state - loading', ()=>{
        const state={
            loading: true,
            results: [],
            error: '',
            searchEngine: ''
        }
        const newState = Search(undefined, {
            type: FETCH_REQUEST
        });
        expect(newState).toEqual(state);
    });

    it('Should return updated state - results', ()=>{
        const search= [{title:'test 1'}]
        const state={
            loading: false,
            results: search,
            error: '',
        }
        const newState = Search(undefined, {
            type: FETCH_SUCCESS,
            payload: search
        });
        expect(newState).toEqual(state);
    });

    it('Should return updated state - error', ()=>{
        const error= 'this is an error'
        const state={
            loading: false,
            results: [],
            error: error,
        }
        const newState = Search(undefined, {
            type: FETCH_FAILURE,
            payload: error
        });
        expect(newState).toEqual(state);
    });

    it('Should return updated state - searchEngine', ()=>{
        const searchEngine= 'google'
        const state={
            loading: false,
            results: [],
            error: '',
            searchEngine: 'google'

        }
        const newState = Search(undefined, {
            type: FETCH_ENGINE,
            payload: searchEngine
        });
        expect(newState).toEqual(state);
    });
    
})