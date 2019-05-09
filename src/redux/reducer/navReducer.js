const initState = {
    openPageFull: false,
    index: 1

}
export const navReducer = (state = initState, action) => {
    switch (action.type) {
        case 'TOGGLE_TRUE_NAV_PAGE_FULL':
            console.log('navToggle ');
            return {
                ...state,
                openPageFull: true
            };
        case 'TOGGLE_FALSE_NAV_PAGE_FULL':
            console.log('navToggle ');
            return {
                ...state,
                openPageFull: false
            };
        case 'CHANGE_INDEX':
            console.log('CHANGE INDEX ');
            return {
                ...state,
                index: action.index
            };

        default:
            return state
    }
}
