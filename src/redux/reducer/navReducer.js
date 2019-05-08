const initState = {
    openPageFull: false
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
        default:
            return state
    }
}
