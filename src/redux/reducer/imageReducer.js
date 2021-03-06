const initState = {
    idImage: '',
    src: '',
    left: '',
    top: '',
    nameElement: '',
    state:''
}
export const imageReducer = (state = initState, action) => {
    switch (action.type) {
        case 'TOGGLE_IMAGE':
            console.log('image reducer: TOGGLE_IMAGE');
            return {
                ...state,
                idImage: action.Image.idImage,
                src: action.Image.src,
                left: action.Image.left,
                top: action.Image.top,
                nameElement: action.Image.nameElement
            };
        case 'CLICK_IMAGE':
        console.log('CLICK_IMAGE')
            return {
                ...state,
                idImage: action.Image.idImage,
                left: action.Image.left,
                top: action.Image.top,
                nameElement: action.Image.nameElement
            };
        default:
            return state
    }
}
