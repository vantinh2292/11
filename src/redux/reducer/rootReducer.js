import {combineReducers} from 'redux'
import { noteReducer } from './noteReducer';
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
import { authReducer } from './authReducer';
import {imageReducer} from './imageReducer';

const rootReducer=combineReducers({
    auth:authReducer,
    note:noteReducer,
    image:imageReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
});
export default rootReducer;