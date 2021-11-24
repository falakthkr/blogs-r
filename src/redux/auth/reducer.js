import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_FAILURE, LOGOUT_SUCCESS } from "./actionTypes";

export const initstate = {
    isAuth: false,
    isLoading: false,
    isError: false,
    userData: []
};

const loginReducer = (state = initstate, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                isError: false,
                userData: payload.userData
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isError: true
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: false,
                isError: false
            };
        case LOGOUT_FAILURE:
            return {
                ...state,
                isError: true
            };
        default:
            return state;
    }
};

export default loginReducer;