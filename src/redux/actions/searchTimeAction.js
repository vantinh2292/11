import { firebaseConnection } from "../../firebase";
import moment from 'moment'
export const actionUpdateTimeSearchTableReport = (object, Data) => {
    return (dispatch) => {
        let datasnapshot = firebaseConnection.database().ref('Table1/UserActive');
        datasnapshot.orderByChild("createAt").startAt(object.timeStart).endAt(object.timeEnd).on('value', (actives) => {
            var arrData = [];
            let index = 1;
            actives.forEach(element => {
                const key = element.key;
                const action = element.val().action;
                const createAt =  moment(element.val().createAt).calendar();
                const displayName = element.val().displayName;
                const email = element.val().email;
                const nameElement = element.val().nameElement;
                arrData.push({
                    // key:key,
                    id: index,
                    action: action,
                    createAt: createAt,
                    displayName: displayName,
                    email: email,
                    nameElement: nameElement
                })
                index = index + 1;
            })
            Data = arrData.reverse()
            dispatch({ type: 'UPDATE_TIMESEARCH_TABLE_REPORT', object, Data })
        })

    }
}
export const actionOpenSearch=()=>{
    return(dispatch)=>{
        dispatch({type:'OPEN_SEARCH'})
    }
}