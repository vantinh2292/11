import {firebaseConnection} from '../../firebase'
export const signIn = (credentials)=>{
    return(dispatch)=>{
        firebaseConnection.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(()=>{
                console.log('dang nhap thanh cong');
        })
        .catch(function(err){
            console.log(err);
        })
}}
export const signOut = ()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signOut()
        .then(()=>{
            dispatch({type:'SIGN_OUT_SUCCESS'});
        })
        .catch((err)=>{
            dispatch({type:'SIGN_OUT_ERROR',err});
        });
    }
};

export const signUp = (newUser)=>{
    return (dispatch)=>{
        firebaseConnection.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
            return firebaseConnection.collection('users').doc(resp.user.uid).set({
                firstName:newUser.firstName,
                lastName:newUser.lastName,
                initials:newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(()=>{
            dispatch({type:'SIGNUP_SUCCESS'})
        }).catch(err=>{
            dispatch({type:'SIGNUP_ERROR',err})
        })
    }
}