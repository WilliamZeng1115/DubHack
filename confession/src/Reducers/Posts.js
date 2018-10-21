import {ref} from "../base";

export const getPosts = (posts) => ({type: 'get_posts', posts});

export default function() {
    // get posts from database using ref
    // return array
    ref.on('value', function(data) {
        console.log(data.val());
    });
    return [];
}
