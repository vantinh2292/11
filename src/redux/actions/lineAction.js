import {firebaseConnection} from "../../firebase";
var dataSnapshot = firebaseConnection.database().ref('Table1/LineHorizontal');
export const actionAddLineHorizontal = (newItem) => {
    return (dispatch,getState) => {
        const {addLineHorizontal,addLineVertical} = getState().auth;
        const {addLineLeft,addLineTop,addLineLength} =getState().line.addLine[0];
        if (!addLineVertical && addLineHorizontal) {
            let temp = {
                left: addLineLeft,
                top:addLineTop,
                length:addLineLength
            }
            dataSnapshot.push(temp);
        }
    }
}
export const actionLineAddLeftChange=(left)=>{
    return (dispatch)=>{
        dispatch({type:'CHANGE_ADD_LINE_LEFT',left})
    }
}
export const actionLineAddTopChange=(top)=>{
    return (dispatch)=>{
        dispatch({type:'CHANGE_ADD_LINE_TOP',top})
    }
}
export const actionLineAddLengthChange=(length)=>{
    return (dispatch)=>{
        dispatch({type:'CHANGE_ADD_LINE_LENGTH',length})
    }
}
export const actionMoveLeftDecrease=()=>{
    return (dispatch)=>{
        dispatch({type:'MOVE_LEFT_DECREASE',})
    }
}
export const actionMoveLeftIncrease=()=>{
    return (dispatch)=>{
        dispatch({type:'MOVE_LEFT_INCREASE',})
    }
}
export const actionMoveTopDecrease=()=>{
    return (dispatch)=>{
        dispatch({type:'MOVE_TOP_DECREASE',})
    }
}
export const actionMoveTopIncrease=()=>{
    return (dispatch)=>{
        dispatch({type:'MOVE_TOP_INCREASE',})
    }
}
export const actionLengthIncrease=()=>{
    return (dispatch)=>{
        dispatch({type:'MOVE_LENGTH_INCREASE',})
    }
}
export const actionLengthDecrease=()=>{
    return (dispatch)=>{
        dispatch({type:'MOVE_LENGTH_DECREASE',})
    }
}