import {ref} from "../base";

export default function() {
    // get posts from database using ref
    // return array

    let data;
    ref.on('value', function (data) {
        console.log(data.val());
        return data.val();
    });
}
