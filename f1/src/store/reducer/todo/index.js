const initialState={
    todo:[]
}
export default function todoReducer(state=initialState,action){
    const {type,payload}=action
    console.log("todoreducer",type,payload)
    switch(type){
        case "add":
            { 
                state.todo.push(payload)
                return state
            }
        case "sub":
            {
                return state
            }
        default:
            return state;
    }
}