import { GET_ALL_POSTS_REQUEST, GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_FAILURE, GET_POST_DETAILS_REQUEST, GET_POST_DETAILS_FAILURE, GET_POST_DETAILS_SUCCESS } from "./actionTypes";

export const initstate = {
    isLoading: false,
    isError: false,
    allPostsData: [],
    postDetailsData: [],
};

const loginReducer = (state = initstate, { type, payload }) => {
    switch (type) {
        case GET_ALL_POSTS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_ALL_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                allPostsData: payload.allPostsData
            };
        case GET_ALL_POSTS_FAILURE:
            return {
                ...state,
                isError: true
            };
        case GET_POST_DETAILS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_POST_DETAILS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                postDetailsData: payload.postDetailsData
            };
        case GET_POST_DETAILS_FAILURE:
            return {
                ...state,
                isError: true
            };
        default:
            return state;
    }
};

export default loginReducer;