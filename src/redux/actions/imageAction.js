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
            dataSnapshot.child(editImage.idImage).child('src').set(editImage.src);
            dataSnapshot.child(editImage.idImage).child('left').set(editImage.left);
            dataSnapshot.child(editImage.idImage).child('top').set(editImage.top);
            dataSnapshot.child(editImage.idImage).child('nameElement').set(editImage.nameElement);
            dispatch({ type: 'UPDATE_IMAGE', Image })
        }

    }
}
export const testfirebase=(cb)=>{
    let datasnapshot=firebaseConnection.database().ref('Table1/UserActive');
    datasnapshot.orderByChild("createAt").startAt(1557730805870).endAt(1557730810113).on('value',(actives)=>{
        let arrData=[];
        let index=1;
        actives.forEach(element=>{
            const key=element.key;
            const action=element.val().action;
            const createAt=element.val().createAt;
            const displayName=element.val().displayName;
            const email=element.val().email;
            const nameElement=element.val().nameElement;
            arrData.push({
                // key:key,
                id:index,
                action:action,
                createAt:createAt,
                displayName:displayName,
                email:email,
                nameElement:nameElement
            })
            index=index+1;
        })
        cb(arrData);
    })
}