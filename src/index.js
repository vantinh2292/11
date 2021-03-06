import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import rootReducer from './redux/reducer/rootReducer';
import {firebaseConnection} from './firebase'
const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebaseConnection), // redux bindings for firestore,
        reactReduxFirebase(firebaseConnection, { useFirestoreForProfile:true,userProfile:'users' , attachAuthIsReady: true }), // redux binding for firebase
      )
);
store.subscribe(function () {
    console.log(store.getState());
})
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
  })
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

