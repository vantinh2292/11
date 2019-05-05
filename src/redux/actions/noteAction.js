import { firebaseConnection } from "../../firebase";
var dataSnapshot = firebaseConnection.database().ref('Table1/Note');
export const actionAddData = (newItem) => {
    return (dispatch,getState) => {
        const {isEdit,isNew} = getState().note;
        if (!isEdit && isNew) {
            let temp = {
                ...newItem,
                createAt: Date.now()
            }
            dataSnapshot.push(temp);
            dispatch({type:'ADD_DATA'})
        }
    }
}
export const actionDeleteData = (index) =>{
    return(dispatch)=>{
        dataSnapshot.child(index).remove();
    }
}
export const actionEditData = (editItem)=>{
    return (dispatch,getState)=>{
        const {isEdit,isNew,ItemChoise}=getState().note;
        if (isEdit && !isNew) {
            dataSnapshot.child(ItemChoise).update(editItem);
            dispatch({type:'SET_DATA'});
        }
    }
}
export const actionToggleNewTrue = () => {
    return (dispatch) => {
        dispatch({ type: 'TOGGLE_NEW_TRUE' })
    }
};
export const actionToggleEdit = (ItemChoising,editItem) => {
    return (dispatch,getState) => {
        const {isEdit,ItemChoise}=getState().note;
        let SetEdit = false;
        if (isEdit === false) { SetEdit = true }
        if (isEdit === true && ItemChoise === ItemChoising) { SetEdit = false }
        if (isEdit === true && ItemChoise !== ItemChoising) { SetEdit = true }
        dispatch({ type: 'TOGGLE_EDIT' ,ItemChoising,SetEdit,editItem})
    }
}
export const actionToggleNew=()=>{
    return (dispatch)=>{
        dispatch({type:'TOGGLE_NEW'})
    }
}