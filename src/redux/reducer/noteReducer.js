const noteInitialState = {
    isEdit: false,
    isNew: false,
    oldItemChoise: "",
    ItemChoise: "",
    editItem: {},
    createAt:""
};
export const noteReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return { ...state, isEdit: false };
        case 'ADD_DATA':
            return { ...state, isNew: false };
        case 'TOGGLE_EDIT':
            return {
                ...state,
                isEdit: action.SetEdit,
                isNew: false,
                oldItemChoise: state.ItemChoise,
                ItemChoise: action.ItemChoising,
                editItem:action.editItem
            }
        case 'TOGGLE_NEW':
            return {
                ...state,
                isEdit: false,
                isNew: !state.isNew,
                ItemChoise: "1",
                editItem: {},
            }
        case 'TOGGLE_NEW_TRUE':
            return {
                ...state,
                isEdit: false,
                isNew: true,
                ItemChoise: "1",
                editItem: {},
            }
        default:
            return state;
    }

};