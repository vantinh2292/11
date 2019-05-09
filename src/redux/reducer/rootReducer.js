import {combineReducers} from 'redux'
import { noteReducer } from './noteReducer';
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
import { authReducer } from './authReducer';
import {imageReducer} from './imageReducer';
import {labelReducer} from './labelReducer'
import { chartReducer } from './chartReducer';
import { navReducer } from './navReducer';
import {backgroundReducer} from './backgroundReducer'
const rootReducer=combineReducers({
    auth:authReducer,
    note:noteReducer,
    image:imageReducer,
    label:labelReducer,
    background:backgroundReducer,
    navPageFull:navReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer,
    chartData:chartReducer
});
export default rootReducer;