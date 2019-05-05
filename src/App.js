import React from 'react';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux'
import MainComponent from './component/MainComponent';


function App() {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>

  );
}
export default App;
