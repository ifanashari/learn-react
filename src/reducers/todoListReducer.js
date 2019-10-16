const intialState = {
    listItem: [
        {
            todoText: "Alpha",
            status: false
        },
        {
            todoText: "Bravo",
            status: false
        },
        {
            todoText: "Delta",
            status: false
        }
    ],
    checkUpdate: false
}

const todoListReducer = (state = intialState, action) => {
    if(action.type === 'DO_SOMETHING'){
        state.checkUpdate = action.payload
    }

    return state
}

export default todoListReducer