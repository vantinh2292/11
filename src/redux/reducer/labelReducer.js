const initState = {
    idLabel:'',
    text:'',
    left:'',
    top:''
}
export const labelReducer = (state = initState, action) => {
    switch (action.type) {
        case 'TOGGLE_LABEL':
        console.log('image reducer: TOGGLE_LABEL');
            return {
                ...state,
                idLabel: action.Label.idLabel,
                text:action.Label.text,
                left:action.Label.left,
                top:action.Label.top
            };
        
        default:
            return state
    }
}