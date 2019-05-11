import {firebaseConnection} from "../../firebase";

export const actionAddLine = () => {
    let dataSnapshot = firebaseConnection.database().ref('Table1/Line');
    return (dispatch,getState) => {
        const {addLine} = getState().auth;
        const {addLineLeft,addLineTop,addLineLength,addLineType} =getState().line.addLine[0];
        if (addLine) {
            let temp = {
                left: addLineLeft,
                top:addLineTop,
                length:addLineLength,
                type:addLineType
            }
            dataSnapshot.push(temp);
        }
    }
}

export const actionLineAddTypeChange=(type_edit)=>{
    return (dispatch)=>{
        dispatch({type:'CHANGE_ADD_LINE_TYPE',type_edit})
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
export const actionClickLine=(item)=>{
    return(dispatch)=>{
        dispatch({type:'CLICK_LINE',item})
    }
}
export const actionEditLine=(item)=>{
    let dataSnapshot = firebaseConnection.database().ref('Table1/Line');
    return(dispatch)=>{
        if(item.idLine!==''){
            dataSnapshot.child(item.idLine).update({
                length:item.length,
                left:item.left,
                top:item.top,
                idRun:item.idRun,
                type:item.type
            })
        }
    }
}
