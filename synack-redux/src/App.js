import './App.css';
import store from './components/redux/store';
import Results from './components/Results';
import Search from './components/Search';
import { Provider } from 'react-redux'
function App() {

  return (
    <Provider store={store}>
    <div className="App">
        <Search />
        <Results />
    </div>
    </Provider>
  );
}
export default App;
