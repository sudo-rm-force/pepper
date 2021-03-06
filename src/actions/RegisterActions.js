import Response from '../api/registerApi'

export const voterIdChanged_reg = (text) => {
    return {
        type: voterIdChanged_reg,
        payload: text
    };
}

export const mobileNumChanged = (text) => {
    return {
        type: mobileNumChanged,
        payload: text
    }
}

export const nameChanged = (text) => {
    return {
        type: nameChanged,
        payload: text
    }
}

export const genderSelect = (text) => {
    return {
        type: genderSelect,
        payload: text
    }
}

export const register = ({voterId, name, mobile_no, gender, pic}) => {
    return (dispatch) => {
        // dispatch({ type: LOGIN_USER });
    
        // firebase.auth().signInWithEmailAndPassword(email, password)
        //   .then(user => loginUserSuccess(dispatch, user))
        //   .catch((error) => {
        //     console.log(error);
    
        //     firebase.auth().createUserWithEmailAndPassword(email, password)
        //       .then(user => loginUserSuccess(dispatch, user))
        //       .catch(() => loginUserFail(dispatch));
        //   });
        const userData = {
            voter_Id : voterId,
            name : name,
            face_id : pic ,
            gender : gender ,
            mobile_no : mobile_no
        }
        console.log(userData)

        Response.addUser(pic)
            .then((response) => registerSuccess(dispatch,response))
            .catch((err) =>registerFail(dispatch,err))
      };
}

const registerFail = (dispatch,err) => {
    dispatch({
        type : registerFail,
        payload : err
    })
}

const registerSuccess = (dispatch,response) => {
    dispatch({ 
        type : registerSuccess ,
        payload : response 
    })
}

export const takePic = (pic) => {
    return {
        type : takePic,
        payload: pic
    }
}