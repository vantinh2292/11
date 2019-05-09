import { firebaseConnection } from "../../firebase";
var dataSnapshot = firebaseConnection.database().ref('Table1/Image');
export const actionForceRunClick = () => {
    return (dispatch,getState) => {
        var ref=dataSnapshot.child(getState().image.idImage).child('state');
        if(getState().image.idImage!=='') ref.set(1)
    }
}
export const actionForceStopClick = () => {
    return (dispatch,getState) => {
        var ref=dataSnapshot.child(getState().image.idImage).child('state');
        if(getState().image.idImage!=='') ref.set(0)
    }
}