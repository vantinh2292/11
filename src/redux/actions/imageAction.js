import { firebaseConnection } from "../../firebase";
var dataSnapshot = firebaseConnection.database().ref('Table1/Image');
export const pushData = (newImage) => {
    return (dispatch) => {
        let temp = {
            src:newImage.src,
            top:newImage.top,
            left:newImage.left
        }
        dataSnapshot.push(temp);
        // dispatch({ type: 'ADD_DATA' })
    }
}
export const actionToggleImage=(editImage) => {
    return (dispatch) => {
        let Image = {
            idImage:editImage.idImage,
            src:editImage.src,
            top:editImage.top,
            left:editImage.left
        }
        dispatch({ type: 'TOGGLE_IMAGE',Image})
    }
}

export const actionUpdateImage=(editImage) => {
    return (dispatch) => {
        let Image = {
            idImage:editImage.idImage,
            src:editImage.src,
            top:editImage.top,
            left:editImage.left
        }
        if(editImage.idImage!==''){
            dataSnapshot.child(editImage.idImage).update({
                src:editImage.src,
                left:editImage.left,
                top:editImage.top
            })
            dispatch({ type: 'UPDATE_IMAGE',Image})
        }
        
    }
}