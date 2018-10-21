import {ref} from '../base'

export const POST_FETCH = 'POST_FETCH';

export function fetchPost() {
    // get posts from database using ref
    // return array
    return dispatch => {
        ref.on('value', snapshot => {
            dispatch({
                type: POST_FETCH,
                payload: snapshot.val()
            });
        });
    }
}