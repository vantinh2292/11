import {combineReducers} from 'redux'
import { noteReducer } from './noteReducer';
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
import { authReducer } from './authReducer';

const rootReducer=combineReducers({
    auth:authReducer,
    note:noteReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
});
export default rootReducer;