
export const actionToggleTrueNavPageFull = () => {
    return (dispatch) => {
        dispatch({ type: 'TOGGLE_TRUE_NAV_PAGE_FULL' })
    }
}
export const actionToggleFalseNavPageFull = () => {
    return (dispatch) => {
        dispatch({ type: 'TOGGLE_FALSE_NAV_PAGE_FULL' })
    }
}
