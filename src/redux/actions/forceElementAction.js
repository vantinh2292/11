import { firebaseConnection } from "../../firebase";
var dataSnapshot = firebaseConnection.database().ref('Table1/Image');
var userActiveDataSnapshot = firebaseConnection.database().ref('Table1/UserActive');
export const actionForceRunClick = () => {
    return (dispatch, getState) => {
        //Save data active user
        const { auth } = getState().firebase;
        let temp = {
            action: 'RUN',
            email: auth.email,
            displayName: auth.displayName,
            nameElement: getState().image.nameElement,
            createAt: Date.now()
        }
        userActiveDataSnapshot.push(temp);
        //Chang status
        var ref = dataSnapshot.child(getState().image.idImage).child('state');
        if (getState().image.idImage !== '') ref.set(1)
    }
}
export const actionForceAutoClick = () => {
    return (dispatch, getState) => {
        //Save data active user
        const { auth } = getState().firebase;
        let temp = {
            action: 'AUTO',
            email: auth.email,
            displayName: auth.displayName,
            nameElement: getState().image.nameElement,
            createAt: Date.now()
        }
        userActiveDataSnapshot.push(temp);
    }
}
export const actionForceStopClick = () => {
    return (dispatch, getState) => {
        //Save data active user
        const { auth } = getState().firebase;
        let temp = {
            action: 'STOP',
            email: auth.email,
            displayName: auth.displayName,
            nameElement: getState().image.nameElement,
            createAt: Date.now()
        }
        userActiveDataSnapshot.push(temp);
        //Chang status
        var ref = dataSnapshot.child(getState().image.idImage).child('state');
        if (getState().image.idImage !== '') ref.set(0)
    }
}