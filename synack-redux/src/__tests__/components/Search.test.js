import React from 'react'
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Search from '../../components/Search.js'
import fetchData from '../../components/redux/actions/SearchActions'

const mockStore = configureStore([]);

describe('React-Redux Search Component', () => {
    let store;
    let component;
   
    beforeEach(() => {
      store = mockStore({
        myState: 'sample text',
      });
   
      component = renderer.create(
        <Provider store={store}>
          <Search />
        </Provider>
      );
    });
   
    it('should render with given state from Redux store', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
    it('should render a button', () => {
        renderer.act(() => {
          component.root.findByType('button').props.onClick();
        });
      });
  });

