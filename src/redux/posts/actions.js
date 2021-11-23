import {
    GET_ALL_POSTS_REQUEST,
    GET_ALL_POSTS_SUCCESS,
    GET_ALL_POSTS_FAILURE,
    GET_POST_DETAILS_REQUEST,
    GET_POST_DETAILS_FAILURE,
    GET_POST_DETAILS_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const getAllPostsRequest = (payload) => ({
    type: GET_ALL_POSTS_REQUEST,
    payload,
});

export const getAllPostsSuccess = (payload) => ({
    type: GET_ALL_POSTS_SUCCESS,
    payload,
});

export const getAllPostsFailure = (payload) => ({
    type: GET_ALL_POSTS_FAILURE,
    payload,
});

export const getPostDetailsRequest = (payload) => ({
    type: GET_POST_DETAILS_REQUEST,
    payload,
});

export const getPostDetailsSuccess = (payload) => ({
    type: GET_POST_DETAILS_SUCCESS,
    payload,
});

export const getPostDetailsFailure = (payload) => ({
    type: GET_POST_DETAILS_FAILURE,
    payload,
});

export const getAllPosts = (payload) => (dispatch) => {
    dispatch(getAllPostsRequest());
    return axios
        .get("https://frozen-fjord-76966.herokuapp.com/blogs-app/cards")
        .then((res) => res.data)
        .then((res) => {
            if (res.statusCode === 200) {
                return dispatch(getAllPostsSuccess({ allPostsData: res.data }));
            }
            return dispatch(getAllPostsFailure({ message: "Error" }));
        });
};

export const getPostDetails = (payload) => (dispatch) => {
    dispatch(getPostDetailsRequest());
    return axios
        .get(`https://frozen-fjord-76966.herokuapp.com/blogs-app/cards/${payload.id}`)
        .then((res) => res.data)
        .then((res) => {
            if (res.statusCode === 200) {
                return dispatch(getPostDetailsSuccess({ postDetailsData: res.data }));
            }
            return dispatch(getPostDetailsFailure({ message: "Error" }));
        });
};