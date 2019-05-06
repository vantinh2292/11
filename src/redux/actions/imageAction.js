import { firebaseConnection } from "../../firebase";
var dataSnapshot = firebaseConnection.database().ref('Table1/Image');
export const pushData = (newEmail) => {
    return (dispatch) => {
        let temp = {
            src:newEmail.src,
            top:newEmail.top,
            left:newEmail.left
        }
        dataSnapshot.push(temp);
        // dispatch({ type: 'ADD_DATA' })
    }
}