import todoListReducer from './todoListReducer'
import newsListReducer from './newsListReducer'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
    todoList: todoListReducer,
    newsList: newsListReducer,
})

export default allReducers