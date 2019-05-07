import { firebaseConnection } from "../../firebase";
var dataSnapshot = firebaseConnection.database().ref('Table1/Label');
export const pushDataLabel = (newLabel) => {
    return (dispatch) => {
        let temp = {
            text:newLabel.text,
            top:newLabel.top,
            left:newLabel.left
        }
        dataSnapshot.push(temp);
        // dispatch({ type: 'ADD_DATA' })
    }
}