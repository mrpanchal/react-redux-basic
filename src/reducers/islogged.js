const isLoggedReducer = (state = false, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return !false;
        default:
            return state;    
    }
}

export default isLoggedReducer;