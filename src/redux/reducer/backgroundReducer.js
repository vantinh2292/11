const initState = {
    indexClick: 0
}
export const backgroundReducer = (state = initState, action) => {
    switch (action.type) {
        case 'BACKGROUND_CLICK':
            if (state.indexClick > 0) {
                return {
                    ...state,
                    indexClick: state.indexClick - 1
                };
            }
            return state
        case 'BACKGROUND_IMAGE_CLICK':
                return {
                    ...state,
                    indexClick: 2
                };

        default:
            return state
    }
}
