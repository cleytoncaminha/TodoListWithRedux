
export default (state= [],action) => {
    switch(action.type){
        case "ADD_ITEM":
            return [...state, action.payload]
        case "DELETE_ITEM":
            return state.filter(item=> item.id != action.payload)
        case "CHAGE_DONE":
            return state.map(item=>{
                if(item.id == action.payload){
                    item.done = !item.done
                }
            })
    }
}