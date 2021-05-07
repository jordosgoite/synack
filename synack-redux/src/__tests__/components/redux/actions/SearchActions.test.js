import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchData from '../../../../components/redux/actions/SearchActions';
import fetchMock from 'fetch-mock'
import 'node-fetch';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const mySearch = {searchData:'test',searchEngine:'google'}

describe('async redux-actions - SearchAction.js', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('Dispatch FETCH_REQUEST first when dispatching fetchData function', () => {
        fetchMock.getOnce('test', {
        body: { results: [] },
        }) 

        const expectedActions = { type: 'FETCH_REQUEST' }
        const store = mockStore({})
        return store.dispatch(fetchData(mySearch)).then(() => {
            const actionCalled = store.getActions()
            expect(actionCalled[0]).toEqual(expectedActions) 
        })
    })
    
    it('Dispatch FETCH_SUCCESS after request when dispatching fetchData function', () => {
        fetchMock.getOnce('test', {
        body: { results: [] },
        }) 
        const expectedActions = 'FETCH_SUCCESS'
        const store = mockStore({})
        return store.dispatch(fetchData(mySearch)).then(() => {
            const actionCalled = store.getActions()
            expect(actionCalled[1].type).toEqual(expectedActions) 
        })
    })

    it('Dispatch FETCH_ENGINE after request and success when dispatching fetchData function', () => {
        fetchMock.getOnce('test', {
        body: { results: [] },
        })
        const expectedActions = { type: 'FETCH_ENGINE', payload:'google' }
        const store = mockStore({})
        return store.dispatch(fetchData(mySearch)).then(() => {
            const actionCalled = store.getActions()
            expect(actionCalled[2]).toEqual(expectedActions) 
        })
    })
})