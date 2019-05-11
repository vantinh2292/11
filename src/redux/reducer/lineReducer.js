const initState = {
    addLine: [
        {
            addLineLeft: 100,
            addLineTop: 100,
            addLineLength: 100
        }
    ]
}
export const lineReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_ADD_LINE_LEFT':
            return {
                ...state,
                addLine: state.addLine.map((item, index) => {
                    if (index === 0) {
                        return {
                            ...item,
                            addLineLeft: action.left
                        }
                    }
                    return item
                })
            }

        case 'CHANGE_ADD_LINE_TOP':
            return {
                ...state,
                addLine: state.addLine.map((item, index) => {
                    if (index === 0) {
                        return {
                            ...item,
                            addLineTop: action.top
                        }
                    }
                    return item
                })
            }
        case 'CHANGE_ADD_LINE_LENGTH':
            return {
                ...state,
                addLine: state.addLine.map((item, index) => {
                    if (index === 0) {
                        return {
                            ...item,
                            addLineLength: action.length
                        }
                    }
                    return item
                })
            }
        case 'MOVE_LEFT_DECREASE':
            return {
                ...state,
                addLine: state.addLine.map((item, index) => {
                    if (index === 0) {
                        return {
                            ...item,
                            addLineLeft: parseInt(state.addLine[0].addLineLeft) - 1
                        }
                    }
                    return item
                })
            }
        case 'MOVE_LEFT_INCREASE':
            return {
                ...state,
                addLine: state.addLine.map((item, index) => {
                    if (index === 0) {
                        return {
                            ...item,
                            addLineLeft: parseInt(state.addLine[0].addLineLeft) + 1
                        }
                    }
                    return item
                })
            }
        case 'MOVE_TOP_DECREASE':
            return {
                ...state,
                addLine: state.addLine.map((item, index) => {
                    if (index === 0) {
                        return {
                            ...item,
                            addLineTop: parseInt(state.addLine[0].addLineTop) - 1
                        }
                    }
                    return item
                })
            }
        case 'MOVE_TOP_INCREASE':
            return {
                ...state,
                addLine: state.addLine.map((item, index) => {
                    if (index === 0) {
                        return {
                            ...item,
                            addLineTop: parseInt(state.addLine[0].addLineTop) + 1
                        }
                    }
                    return item
                })
            }
        case 'MOVE_LENGTH_INCREASE':
            return {
                ...state,
                addLine: state.addLine.map((item, index) => {
                    if (index === 0) {
                        return {
                            ...item,
                            addLineLength: parseInt(state.addLine[0].addLineLength) + 1
                        }
                    }
                    return item
                })
            }
        case 'MOVE_LENGTH_DECREASE':
            return {
                ...state,
                addLine: state.addLine.map((item, index) => {
                    if (index === 0) {
                        return {
                            ...item,
                            addLineLength: parseInt(state.addLine[0].addLineLength) - 1
                        }
                    }
                    return item
                })
            }

        default:
            return state
    }
}
