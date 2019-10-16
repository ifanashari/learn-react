import todoListReducer from './todoListReducer.js'

import {combineReducers} from 'redux'

const allReducers = combineReducers({
    todoList: todoListReducer 
})

export default allReducers