export const clickPost = (post) => {
    return {
        type: "POST_SELECTED",
        payload: post
    }
};