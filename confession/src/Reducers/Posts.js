import {ref} from "../base";

export default function() {
    // get posts from database using ref
    // return array
    ref.on('value', function(data) {
        console.log(data.val());
    });
    return [
        {
            id: 1,
            title: "test_test_test",
            detail: "Generally, a summary should be around one quarter the length of the original piece. So if the original piece is 4 pages long, your summary should be no more than 1 page.",
            created_at: new Date(2000, 11, 24, 10, 33, 30, 0)
        },
        {
            id: 11,
            title: "test_two",
            detail: "Write down what you think the main point of the piece is. This will help you start to put the piece's arguments in your own words. You can also ask yourself what point or points or themes come up throughout the entire piece. The title can also give you a tip as to the main point of the piece.",
            created_at: new Date(1990, 11, 24, 10, 33, 30, 0)
        },
        {
            id: 3,
            title: "test_three",
            detail: "Reread the piece, taking notes on the major points of it. Once you know for sure what the author's main point is, reread the piece, looking for the ways they support that point. You can find supporting material by looking for details that refer to the title, surprises in the argument or plot, repetition, or a lot of attention to detail. Write down each time something like this occurs.",
            created_at: new Date(2100, 11, 24, 10, 33, 30, 0)
        }
    ];
}
