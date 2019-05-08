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
export const actionToggleLabel=(editLabel) => {
    return (dispatch) => {
        let Label = {
            idLabel:editLabel.idLabel,
            text:editLabel.text,
            top:editLabel.top,
            left:editLabel.left
        }
        dispatch({ type: 'TOGGLE_LABEL',Label})
    }
}
export const actionUpdateLabel=(editLabel) => {
    return (dispatch) => {
        if(editLabel.idLabel!==''){
            dataSnapshot.child(editLabel.idLabel).update({
                text:editLabel.text,
                left:editLabel.left,
                top:editLabel.top
            })
            // dispatch({ type: 'UPDATE_LABEL',Label})
        }
        
    }
}