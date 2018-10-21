import {ref} from "../base";

export default async function() {
    // get posts from database using ref
    // return array
    return new Promise(function(resolve, reject) {
        ref.on('value', snapshot => {
            resolve(snapshot.val());
        })
    });
}
