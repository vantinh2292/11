import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducer/rootReducer';

var store = createStore(rootReducer,applyMiddleware(thunk));
store.subscribe(function () {
    console.log(store.getState());
})
export default store;