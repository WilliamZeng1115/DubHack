import {ref} from '../base'
import {fetchPost} from "./Actions";

const POST_FETCH = "POST_FETCH";

function requestPosts(subreddit) {
    return {
        type: POST_FETCH,
        payload: ''
    }
}

export function fetchPost() {
    // get posts from database using ref
    // return array
    return dispatch => {
        dispatch(requestPosts())
        ref.on('value', snapshot => {
            dispatch({
                type: POST_FETCH,
                payload: snapshot.val()
            });
        });
    }
}