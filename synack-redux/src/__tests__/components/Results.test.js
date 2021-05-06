import React from 'react'
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Results from '../../components/Results.js'
import Result from '../../components/Result.js';

const mockStore = configureStore([]);

describe('React-Redux Results Component', () => {
    let store;
    let component;
   
    beforeEach(() => {
      store = mockStore({
        Search: {
            loading: false, 
            searchEngine:'google', 
            results:[[{title:"test"}, {snippet:"test"},{link:"www.google.com"}]]
        }
      });
   
      component = renderer.create(
        <Provider store={store}>
          <Results />
        </Provider>
      );
    });
   
    it('should render with given state from Redux store', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
    it('should render the result component', () => {
        renderer.act(() => {
          component.root.find(Result)
        });
      });
  });

