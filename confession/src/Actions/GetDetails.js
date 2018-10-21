export const fetchPost = (postList) => {
    return {
        type: "POST_FETCH",
        payload: postList
    }
};