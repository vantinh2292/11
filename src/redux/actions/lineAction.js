import {firebaseConnection} from "../../firebase";
var dataSnapshot = firebaseConnection.database().ref('Table1/LineHorizontal');
export const actionAddLineHorizontal = (newItem) => {
    return (dispatch,getState) => {
        const {addLineHorizontal,addLineVertical} = getState().auth;
        if (!addLineVertical && addLineHorizontal) {
            let temp = {
                left: newItem.left,
                top:newItem.top,
                length:newItem.length
            }
            dataSnapshot.push(temp);
        }
    }
}