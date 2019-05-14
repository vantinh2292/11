const initState = {
    tableReport: {
        timeStart: '',
        timeEnd: ''
    },
    data: [],
    searched: false

}
export const searchTimeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_TIMESEARCH_TABLE_REPORT':
            return {
                ...state,
                tableReport: {
                    timeStart: action.object.timeStart,
                    timeEnd: action.object.timeEnd
                },
                data: action.Data,
                searched: true
            };
        case 'OPEN_SEARCH':
            return {
                ...state,
                searched: false
            };

        default:
            return state
    }
}