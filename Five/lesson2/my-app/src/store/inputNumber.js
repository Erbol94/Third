const ADDTEN = 'ADDTEN';
export const inputNumber = (state = {num: 0}, action) => {
    switch (action.type) {
        case ADDTEN:
            return {...state, num: action.payload + 10}
        default:
            return state
    }

}

export const ADDNUMBERACTION = (payload) => ({type:ADDTEN, payload:payload});

