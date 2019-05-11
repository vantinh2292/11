const initState = {
    editLine: {
        editLeft: '',
        editTop: '',
        editLength: '',
        idLine: '',
        idRun: '',
        type:''
    },
    addLine: [
        {
            addLineLeft: 100,
            addLineTop: 100,
            addLineLength: 100,
            addLineType:'H'
        }
    ]
}
export const lineReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_ADD_LINE_TYPE':
            return {
                ...state,
                addLine: state.addLine.map((item, index) => {
                    if (index === 0) {
                        return {
                            ...item,
                            addLineType: action.type_edit
                        }
                    }
                    return item
                })
            }
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
        case 'CLICK_LINE':
            return {
                ...state,
                editLine: {
                    editLeft: action.item.left,
                    editTop: action.item.top,
                    editLength: action.item.length,
                    idLine: action.item.i,
                    idRun: action.item.idRun,
                    type:action.item.type
                }
            }

        default:
            return state
    }
}
