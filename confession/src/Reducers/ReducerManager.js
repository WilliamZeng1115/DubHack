import {combineReducers} from 'redux';
import posts from './Posts';
import activePosts from './ActivePosts';
import {ref} from "../base";

const allReducer = combineReducers({
    posts: new Promise(function(resolve, reject) {
        ref.on('value', function (data) {
            console.log(data.val());
            resolve(data.val());
        });
    }).then(function(val) {
        console.log(val);
        return val;
    }),
    active_post: activePosts,
});

export default allReducer;
