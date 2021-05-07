import React from 'react'
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'
import Search from '../../components/Search.js'
import fetchData from '../../components/redux/actions/SearchActions'
import Modal from '../../components/parts/Modal'

const mockStore = configureStore([]);

describe('React-Redux Search Component', () => {
    let store;
    let component;
   
    beforeEach(() => {
      store = mockStore({
        myState: 'sample text',
      });
   
      store.dispatch = jest.fn();

      component = renderer.create(
        <Provider store={store}>
          <Search />
        </Provider>
      );
    });
   
    it('should render with given state from Redux store', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
    
    const mySearch = {searchData:'test',searchEngine:'google'}

    it('should render a button, input and select', () => {
        renderer.act(() => {
          component.root.findByType('button').props.onClick();
        });
        renderer.act(() => {
            component.root.findByType('input')
              .props.onChange({ target: { value: 'test' } });
          });
        renderer.act(() => {
        component.root.findByType('select')
            .props.onChange({ target: { value: 'google' } });
        });
    });

    it('should dispatch fecthData with search parameters', () => {
        fetchData(mySearch)(store.dispatch);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith({type: "FETCH_REQUEST" });
    });

    it('Should not display modal when rendering', () => {
        const wrapper = shallow(<Provider store={store}><Search /></Provider>);
        expect(wrapper.find(Modal)).toHaveLength(0);
    });
    
  });

