const initState = {
    idImage:'',
    src:'',
    left:'',
    top:''
}
export const imageReducer = (state = initState, action) => {
    switch (action.type) {
        case 'TOGGLE_IMAGE':
        console.log('image reducer: TOGGLE_IMAGE');
            return {
                ...state,
                idImage: action.Image.idImage,
                src:action.Image.src,
                left:action.Image.left,
                top:action.Image.top
            };
        
        default:
            return state
    }
}