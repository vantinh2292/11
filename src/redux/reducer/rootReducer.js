import {combineReducers} from 'redux'
import { noteReducer } from './noteReducer';
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
import { authReducer } from './authReducer';
import {imageReducer} from './imageReducer';
import {labelReducer} from './labelReducer'

const rootReducer=combineReducers({
    auth:authReducer,
    note:noteReducer,
    image:imageReducer,
    label:labelReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
});
export default rootReducer;