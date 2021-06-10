import './App.css';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import WebSocketProvider from '../../WebSocket';

import Game from '../game/';

function App() {
  return (
    <Provider store={store}>
      <WebSocketProvider>
        <div className="App">
          <Game />
        </div>
      </WebSocketProvider>
    </Provider>
  );
}

export default App;
