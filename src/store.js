import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import ReactApp from './component/reducers/index'

const loggerMiddleware = createLogger()

let store = createStore(
    ReactApp,
    applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
))


export default store






