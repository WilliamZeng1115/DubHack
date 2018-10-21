export default function (state=null, action) {
    console.log(action.payload);
    switch(action.type){
        case "POST_SELECTED":
            return action.payload;
        default:
            return state;

    }
}