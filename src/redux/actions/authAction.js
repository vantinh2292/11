import { firebaseConnection } from '../../firebase'
export const signIn = (credentials) => {
    return (dispatch) => {
        firebaseConnection.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({ type: 'LOGIN_SUCCESS' });
            })
            .catch(function (err) {
                dispatch({ type: 'LOGIN_ERROR', err });
            })
    }
}
export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
            .then(() => {
                dispatch({ type: 'SIGN_OUT_SUCCESS' });
            })
            .catch((err) => {
                dispatch({ type: 'SIGN_OUT_ERROR', err });
            });
    }
};

export const signUp = (newUser) => {
    return (dispatch) => {
        firebaseConnection.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firebaseConnection.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}

export const updateProfile = (profile) => {
    return (dispatch) => {
        var user = firebaseConnection.auth().currentUser;
        user.updateProfile(profile)
        .then(function () {
            dispatch({type:'PROFILE_SUCCESS'})
        }).catch(function (error) {
            dispatch({type:'PROFILE_ERROR',error})
        });
    }
}