export default function (state=null, action) {
    switch(action.type){
        case "POST_CREATED":
            console.log("ran post created");
            return action.payload;
        default:
            return state;
    }
}