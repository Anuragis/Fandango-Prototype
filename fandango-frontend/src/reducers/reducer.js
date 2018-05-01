const initialState = {
    id : null,
    error : false,
}

const reducer = (state = initialState, action) => {
    if(action.type === 'SUCCESS'){
        console.log('Inside reducer', action);
        console.log('Payload', action.payload.data);

        if(action.payload.data != null) {
            return{
                ...initialState,
                id : action.payload.data
            }
        }
        else {
            return{
                ...initialState,
                error : true
            }
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
       
        console.log("Action Payload:  ",action.payload.data);
        if(action.payload.data !== undefined && action.payload.data !== null){
            localStorage.setItem('userid',JSON.stringify(action.payload.data));
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
