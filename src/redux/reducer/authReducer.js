const initState = {
    authError: null,
    editImage: false,
    editLabel: false,
    addLine:false,
    editLine: false
}
export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login err');
            return {
                ...state,
                authError: action.err.message
            };
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            };
        case 'SIGN_OUT_SUCCESS':
            return {
                ...state,
                authError: ''
            };
        case 'SIGN_OUT_ERROR':
            return {
                ...state,
                authError: 'SIGN OUT ERROR'
            };
        case 'SIGNUP_SUCCESS':
            console.log('SIGN UP success');
            return {
                ...state,
                authError: null
            };
        case 'SIGNUP_ERROR':
            console.log('SIGN UP error', action.err);
            return {
                ...state,
                authError: action.err.message
            };
        case 'PROFILE_SUCCESS':
            console.log('Update Profile Success');
            return {
                ...state,
                authError: ''
            };
        case 'PROFILE_ERROR':
            console.log('UPDATE PROFILE ERROR', action.err);
            return {
                ...state,
                authError: action.err.message
            };
        case 'TOGGLE_EDIT_IMAGE':
            console.log('TOGGLE EDIT IMAGE');
            return {
                ...state,
                editImage: !state.editImage,
                editLabel: false,
                editLine: false,
                addLine: false,
            };
        case 'TOGGLE_EDIT_LABEL':
            console.log('TOGGLE EDIT LABEL');
            return {
                ...state,
                editLabel: !state.editLabel,
                editImage: false,
                addLine: false,
                editLine: false,
            };
        case 'TOGGLE_ADD_LINE':
            console.log('TOGGLE ADD LINE');
            return {
                ...state,
                addLine: !state.addLine,
                editLine: false,
                editImage: false,
                editLabel: false,
            };
        case 'TOGGLE_EDIT_LINE':
            console.log('TOGGLE EDIT LINE');
            return {
                ...state,
                editLine: !state.editLine,
                addLine:false,
                editImage: false,
                editLabel: false,
            };
        default:
            return state
    }
}