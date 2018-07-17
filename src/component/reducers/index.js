import { combineReducers } from 'redux'
import login from './login'


//可以写多个reducer  state下的login
const ReactApp = combineReducers({
    login
})

export default ReactApp