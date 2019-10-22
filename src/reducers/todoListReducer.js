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
            todoText: "Charlie",
            status: false
        }
    ],
    done: 0,
    notDone: 0,
}

const todoListReducer = (state = intialState, action) => {
    const tmpListItem = state.listItem
    
    switch (action.type) {
        case 'UPDATE_LIST_ITEM':
            tmpListItem[action.payload].status = !tmpListItem[action.payload].status

            return {
                ...state,
                listItem: tmpListItem,
                done: countTodoStatus(tmpListItem).done,
                notDone: countTodoStatus(tmpListItem).notDone
            }
        
        case 'ADD_TODO':
            tmpListItem.push({
                todoText: action.payload,
                status: false
            })

            return {
                ...state,
                listItem: tmpListItem,
                done: countTodoStatus(tmpListItem).done,
                notDone: countTodoStatus(tmpListItem).notDone
            }

        case 'REMOVE_TODO':
            tmpListItem.splice(action.payload, 1)
        
            return {
                ...state,
                listItem: tmpListItem,
                done: countTodoStatus(tmpListItem).done,
                notDone: countTodoStatus(tmpListItem).notDone
            }

        default:
            
            return {
                ...state,
                done: countTodoStatus(tmpListItem).done,
                notDone: countTodoStatus(tmpListItem).notDone
            }
    }

}

function countTodoStatus(listItem){
    let tmpDone = listItem.filter((data) => {return data.status === true}).length
    let tmpNotDone = listItem.filter((data) => {return data.status === false}).length

    return {
        done: tmpDone,
        notDone: tmpNotDone
    }
}

export default todoListReducer