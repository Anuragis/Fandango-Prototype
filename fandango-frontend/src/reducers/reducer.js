const initialState = {
    id : null,
    error : false,
}

const reducer = (state = initialState, action) => {
    if(action.type === 'SUCCESS'){
        return{
            ...initialState,
            id : action.payload.data
        }

    }
    if(action.type === 'ERROR'){
        return{
            ...initialState,
            error : 'error msg'
        }
    }
    if(action.type === 'LOGIN_SUCCESS'){
        console.log("In Reducer",action);
        localStorage.setItem('userid',action.payload.data);
        console.log("Action Payload:  ",action.payload.data);
        if(action.payload.data !== null){
            return{
                id : action.payload.data,
                error : false
            }
        }
        else{
            return{
                id : null,
                error : true
            }
        }
    }

    return state;
}
export default reducer;
