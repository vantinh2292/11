import { firebaseConnection } from "../../firebase";
var dataSnapshot = firebaseConnection.database().ref('Table1/Image');
export const pushData = (newImage) => {
    return (dispatch) => {
        let temp = {
            src: newImage.src,
            top: newImage.top,
            left: newImage.left
        }
        dataSnapshot.push(temp);
        // dispatch({ type: 'ADD_DATA' })
    }
}
export const actionToggleImage = (ImageChoise) => {
    return (dispatch, getState) => {
        let Image = {
            idImage: ImageChoise.idImage,
            src: ImageChoise.src,
            top: ImageChoise.top,
            left: ImageChoise.left,
            nameElement:ImageChoise.nameElement
        }
        if (getState().auth.editImage) {
            dispatch({ type: 'TOGGLE_IMAGE', Image })
        }else{
            dispatch({ type: 'CLICK_IMAGE', Image })
            dispatch({ type: 'BACKGROUND_IMAGE_CLICK' })
            
        }

    }
}

export const actionUpdateImage = (editImage) => {
    return (dispatch) => {
        let Image = {
            idImage: editImage.idImage,
            src: editImage.src,
            top: editImage.top,
            left: editImage.left,
            nameElement:editImage.nameElement
        }
        if (editImage.idImage !== '') {
            dataSnapshot.child(editImage.idImage).update({
                src: editImage.src,
                left: editImage.left,
                top: editImage.top,
                nameElement:editImage.nameElement
            })
            dispatch({ type: 'UPDATE_IMAGE', Image })
        }

    }
}