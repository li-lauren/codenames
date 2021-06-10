import './App.css';
import { Provider } from 'react-redux';
import store from '../../redux/store';

import Game from '../game/';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Game />
      </div>
    </Provider>
  );
}

export default App;
