const initState = {
    authError: null
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
            console.log('SIGN OUT success');
            return {
                ...state,
                authError: 'sign-out success'
            };
        case 'SIGNUP_SUCCESS':
            console.log('SIGN UP success');
            return { 
                ...state,
                authError:null 
            };
        case 'SIGNUP_ERROR':
            console.log('SIGN UP error',action.err);
            return { 
                ...state,
                authError:action.err.message
            };
        default:
            return state
    }
}