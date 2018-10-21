import {combineReducers} from 'redux';
import posts from './Posts';
import activePosts from './ActivePosts';

const allReducer = combineReducers({
    posts: posts,
    active_post: activePosts,
});

export default allReducer;